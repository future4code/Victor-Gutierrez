import React from "react";

export class Comentarios extends React.Component {
  state = {
    comentarios: "",
    novoComentario: [],
  };

  handleChange = (e) => {
    this.setState({
      novoComentario: [...this.state.comentarios, e.target.value],
    });
  };

  render() {
    return (
      <div onChange={this.handleChange}>
        <h4>Você: </h4>
        <p>{this.props.content}</p>

        <h1>{this.state.novoComentario}</h1>
      </div>
    );
  }
}
