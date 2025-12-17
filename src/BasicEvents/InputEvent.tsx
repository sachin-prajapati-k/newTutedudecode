import { useState } from "react";

export default function InputEvent() {
  const [task, setTask] = useState("");

  return (
    <>
      <p>{task} </p>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
    </>
  );
}
