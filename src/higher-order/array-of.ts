import { Validator } from "../validator";
import { vArray } from "../basic/array";
import ValidationError, { getErrorProps } from "../validation-error";

export const arrayOf = <T>(
  validator: Validator<T>
): Validator<T[]> => input => {
  const inputArray = vArray(input);

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
