import * as g from "../src";

const x = g.objectOf({
  id: g.string,
  favouriteDog: g.maybeOf(g.string),
  luckyNumbers: g.arrayOf(g.number)
});
