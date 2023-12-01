import { useRecoilState } from "recoil";
import { todoState } from "../state/atom/todo";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import Todo from "./Todo";
import { charCountState } from "../state/selector/totaltodos";
export default function Todos() {
  const [todos, setTodos] = useRecoilState(todoState);
  const [text, setMessage] = useState("");
  const count = useRecoilValue(charCountState);
  function addTodo() {
    setTodos((prev) => [...prev, { id: Math.random(), text: text }]);
    setMessage("");
  }
  return (
    <div>
      <main>
        <input
          value={text}
          type="text"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></input>
        <button onClick={addTodo}>Add toDo</button>
        <button onClick={() => setTodos([])}>Clear All todo</button>
        {todos.map((t) => {
          return <Todo key={t.id} text={t.text} id={t.id} />;
        })}
        <h1>Total length is {count}</h1>
      </main>
    </div>
  );
}
