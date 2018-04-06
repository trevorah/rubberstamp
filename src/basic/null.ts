import { createValidator } from "../validator";

const isNull = (input: any): input is null => input === null;

export default createValidator("null", isNull);
