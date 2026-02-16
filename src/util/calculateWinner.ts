import { LINES } from '@/_constants/lines';

export const calculateWinner = (squares: (string | null)[]) => {
  for (const [a, b, c] of LINES) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};
