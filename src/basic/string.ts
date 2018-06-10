import { createValidator, Validator } from "../validator";

const isString = (input: any): input is string => typeof input === "string";

export const vString: Validator<string> = createValidator("string", isString);
