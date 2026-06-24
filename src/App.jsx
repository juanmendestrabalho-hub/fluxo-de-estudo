
import Sidebar from "./components/Sidebar";
import Kanban from "./components/Kanban";
import Pomodoro from "./components/Pomodoro";
import Notes from "./components/Notes";
import AIChat from "./components/AIChat";

export default function App() {
  return (
    <div className="flex h-screen bg-gradient-to-br from-black to-gray-900">
      <Sidebar />

      <div className="flex-1 grid grid-cols-3 gap-4 p-4">
        <Kanban />
        <Pomodoro />
        <Notes />
        <AIChat />
      </div>
    </div>
  );
}
