import { useState, useEffect } from "react";
import { load, save } from "../utils/storage";

export default function Kanban() {
  const [tasks, setTasks] = useState(load("tasks") || []);

  const [text, setText] = useState("");

  useEffect(() => save("tasks", tasks), [tasks]);

  function addTask() {
    if (!text) return;
    setTasks([...tasks, { id: Date.now(), text }]);
    setText("");
  }

  function remove(id) {
    setTasks(tasks.filter(t => t.id !== id));
  }

  return (
    <div className="bg-white/10 p-4 rounded-xl backdrop-blur-lg">
      <h2 className="text-xl mb-2">📌 Tarefas</h2>

      <input
        className="w-full p-2 bg-black/30"
        value={text}
        onChange={e => setText(e.target.value)}
      />

      <button onClick={addTask} className="mt-2 bg-blue-500 px-3 py-1 rounded">
        Add
      </button>

      <div className="mt-3 space-y-2">
        {tasks.map(t => (
          <div key={t.id} className="flex justify-between bg-black/40 p-2">
            {t.text}
            <button onClick={() => remove(t.id)}>❌</button>
          </div>
        ))}
      </div>
    </div>
  );
}
