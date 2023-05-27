import Card from "./components/Card";
import { imagesSrc } from "./util/helpers";
import { useState, useMemo } from "react";
import shuffleArray from "./util/helpers";

function App() {
  const [started, setStarted] = useState(false);
  const [count, setCount] = useState(0);
  const res = useMemo(() => shuffleArray(imagesSrc), []);
  return (
    <main className=" flex flex-col items-center justify-center  w-full min-h-screen  p-4">
      <div className="mb-3 text-xl font-bold text-gray-700">
        <h1>Memory Game</h1>
      </div>
      <section className="container grid grid-cols-4 gap-8">
        {res.map((s, i) => {
          return (
            <Card
              key={i}
              src={s[0]}
              tag={s[1]}
              id={s[2]}
              gameStarted={started}
            />
          );
        })}
      </section>
    </main>
  );
}

export default App;
