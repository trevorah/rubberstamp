import { vString, vNumber, vBoolean, objectOf, nullableOf } from "../src";

const testValidator = objectOf({
  cat: vString,
  dog: vNumber,
  fish: nullableOf(vBoolean)
});

test("validates simple object", () =>
  expect(testValidator({ cat: "meow", dog: 3, fish: true })).toEqual({
    cat: "meow",
    dog: 3,
    fish: true
  }));

test("throws readable error for incorrect item", () =>
  expect(() =>
    testValidator({ cat: "meow", dog: 3, fish: "BAD VALUE" })
  ).toThrow("BAD VALUE is not boolean | null (at fish)"));
