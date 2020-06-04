import React from "react";
import "./App.css";
import Post from "./components/Post/Post";
import styled from "styled-components";

export const FormPost = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;

  * {
    margin: 10px;
  }
`;

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: "Caião",
        fotoUsuario:
          "https://avatars0.githubusercontent.com/u/32692490?s=460&u=a05cdd0808bc4c51d82c45f1390d3fbafcf8f1f7&v=4",
        fotoPost:
          "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
      },
      {
        nomeUsuario: "Soter",
        fotoUsuario: "http://soter.ninja/static/media/img2.345aa59c.jpeg",
        fotoPost:
          "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
      },
      {
        nomeUsuario: "Paulinha",
        fotoUsuario: "http://soter.ninja/static/media/img3.7c69d4c3.jpeg",
        fotoPost:
          "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      },
    ],

    nomeUsuario: "",
    fotoUsuario: "",
    fotoPost: "",
  };

  OnSubmitPost = (e) => {
    e.preventDefault();
    const newPost = {
      nomeUsuario: this.state.nomeUsuario,
      fotoUsuario: this.state.fotoUsuario,
      fotoPost: this.state.fotoPost,
    };

    const newPostArr = [...this.state.posts, newPost];
    this.setState({ posts: newPostArr });

    const voidIt = {
      nomeUsuario: "",
      fotoUsuario: "",
      fotoPost: "",
    };

    this.setState({ nomeUsuario: "", fotoUsuario: "", fotoPost: "" });
  };

  handleNewUser = (e) => {
    this.setState({ nomeUsuario: e.target.value });
  };

  handleNewPhoto = (e) => {
    this.setState({ fotoUsuario: e.target.value });
  };

  handleNewPost = (e) => {
    this.setState({ fotoPost: e.target.value });
  };

  render() {
    return (
      <>
        <div className="wrapper">
          <h2 className="title">InstaLabe</h2>
          <FormPost>
            <label htmlFor="">Insira seu nome</label>
            <input
              onChange={this.handleNewUser}
              value={this.state.nomeUsuario}
              type="text"
              required
            />
            <label htmlFor="">Insira sua foto de perfil</label>
            <input
              onChange={this.handleNewPhoto}
              value={this.state.fotoUsuario}
              type="url"
              required
            />
            <label htmlFor="">Insira a foto para a postagem</label>
            <input
              onChange={this.handleNewPost}
              value={this.state.fotoPost}
              type="url"
              required
            />
            <button onClick={this.OnSubmitPost} type="submit">
              Postar!
            </button>
          </FormPost>
          <div className={"app-container"}>
            {this.state.posts.map((item) => (
              <Post
                key={item.nomeUsuario}
                nomeUsuario={item.nomeUsuario}
                fotoUsuario={item.fotoUsuario}
                fotoPost={item.fotoPost}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default App;
