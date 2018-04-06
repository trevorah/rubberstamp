import Validator from "../validator";
import ValidationError, { getErrorProps } from "../validation-error";

export default <A, B>(
  guardianA: Validator<A>,
  guardianB: Validator<B>
): Validator<A | B> => input => {
  try {
    return guardianA(input);
  } catch (errorA) {
    try {
      return guardianB(input);
    } catch (errorB) {
      const propsA = getErrorProps(errorA);
      const propsB = getErrorProps(errorB);

      throw new ValidationError(
        input,
        propsA.typeName + " | " + propsB.typeName,
        propsA.path || propsB.path
      );
    }
  }
};
