import { createValidator } from "../validator";

const isBoolean = (input: any): input is boolean => typeof input === "boolean";

export default createValidator("boolean", isBoolean);
