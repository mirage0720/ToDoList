import { useEffect, useMemo, useState } from "react";
import { TodoContext, TodoContextAction } from "./TodoContext";

export default function TodoProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [todos, setTodos] = useState<Todo[]>(
    JSON.parse(localStorage.getItem("todos") || "[]")
  );

  const addTodo = (text: string) => {
    setTodos((todos) => [...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id: number) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const modifyTodo = (id: number, text: string) => {
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
  };

  const memoization = useMemo(
    () => ({ addTodo, toggleTodo, modifyTodo, deleteTodo }),
    []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <TodoContextAction value={memoization}>
        <TodoContext value={{ todos }}>{children}</TodoContext>
      </TodoContextAction>
    </>
  );
}
