import Validator from "../validator";
import validateObject from "../basic/object";
import ValidationError, { getErrorProps } from "../validation-error";

type ObjectOfGuardians = {
  [key: string]: Validator<any>;
};

type ObjectOfReturnTypes<T extends ObjectOfGuardians> = {
  [K in keyof T]: ReturnType<T[K]>
};

export default <T extends ObjectOfGuardians>(
  Guardians: T
): Validator<ObjectOfReturnTypes<T>> => {
  return input => {
    const inputObject = validateObject(input);
    let results = {} as ObjectOfReturnTypes<T>;

    Object.keys(Guardians).forEach((key, index) => {
      const item = inputObject[key];
      try {
        results[key] = Guardians[key](item);
      } catch (error) {
        const props = getErrorProps(error);

        throw new ValidationError(item, props.typeName, [key, ...props.path]);
      }
    });

    return results;
  };
};
