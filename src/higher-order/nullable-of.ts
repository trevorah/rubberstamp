import Validator from "../validator";
import validateNull from "../basic/null";
import unionOf from "./union-of";

export default <T>(validator: Validator<T>) => unionOf(validator, validateNull);
