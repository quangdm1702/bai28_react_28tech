import './App.css';

function App() {
  let name = 'Doan Minh Quang';
  const css = {
    color: 'white',
    backgroundColor: 'black'
  };
  return (
    <>
      <div className="test" style={css}>
        Xin chao {name}
      </div>

      <div className="test" style={css}>
        Xin chao {name}
      </div>
    </>
  );
}

export default App;
