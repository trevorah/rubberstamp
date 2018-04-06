import { createValidator } from "../validator";

const isString = (input: any): input is string => typeof input === "string";

export default createValidator("string", isString);
