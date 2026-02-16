import Square from '@/_components/Square';

const App = () => {
  const handleClick = () => console.log('click');

  return (
    <div className="max-w-md mx-auto m-4">
      <Square value="o" onSquareClick={handleClick} />
      <Square value="o" onSquareClick={handleClick} />
      <Square value="o" onSquareClick={handleClick} />
    </div>
  );
};

export default App;
