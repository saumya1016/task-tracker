import TaskList from "./TaskList.jsx";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 py-12">
      <header className="glassmorphism p-8 rounded-b-3xl">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h1 className="text-4xl font-bold tracking-tight text-gray-800">
            Task Tracker
          </h1>
          <p className="mt-3 text-gray-600 text-lg">
            Stay organized, achieve more — {new Date().toLocaleDateString()}
          </p>
        </div>
      </header>
      <main className="mt-12">
        <TaskList />
      </main>
    </div>
  );
}

export default App;