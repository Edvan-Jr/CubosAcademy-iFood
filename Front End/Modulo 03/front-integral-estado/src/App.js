import { useState } from 'react';

function App() {
  const [quantidade, setQuantidade] = useState(0);

  function somaQtd() {
    setQuantidade(quantidade + 1);
  }

  function subtraiQtd() {
    if (quantidade === 0) {
      return setQuantidade(quantidade);
    }

    setQuantidade(quantidade - 1);
  }

  return (
    <div className="App">
      <div className="card">
        <h1>Hamburguer</h1>
        <p>
          Arcu, sagittis, ut lectus
          congue dapibus semper odio a, lobortis.
        </p>
        <div className="controls">
          <button onClick={subtraiQtd}>-</button>
          <span>{quantidade}</span>
          <button onClick={somaQtd}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;