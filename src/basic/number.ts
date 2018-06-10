import { createValidator, Validator } from "../validator";

const isNumber = (input: any): input is number => typeof input === "number";

export const vNumber: Validator<number> = createValidator("number", isNumber);
