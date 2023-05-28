import { useState, useEffect, useMemo } from "react";
import Card from "./Card";
import Timer from "./Timer";
import shuffleArray, { imagesSrc } from "../util/helpers";
import Result from "./Result";

interface T {
  tag: string;
  id: string;
}

const MemoryGame = () => {
  const [checking, setChecking] = useState(false);
  const [selectedCards, setSelectedCards] = useState<T[]>([]);
  const [gameFinished, setGameFinished] = useState(false);
  const [correct, setCorrect] = useState<string[]>([]);
  const res = useMemo(() => {
    if (!gameFinished) return shuffleArray(imagesSrc);
    return [];
  }, [gameFinished]);
  const [moves, setMoves] = useState(0);
  const [score, setScore] = useState(0);

  const handleCardClick = (tag: string, id: string) => {
    const div = { tag: tag, id: id };
    const ids = selectedCards.map((s) => s.id);

    if (
      checking ||
      selectedCards.length === 2 ||
      ids.includes(div.id) ||
      gameFinished
    ) {
      return;
    }
    if (correct.includes(div.tag)) return;
    document.getElementById(`${id}`)?.classList.add("flip");
    setSelectedCards((prevSelectedCards: T[]) => [...prevSelectedCards, div]);
  };

  useEffect(() => {
    if (selectedCards.length === 2) {
      setChecking(true);

      const [first, second] = selectedCards;

      if (first.tag === second.tag) {
        document.getElementById(`${first.id}`)?.classList.add("correct");
        document.getElementById(`${second.id}`)?.classList.add("correct");
        setCorrect((prevCorrect) => [...prevCorrect, first.tag]);
        setScore((prevScore) => prevScore + 1);
        if (res.length / 2 === score + 1) {
          setGameFinished(true);
          setCorrect([]);
        }
      } else {
        setTimeout(() => {
          const items = document.querySelectorAll(
            `[id="${first.id}"], [id="${second.id}"]`
          );
          items.forEach((item) => item.classList.remove("flip"));
        }, 1000);
      }

      setMoves((prevMoves) => prevMoves + 1);
      setSelectedCards([]);
      setTimeout(() => {
        setChecking(false);
      }, 1000);
    }
  }, [selectedCards, setScore, setMoves, res, score, moves]);

  return (
    <>
      {!gameFinished ? (
        <>
          <Timer />
          <div className="flex justify- gap-3 items-center">
            <span>Moves made: {moves}</span>
            <span>Current score: {score}</span>
          </div>
          <section className="container grid grid-cols-4 gap-8">
            {res.map((s, i) => {
              const div = { tag: s[1], id: s[2] };
              const ids = selectedCards.map((s) => s.id);
              const isDisabled = gameFinished || ids.includes(div.id);
              return (
                <Card
                  key={i}
                  src={s[0]}
                  id={s[2]}
                  tag={s[1]}
                  onClick={handleCardClick}
                  disabled={isDisabled}
                />
              );
            })}
          </section>{" "}
        </>
      ) : (
        <Result
          moves={moves}
          resetGame={setGameFinished}
          resetMoves={setMoves}
          resetScore={setScore}
        />
      )}
    </>
  );
};

export default MemoryGame;
