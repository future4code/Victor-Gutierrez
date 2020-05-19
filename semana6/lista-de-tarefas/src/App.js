import React from "react";
import styled from "styled-components";
import "./styles.css";

const TarefaList = styled.ul`
  padding: 0;
  width: 300px;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Tarefa = styled.li`
  text-align: center;
  list-style: none;
  text-decoration: ${({ completa }) => (completa ? "line-through" : "none")};
`;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;

class App extends React.Component {
  state = {
    tarefas: [],
    inputValue: "",
    filter: "",
  };

  componentDidUpdate() {
    localStorage.setItem("tasks", JSON.stringify(this.state.tarefas));
  }

  componentDidMount() {
    this.setState({ tarefas: JSON.parse(localStorage.getItem("tasks")) || [] });
  }

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  criaTarefa = () => {
    let newTask = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false,
      delete: "(x)",
      edit: "----Editar----",
    };
    if (newTask.texto === "") {
      alert("Esta tarefa é nula");
    } else {
      this.setState({
        tarefas: [...this.state.tarefas, newTask],
        inputValue: "",
      });
    }
  };

  selectTarefa = (id) => {
    let renderAgain = this.state.tarefas.map((item) => {
      if (item.id === id) {
        return {
          completa: !item.completa,
          texto: item.texto,
          id: Date.now(),
          delete: "(x)",
          edit: "----Editar----",
        };
      } else {
        return item;
      }
    });
    this.setState({
      tarefas: renderAgain,
    });
  };

  onChangeFilter = (event) => {
    this.setState({ filter: event.target.value });
  };

  deleteItem = (id) => {
    let renderAgain = this.state.tarefas.map((item) => {
      if (item.id === id) {
        return {};
      } else {
        return item;
      }
    });
    this.setState({
      tarefas: renderAgain,
    });
  };

  editItem = (id) => {
    let edit = prompt("Deseja editar? Insira o novo conteúdo abaixo");
    let renderAgain = this.state.tarefas.map((item) => {
      if (item.id === id) {
        return {
          texto: edit,
          id: Date.now(),
          delete: "(x)",
          edit: "----Editar----",
        };
      } else {
        return item;
      }
    });
    this.setState({
      tarefas: renderAgain,
    });
  };

  deleteStorage = () => {
    localStorage.clear();
    alert("Você excluiu todos os dados, recarregue a página para fazer efeito");
    window.location.reload(false);
  };

  render() {
    let keyGen = () => Math.random() * 5;

    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filter) {
        case "pendentes":
          return !tarefa.completa;
        case "completas":
          return tarefa.completa;
        default:
          return true;
      }
    });

    return (
      <div className="App">
        <div>
          <h1>To-Do List</h1>
          <InputsContainer>
            <input
              value={this.state.inputValue}
              onChange={this.onChangeInput}
            />
            <button onClick={this.criaTarefa}>Adicionar</button>
            <ul>
              <li>Para editar clique uma vez no "Editar"</li>
              <li>Para excluir clique duas vezes no "x"</li>
              <li>Para concluir clique na tarefa</li>
            </ul>
            <button onClick={this.deleteStorage}>Excluir Todas</button>
          </InputsContainer>
        </div>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map((tarefa) => {
            return (
              <>
                <div
                  key={keyGen() + 1}
                  onDoubleClick={() => this.deleteItem(tarefa.id)}
                >
                  <Tarefa
                    completa={tarefa.completa}
                    key={keyGen()}
                    onClick={() => this.selectTarefa(tarefa.id)}
                  >
                    {tarefa.texto}
                  </Tarefa>
                  {tarefa.delete}
                </div>
                <span onClick={() => this.editItem(tarefa.id)}>
                  {tarefa.edit}
                </span>
              </>
            );
          })}
        </TarefaList>
      </div>
    );
  }
}

export default App;
