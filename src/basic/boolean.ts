import { createValidator, Validator } from "../validator";

const isBoolean = (input: any): input is boolean => typeof input === "boolean";

export const vBoolean: Validator<boolean> = createValidator(
  "boolean",
  isBoolean
);
