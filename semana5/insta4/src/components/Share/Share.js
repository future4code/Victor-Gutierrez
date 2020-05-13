import React, { Component } from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
import "./share.css";

export default class Share extends Component {
  state = {
    shareTitle: " ",
  };

  write = (e) => {
    this.setState({ shareTitle: e.target.value });
  };

  shareFacebook = () => {
    if (this.state.shareTitle === " ") {
      alert("Seu post está vazio");
    } else {
      alert(`Seu post : "${this.state.shareTitle}" foi enviado ao Facebook!`);
      console.log(
        `Seu post : "${this.state.shareTitle}" foi enviado ao Facebook!`
      );
    }
  };

  shareTwitter = () => {
    if (this.state.shareTitle === " ") {
      alert("Seu post está vazio");
    } else {
      alert(`Seu post : "${this.state.shareTitle}" foi enviado ao Twitter!`);
      console.log(
        `Seu post : "${this.state.shareTitle}" foi enviado ao Twitter!`
      );
    }
  };

  shareInstagram = () => {
    if (this.state.shareTitle === " ") {
      alert("Seu post está vazio");
    } else {
      alert(`Seu post : "${this.state.shareTitle}" foi enviado ao Instagram!`);
      console.log(
        `Seu post : "${this.state.shareTitle}" foi enviado ao Instagram!`
      );
    }
  };

  render() {
    return (
      <div>
        <div className={"container"}>
          <input
            onChange={this.write}
            type="text"
            value={this.state.shareTitle}
          />
        </div>
        <div className="buttons">
          <button onClick={this.shareFacebook}>
            <AiFillFacebook size={50} />
          </button>
          <button onClick={this.shareInstagram}>
            <AiFillInstagram size={50} />
          </button>
          <button onClick={this.shareTwitter}>
            <AiFillTwitterSquare size={50} />
          </button>
        </div>
      </div>
    );
  }
}
