import Square from '@/_components/Square';
import { calculateWinner } from '@/util/calculateWinner';

type BoardProps = {
  xIsNext: boolean;
  squares: (string | null)[];
  onPlay: (nextSquares: (string | null)[]) => void;
};

const Board = ({ xIsNext, squares, onPlay }: BoardProps) => {
  const handleClick = (index: number) => {
    if (calculateWinner(squares) || squares[index]) {
      return;
    }
    const nextSquares = [...squares];
    if (xIsNext) {
      nextSquares[index] = 'X';
    } else {
      nextSquares[index] = 'O';
    }
    onPlay(nextSquares);
  };

  const winner = calculateWinner(squares);
  const status = winner ? `Winner: ${winner}` : `Next Player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <>
      <h2 className="font-semibold">{status}</h2>
      <div className="flex">
        <Square value={squares[0] ?? null} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1] ?? null} onSquareClick={() => handleClick(1)} isGray={true} />
        <Square value={squares[2] ?? null} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="flex">
        <Square value={squares[3] ?? null} onSquareClick={() => handleClick(3)} isGray={true} />
        <Square value={squares[4] ?? null} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5] ?? null} onSquareClick={() => handleClick(5)} isGray={true} />
      </div>
      <div className="flex">
        <Square value={squares[6] ?? null} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7] ?? null} onSquareClick={() => handleClick(7)} isGray={true} />
        <Square value={squares[8] ?? null} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
};

export default Board;
