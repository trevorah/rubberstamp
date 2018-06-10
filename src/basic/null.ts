import { createValidator, Validator } from "../validator";

const isNull = (input: any): input is null => input === null;

export const vNull: Validator<null> = createValidator("null", isNull);
