import * as v from "../src";

const validateTodo = v.objectOf({
  id: v.string,
  title: v.string,
  completed: v.boolean
});

try {
  const todo = validateTodo({
    id: "123xyz",
    title: "get eggs",
    completed: false
  });
  // todo has the type:
  // {
  //   id: string;
  //   title: string;
  //   completed: boolean;
  // }
} catch (e) {
  console.error(e);
}
