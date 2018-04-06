import { createValidator } from "../validator";

const isObject = (input: any): input is { [key: string]: any } =>
  input !== null && typeof input === "object";

export default createValidator("object", isObject);
