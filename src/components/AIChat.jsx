import { useState } from "react";

export default function AIChat() {
  const [msgs, setMsgs] = useState([]);
  const [text, setText] = useState("");

  function send() {
    const user = { role: "user", text };
    const bot = { role: "ai", text: "Resposta simulada (conecte API depois)" };

    setMsgs([...msgs, user, bot]);
    setText("");
  }

  return (
    <div className="bg-white/10 p-4 rounded-xl">
      <h2>🤖 AI</h2>

      <div className="h-40 overflow-auto text-sm">
        {msgs.map((m, i) => (
          <div key={i} className="my-1">
            <b>{m.role}:</b> {m.text}
          </div>
        ))}
      </div>

      <input
        value={text}
        onChange={e => setText(e.target.value)}
        className="w-full bg-black/30 p-2"
      />

      <button onClick={send} className="mt-2 bg-purple-500 px-2">
        enviar
      </button>
    </div>
  );
}
