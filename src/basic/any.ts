import { createValidator, Validator } from "../validator";

const isAny = (input: any): input is any => true;

export const vAny: Validator<any> = createValidator("any", isAny);
