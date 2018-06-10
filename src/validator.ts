import ValidationError from "./validation-error";

export interface Validator<T> {
  (input: any): T;
}

export const createValidator = <T>(
  name: string,
  guardFn: (input: T) => input is T
): Validator<T> => {
  return input => {
    if (!guardFn(input)) {
      throw new ValidationError(input, name);
    }
    return input;
  };
};
