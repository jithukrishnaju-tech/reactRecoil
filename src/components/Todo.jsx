import { useSetRecoilState } from "recoil";
import { todoState } from "../state/atom/todo";

// import { useRecoilValue } from "recoil";

export default function Todos({ key, text, id }) {
  let changeTodo = useSetRecoilState(todoState);
  function deleteTodo() {
    changeTodo((value) => {
      return value.filter((todo) => todo.id !== id);
    });
  }
  return (
    <div>
      <p>{text}</p>
      <button onClick={deleteTodo}>X</button>
    </div>
  );
}
