import { Validator } from "../validator";
import { partialOf } from "./partial-of";
import { nullableOf } from "./nullable-of";
import { unionOf } from "./union-of";

export const maybeOf = <T>(validator: Validator<T>) =>
  nullableOf(partialOf(validator));
