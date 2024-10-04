'use client'
import { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState("");

  // Add new todo
  const addTodo = () => {
    if (inputValue.trim() === "") return;
    setTodos([
      ...todos,
      { id: Date.now(), text: inputValue, completed: false }, // Fixed object syntax
    ]);
    setInputValue("");
  };

  // Toggle todo completion
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a todo
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id)); // Fixed typo setTodo -> setTodos
  };

  return (
    <div className="bg-yellow-300 flex flex-col min-h-screen">
      <header className="bg-pink-900 text-white py-4">
        <div className="bg-yellow-500 max-w-4xl mx-auto text-center">
          <h1 className="bg-blue-500 text-4xl font-serif font-bold">~TodoList by Minahil Hamza~</h1>
          <p className="bg-red-500 text-1.9xl font-serif mt-5">
            ^Organize your work with our Next.js Todo List App^
          </p>
        </div>
      </header>

      <main className="flex-grow flex items-stretch justify-center">
        <div className="max-w-md p-4 bg-purple-700 rounded-lg shadow-md">
          <div className="mb-4">
            <div className="flex">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-grow text-white bg-black p-2 border border-purple-900 rounded-lg"
                placeholder="Add a new task..."
              />
              <button
                onClick={addTodo}
                className="ml-2 px-4 py-2 bg-pink-500 text-black rounded-lg hover:bg-blue-600"
              >
                Add
              </button>
            </div>
          </div>

          <ul className="space-y-2">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className={`flex items-center justify-between p-2 border border-gray-900 rounded-lg ${
                  todo.completed ? "bg-orange-900 line-through" : "bg-orange-300"
                }`}
              >
                <span>{todo.text}</span>
                <div>
                  <button
                    onClick={() => toggleTodo(todo.id)}
                    className="text-black px-2 py-1 text-sm bg-green-500 rounded-lg hover:bg-purple-800"
                  >
                    {todo.completed ? "Undo" : "Complete"}
                  </button>

                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="text-black px-2 py-1 text-sm bg-red-500 rounded-lg hover:bg-purple-600"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default TodoList;
