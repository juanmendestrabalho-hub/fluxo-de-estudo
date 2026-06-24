import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { load, save } from "../utils/storage";

export default function Notes() {
  const [text, setText] = useState(load("notes") || "");

  function update(v) {
    setText(v);
    save("notes", v);
  }

  return (
    <div className="bg-white/10 p-4 rounded-xl">
      <h2>📝 Notas</h2>

      <textarea
        className="w-full h-32 bg-black/30"
        value={text}
        onChange={e => update(e.target.value)}
      />

      <div className="mt-2 prose text-white">
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </div>
  );
}
