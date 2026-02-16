type SquareProps = {
  value: string | null;
  onSquareClick: () => void;
  isGray?: boolean;
};

const Square = ({ value, onSquareClick, isGray }: SquareProps) => {
  return (
    <button
      type="button"
      className={`w-8.5 h-8.5 ${isGray ? 'bg-yellow-200' : 'bg-white'} border float-left text-2xl font-bold leading-8.5 -mr-px p-0 text-center`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};

export default Square;
