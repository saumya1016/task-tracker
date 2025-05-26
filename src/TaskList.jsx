import { useState, useEffect } from "react";
import TaskItem from "./TaskItem.jsx";

function TaskList() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved
      ? JSON.parse(saved)
      : [
          { id: 1, title: "Learn React", category: "Learning", done: false },
          { id: 2, title: "Buy groceries", category: "Personal", done: false },
        ];
  });
  const [newTask, setNewTask] = useState("");
  const [category, setCategory] = useState("General");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        { id: tasks.length + 1, title: newTask, category, done: false },
      ]);
      setNewTask("");
      setCategory("General");
    }
  };

  const toggleDone = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    );
  };

  const filteredTasks = filter === "all" ? tasks : tasks.filter((task) => task.done);

  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="mb-8 glassmorphism rounded-2xl p-6">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-200 bg-white/70"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-200 bg-white/70"
          >
            <option value="Personal">Personal</option>
            <option value="General">General</option>
            <option value="Learning">Learning</option>
          </select>
          <button
            onClick={handleAddTask}
            className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg hover:from-orange-600 hover:to-amber-600 transition-all duration-300 transform hover:scale-105"
          >
            Add Task
          </button>
        </div>
        <button
          onClick={() => setFilter(filter === "all" ? "done" : "all")}
          className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full hover:bg-amber-200 transition-all duration-200 flex items-center gap-2"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
          {filter === "all" ? "Show Done" : "Show All"}
        </button>
      </div>
      <ul className="space-y-4">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              category={task.category}
              done={task.done}
              onToggle={toggleDone}
            />
          ))
        ) : (
          <div className="text-center text-gray-600 py-8">
            <p>No tasks to show. {filter === "done" ? "Mark some tasks as done!" : "Add a new task!"}</p>
          </div>
        )}
      </ul>
    </div>
  );
}

export default TaskList;