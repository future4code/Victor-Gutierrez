import React, { Component } from "react";
import "./SecaoComentario.css";
import {} from "react-icons"

export class SecaoComentario extends Component {
  state = {
    comment: " ",
    comentarios: [],
    novoComentario: "",
    qntd: 0,
  };

  onChangeComentario = (e) => {
    console.log(e.target.value);
    this.setState({
      comment: e.target.value,
      novoComentario: e.target.value,
    });
  };

  renderComment = (event) => {
    event.preventDefault();
    const newComments = [...this.state.comentarios, this.state.novoComentario];
    this.setState({ comentarios: newComments });
    const qntd = this.state.qntd;
    this.setState({ qntd: qntd + 1 });
  };

  render() {
    return (
      <>
        <form>
          <div className={"comment-container"}>
            <input
              className={"input-comentario"}
              placeholder={"Comentário"}
              value={this.state.comment}
              onChange={this.onChangeComentario}
            />
            <button onClick={this.renderComment}>Enviar</button>
          </div>
          <h4>Seus comentários</h4>
          <p>
            {this.state.qntd}
            <CommentIcon />
          </p>
          <hr />
          <div>
            {this.state.comentarios.map((c) => (
              <p key={c}> {c}</p>
            ))}
          </div>
        </form>
      </>
    );
  }
}
