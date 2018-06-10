import { Validator } from "../validator";

import { vUndefined } from "../basic/undefined";
import { unionOf } from "./union-of";

export const partialOf = <T>(validator: Validator<T>) =>
  unionOf(validator, vUndefined);
