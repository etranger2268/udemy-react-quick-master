import { useState } from 'react';
import Board from '@/_components/Board';

const Game = () => {
  const [count, setCount] = useState<number>(0);
  const [history, setHistory] = useState<(string | null)[][]>([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState<number>(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove] ?? Array(9).fill(null);

  const handleReset = () => {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  };

  const handlePlay = (nextSquares: (string | null)[]) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setCount((prev) => prev + 1);
  };

  const jumpTo = (nextMove: number) => setCurrentMove(nextMove);

  const moves = history.map((squares, move) => {
    const moveKey = move === 0 ? 'initial' : squares.join('-');
    let description: string;
    if (move > 0) {
      description = `Go to move #${move}`;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={moveKey}>
        <button
          type="button"
          onClick={() => jumpTo(move)}
          className="py-1 px-2 text-sm font-medium rounded-md bg-green-300 text-black transition-all duration-300 hover:opacity-75"
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="flex flex-row">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="ml-15 space-y-4">
        <div className="text-sm font-medium mb-2">Click Count: {count}</div>
        <ol className="list-decimal space-y-2">{moves}</ol>
        <div>
          <button
            type="button"
            onClick={handleReset}
            className="text-sm font-medium py-1 px-2 bg-gray-500 text-white rounded-md transition-all duration-300 hover:opacity-75"
          >
            reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Game;
