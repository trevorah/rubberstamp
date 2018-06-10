import { arrayOf, vString } from "../src";

const testValidator = arrayOf(vString);

test("validates simple array", () =>
  expect(testValidator(["hello", "world"])).toEqual(["hello", "world"]));

test("throws readable error for incorrect item", () =>
  expect(() => testValidator(["hello", null])).toThrow(
    "null is not string (at [1])"
  ));

test("throws readable error for incorrect array", () =>
  expect(() => testValidator(null)).toThrow("null is not Array"));
