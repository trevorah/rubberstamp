import fetch from "node-fetch";
import * as g from "../src";

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
