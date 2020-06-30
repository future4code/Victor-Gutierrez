import React, { useState } from "react";
import "./App.css";
import { Post } from "./components/Post";

const App = () => {
  const [postsList, setPostsList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const onChangeInput = (event) => {
    setInputValue(event.target.value);
  };

  const addPost = () => {
    // Adiciona um post à lista

    if (inputValue.length > 0) {
      const newPost = {
        id: Date.now(),
        text: inputValue,
        liked: false,
      };

      const newPostsList = [newPost, ...postsList];

      setPostsList(newPostsList);
      setInputValue("");
    } else {
      setErrorMessage(true);
      setTimeout(() => {
        setErrorMessage(false);
      }, 2000);
    }
  };

  const deletePost = (postId) => {
    // Apaga um post da lista
    const newPostsList = postsList.filter((post) => {
      return postId !== post.id;
    });

    setPostsList(newPostsList);
  };

  const toggleLike = (postId) => {
    // Altera o status de curtida de um post da lista
    const newPostsList = postsList.map((post) => {
      if (postId === post.id) {
        const novoPost = {
          ...post,
          liked: !post.liked,
        };
        return novoPost;
      } else {
        return post;
      }
    });

    setPostsList(newPostsList);
  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          onChange={onChangeInput}
          value={inputValue}
          placeholder={"Novo post"}
        />
        <button onClick={addPost}>Adicionar</button>
      </div>
      <br />

      <div data-testid={"posts-div"}>
        {postsList.length === 0 ? (
          <h1>Nenhum Post</h1>
        ) : (
          postsList.map((post) => {
            return (
              <Post
                key={post.id}
                post={post}
                toggleLike={toggleLike}
                deletePost={deletePost}
              />
            );
          })
        )}
      </div>

      {postsList.length === 0 ? (
        <></>
      ) : (
        <h4 data-testid={"post-counter"}>
          Quantidade de posts: {postsList.length}
        </h4>
      )}
      {errorMessage ? (
        <h2 data-testid={"warning-h2"} style={{ color: "red" }}>
          Essa ação é proibida
        </h2>
      ) : (
        <></>
      )}
    </div>
  );
};

export default App;
