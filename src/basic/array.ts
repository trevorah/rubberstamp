import { createValidator, Validator } from "../validator";

const isArray = (input: any): input is Array<any> => Array.isArray(input);

export const vArray: Validator<Array<any>> = createValidator("Array", isArray);
