import React from "react";
import "./App.css";
import Post from "./components/Post/Post";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="wrapper">
          <h2 className="title">InstaLabe</h2>
          <div className={"app-container"}>
          <Post
            nomeUsuario={"Caião"}
            fotoUsuario={"https://avatars0.githubusercontent.com/u/32692490?s=460&u=a05cdd0808bc4c51d82c45f1390d3fbafcf8f1f7&v=4"}
            fotoPost={"https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80"}
          />
          <Post
            nomeUsuario={"Soter"}
            fotoUsuario={"http://soter.ninja/static/media/img2.345aa59c.jpeg"}
            fotoPost={"https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"}
          />
          <Post
            nomeUsuario={"Paulinha"}
            fotoUsuario={"http://soter.ninja/static/media/img3.7c69d4c3.jpeg"}
            fotoPost={"https://images.unsplash.com/photo-1516004497017-fc037674c3aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}
          />
          
          <Post
            nomeUsuario={"Artur"}
            fotoUsuario={"https://media-exp1.licdn.com/dms/image/C4D03AQE7ulwuLgNbuw/profile-displayphoto-shrink_200_200/0?e=1594857600&v=beta&t=XQ9TrCMphEV7f3WczTCxE318FVZiEo1lsuAelwSK6zI"}
            fotoPost={"https://images.unsplash.com/photo-1521032078283-ca2eb1773c0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"}
          />
          <Post
            nomeUsuario={"Sekine"}
            fotoUsuario={"https://media-exp1.licdn.com/dms/image/C5603AQEv8ov52prHcw/profile-displayphoto-shrink_800_800/0?e=1594857600&v=beta&t=jYHljvoc-Zn_VBF1fW0uqRSLRr-72vI8ESQq1MEQFmQ"}
            fotoPost={"https://images.unsplash.com/photo-1516004497017-fc037674c3aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}
          />
          </div>
        </div>
        </>
      
    );
  }
}

export default App;
