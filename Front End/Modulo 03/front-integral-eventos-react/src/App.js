import { useState } from 'react';
import close from "./assets/delete.svg";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [btn1, setBtn1] = useState('render ativo');
  const [btn2, setBtn2] = useState('render');
  const [btn3, setBtn3] = useState('render');

  function Tarefa({ display, id, completa, children, handleDelete }) {
    return (
      <li style={{ display: display }}>
        <span
          onClick={() => handleComplete(id)}
          style={{ textDecoration: completa && 'line-through' }}
        >
          {children}
        </span>
        <img className='close' src={close} onClick={() => handleDelete(id)} alt="botão de deletar tarefa" />
      </li>
    )
  }

  function Botao({ className, evento, children }) {
    return (
      <button className={className} onClick={evento}>{children}</button>
    )
  }

  function handleKeyDown(event) {
    if (event.key !== 'Enter') return;

    const novasTarefas = [...tarefas, { id: Math.random(), texto: event.target.value, completa: false, display: null }]

    setTarefas(novasTarefas);

    event.target.value = '';
  }

  function handleDelete(id) {
    const novasTarefas = tarefas.filter(tarefa => {
      return tarefa.id !== id
    });

    setTarefas(novasTarefas);
  }

  function handleComplete(id) {
    const novasTarefas = [...tarefas];
    const tarefaCompleta = novasTarefas.find(tarefa => {
      return tarefa.id === id;
    });

    tarefaCompleta.completa = !tarefaCompleta.completa;

    setTarefas(novasTarefas);
  }

  function restante() {
    const novasTarefas = tarefas.filter(tarefa => {
      return tarefa.completa === false;
    });

    return novasTarefas.length;
  }

  function mostrarAtivas() {
    for (let tarefa of tarefas) {
      if (tarefa.completa) {
        tarefa.display = 'none';
      } else {
        tarefa.display = null;
      }
    }

    setTarefas(tarefas);
    setBtn1('render');
    setBtn2('render ativo')
    setBtn3('render');;
  }

  function mostrarTodas() {
    const todasTarefas = tarefas.map(tarefa => {
      return { ...tarefa, display: null };
    });

    setTarefas(todasTarefas);
    setBtn1('render ativo');
    setBtn2('render');
    setBtn3('render');
  }

  function mostrarCompletas() {
    for (let tarefa of tarefas) {
      if (!tarefa.completa) {
        tarefa.display = 'none';
      } else {
        tarefa.display = null;
      }
    }

    setTarefas(tarefas);
    setBtn1('render');
    setBtn2('render');
    setBtn3('render ativo');
  }

  function limparCompletas() {
    const tarefasLimpas = tarefas.filter(tarefa => {
      return !tarefa.completa;
    });

    setTarefas(tarefasLimpas);
  }

  return (
    <div className="App">
      <h1>TAREFAS</h1>
      <input type="text" onKeyDown={handleKeyDown} />
      <ul className="ul-tarefas">
        {tarefas.map(tarefa => {
          return (
            <Tarefa
              key={tarefa.id}
              id={tarefa.id}
              handleDelete={handleDelete}
              handleComplete={handleComplete}
              completa={tarefa.completa}
              display={tarefa.display}
            >
              {tarefa.texto}
            </Tarefa>
          )
        })}
      </ul>
      <div className="rodape">
        <span className="restante">{restante()} itens restante</span>
        <ul className="filtros">
          <li><Botao className={btn1} evento={mostrarTodas}>Todas</Botao></li>
          <li><Botao className={btn2} evento={mostrarAtivas}>Ativas</Botao></li>
          <li><Botao className={btn3} evento={mostrarCompletas}>Completas</Botao></li>
        </ul>
        <button onClick={limparCompletas}>Limpar Completadas</button>
      </div>
    </div >
  );
}

export default App;