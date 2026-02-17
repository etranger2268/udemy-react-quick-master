import { LINES } from '@/_constants/lines';

export const calculateWinner = (squares: (string | null)[]) => {
  for (const [a, b, c] of LINES) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        winner: squares[a],
        lines: [a, b, c],
      };
    }
  }
  return {
    winner: null,
    lines: [] as number[],
  };
};
