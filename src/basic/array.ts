import { createValidator } from "../validator";

const isArray = (input: any): input is Array<any> => Array.isArray(input);

export default createValidator("Array", isArray);
