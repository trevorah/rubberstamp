import { createValidator } from "../validator";

const isAny = (input: any): input is any => true;

export default createValidator("any", isAny);
