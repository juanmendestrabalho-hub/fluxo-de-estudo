import { useState, useEffect } from "react";

export default function Pomodoro() {
  const [time, setTime] = useState(25 * 60);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const i = setInterval(() => {
      setTime(t => (t > 0 ? t - 1 : 0));
    }, 1000);

    return () => clearInterval(i);
  }, [running]);

  return (
    <div className="bg-white/10 p-4 rounded-xl">
      <h2 className="text-xl">⏱️ Pomodoro</h2>

      <div className="text-4xl my-4">
        {Math.floor(time / 60)}:{String(time % 60).padStart(2, "0")}
      </div>

      <button
        onClick={() => setRunning(!running)}
        className="bg-green-500 px-3 py-1 rounded"
      >
        {running ? "Pause" : "Start"}
      </button>
    </div>
  );
}
