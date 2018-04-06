import * as g from "../src";

const testValidator = g.objectOf({
  cat: g.string,
  dog: g.number,
  fish: g.nullableOf(g.boolean)
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
