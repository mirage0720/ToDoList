import { use } from "react";
import { TodoContext, TodoContextAction } from "./TodoContext";

export function useTodo() {
  const context = use(TodoContext);
  if (!context) {
    throw new Error("useTodo는 TodoProvider 내부에서만 사용할 수 있습니다.");
  }
  return context;
}

export function useTodoAction() {
  const context = use(TodoContextAction);
  if (!context) {
    throw new Error(
      "useTodoAction는 TodoProvider 내부에서만 사용할 수 있습니다."
    );
  }
  return context;
}
