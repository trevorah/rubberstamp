import Validator from "../validator";
import validateArray from "../basic/array";
import ValidationError, { getErrorProps } from "../validation-error";

export default <T>(validator: Validator<T>): Validator<T[]> => input => {
  const inputArray = validateArray(input);

  return inputArray.map((item, index) => {
    try {
      return validator(item);
    } catch (error) {
      const errorProps = getErrorProps(error);

      throw new ValidationError(item, errorProps.typeName, [
        index,
        ...errorProps.path
      ]);
    }
  });
};
