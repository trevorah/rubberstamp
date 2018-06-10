import { Validator } from "../validator";

import { vNull } from "../basic/null";
import { unionOf } from "./union-of";

export const nullableOf = <T>(validator: Validator<T>) =>
  unionOf(validator, vNull);
