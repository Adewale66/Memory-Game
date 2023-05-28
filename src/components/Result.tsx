const Result = ({
  moves,

  resetGame,
  resetMoves,
  resetScore,
}: {
  moves: number;
  resetGame: React.Dispatch<React.SetStateAction<boolean>>;
  resetMoves: React.Dispatch<React.SetStateAction<number>>;
  resetScore: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className=" flex flex-col items-center justify-center p-4 gap-4">
      <span>Congratulations you have won the game with {moves} moves.</span>
      <button
        className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer "
        onClick={() => {
          resetMoves(0);
          resetScore(0);
          resetGame(false);
        }}
      >
        Play again
      </button>
    </div>
  );
};

export default Result;
