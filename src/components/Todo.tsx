import TodoList from "./TodoList";
import TodoHeader from "./TodoHeader";
import TodoEditor from "./TodoEditor";

export default function Todo() {
  return (
    <>
      <div className="todo">
        <TodoHeader />
        {/* <!-- 할 일 등록 --> */}
        <TodoEditor />
        {/* <!-- 할 일 목록 --> */}
        <TodoList />
      </div>
    </>
  );
}
