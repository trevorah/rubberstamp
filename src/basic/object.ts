import { createValidator, Validator } from "../validator";

const isObject = (input: any): input is { [key: string]: any } =>
  input !== null && typeof input === "object";

export const vObject: Validator<{ [key: string]: any }> = createValidator(
  "object",
  isObject
);
