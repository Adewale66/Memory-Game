import { useState } from "react";
import clsx from "clsx";
import MemoryGame from "./components/MemoryGame";

function App() {
  const [started, setStarted] = useState(false);

  return (
    <main className=" flex flex-col items-center justify-center  w-full min-h-screen   p-4">
      <div className="mb-3 text-xl font-bold text-gray-700">
        <h1>Memory Game</h1>
      </div>
      <button
        className={clsx(
          "rounded-md bg-blue-500 p-2 text-white",
          started && "hidden"
        )}
        onClick={() => setStarted(true)}
      >
        Start Game
      </button>

      {started && <MemoryGame />}
      <footer className="mt-2 text-sm  text-gray-700 text-center ">
        &#169; 2023 By <a href="https://github.com/Adewale66">Adewale Kujore</a>
        . &#174; All rights Reserved | Icons by{" "}
        <a href="https://icons8.com/">icons8</a>
      </footer>
    </main>
  );
}

export default App;
