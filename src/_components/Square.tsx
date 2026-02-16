type SquareProps = {
  value: string;
  onSquareClick: () => void;
};

const Square = ({ value, onSquareClick }: SquareProps) => {
  return (
    <button
      type="button"
      className="w-8.5 h-8.5 bg-red-100 border border-[#999] float-left text-2xl font-bold leading-8.5 -mr-px p-0 text-center"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};

export default Square;
