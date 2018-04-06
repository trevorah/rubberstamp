import { createValidator } from "../validator";

const isUndefined = (input: any): input is undefined => input === undefined;

export default createValidator("undefined", isUndefined);
