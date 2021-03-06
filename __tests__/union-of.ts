import { vNumber, vString, unionOf } from "../src";

const testValidator = unionOf(vString, vNumber);

test("validates first option", () =>
  expect(testValidator("hello")).toBe("hello"));

test("validates second option", () => expect(testValidator(2)).toBe(2));

test("throws readable error", () =>
  expect(() => testValidator(null)).toThrow("null is not string | number"));
