import { useEffect, useState } from "react";

const message =
  "Hey there!,\n" +
  "Here's something for u.\n" +
  "Hope you like it...";

export default function Welcome({ onNext }) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < message.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + message[index]);
        setIndex(index + 1);
      }, 80);

      return () => clearTimeout(timeout);
    } else {
      if (onNext) {
        const timer = setTimeout(() => {
          onNext();
        }, 800);

        return () => clearTimeout(timer);
      }
    }
  }, [index, onNext]);

  return (
    <div
      className="h-screen w-full flex items-center justify-center p-5"
      style={{
        background: "radial-gradient(ellipse at 50% 40%, #ffe4ec 0%, #ffd6e7 40%, #f5b8d0 100%)",
      }}
    >
      <pre
        className="font-mono text-4xl leading-12 whitespace-pre-wrap"
        style={{ color: "#ab5578" }}
      >
        {text}
        <span>▋</span>
      </pre>
    </div>
  );
}