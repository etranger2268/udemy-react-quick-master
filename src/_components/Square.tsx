type SquareProps = {
  value: string | null;
  onSquareClick: () => void;
  isRed?: boolean;
};

const Square = ({ value, onSquareClick, isRed }: SquareProps) => {
  return (
    <button
      type="button"
      className={`w-8.5 h-8.5 ${isRed ? 'bg-red-300' : 'bg-white'} border float-left text-2xl font-bold leading-8.5 -mr-px p-0 text-center`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};

export default Square;
