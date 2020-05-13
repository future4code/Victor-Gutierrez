import React, { Component } from "react";
import "./SecaoComentario.css";
import { Comentarios } from "./../Comentarios/comentarios";

export class SecaoComentario extends Component {
  state = {
    comment: " ",
  };

  onChangeComentario = (e) => {
    console.log(e.target.value);
    this.setState({
      comment: e.target.value,
    });
  };

  render() {
    return (
      <>
        <div className={"comment-container"}>
          <input
            className={"input-comentario"}
            placeholder={"Comentário"}
            value={this.state.comment}
            onChange={this.onChangeComentario}
          />
          <button onClick={this.props.aoEnviar}> Enviar </button>
        </div>
        <Comentarios content={this.state.comment} />
      </>
    );
  }
}
