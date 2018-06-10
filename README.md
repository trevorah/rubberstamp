# rubberstamp

Refine and validate `any` with the minimum of effort.

```ts
import * as v from "rubberstamp";

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
```

Automagically adds typings and validates inputs.

```ts
import fetch from "node-fetch";
import * as v from "rubberstamp";

// [
//   {
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
//   },
//   {
//     "userId": 1,
//     "id": 2,
//     "title": "quis ut nam facilis et officia qui",
//     "completed": false
//   },
//   ...
// }

const todoGuardian = g.arrayOf(
  g.objectOf({
    userId: g.number,
    id: g.string,
    title: g.string,
    completed: g.boolean
  })
);

const x = g.boolean("hello");

fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(todoGuardian)
  .then(todos => {
    const completedTodos = todos.filter(todo => todo.completed);
  });
```
