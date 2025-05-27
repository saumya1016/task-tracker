function TaskItem({ id, title, category, done, onToggle, onDelete }) {
  return (
    <li
      className={`flex justify-between items-center p-5 bg-white rounded-2xl shadow-lg mb-4 transition-all duration-300 transform hover:scale-[1.01] hover:shadow-2xl animate-slide-up ${
        done ? "line-through text-gray-400 bg-gray-50" : "text-gray-800"
      }`}
    >
      <div className="flex items-center gap-3">
        <span className="text-lg font-semibold">{title}</span>
        <span className="text-sm text-gray-600 bg-amber-100 px-3 py-1 rounded-full">
          {category}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => onToggle(id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
            done
              ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
              : "bg-amber-500 text-white hover:bg-amber-600"
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={done ? "M6 18L18 6M6 6l12 12" : "M5 13l4 4L19 7"}
            />
          </svg>
          {done ? "Undo" : "Done"}
        </button>

        {/* Delete Button */}
        <button
          onClick={() => onDelete(id)}
          className="flex items-center gap-1 px-4 py-2 bg-red-100 text-red-700 rounded-lg text-sm font-medium hover:bg-red-200 transition-all duration-300 transform hover:scale-105"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
