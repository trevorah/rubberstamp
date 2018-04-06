import Validator from "../validator";
import validateUndefined from "../basic/undefined";
import unionOf from "./union-of";

export default <T>(validator: Validator<T>) =>
  unionOf(validator, validateUndefined);
