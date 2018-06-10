import { createValidator, Validator } from "../validator";

const isUndefined = (input: any): input is undefined => input === undefined;

export const vUndefined: Validator<undefined> = createValidator(
  "undefined",
  isUndefined
);
