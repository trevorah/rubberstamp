import { createValidator } from "../validator";

const isNumber = (input: any): input is number => typeof input === "number";

export default createValidator("number", isNumber);
