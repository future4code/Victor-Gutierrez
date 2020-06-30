import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import App from "./App";

test("Usuário deve conseguir criar um novo post e curtir este post", () => {
  const { getByPlaceholderText, getByText, getByTestId } = render(<App />);

  const addPostInput = getByPlaceholderText("Novo post");

  fireEvent.change(addPostInput, { target: { value: "This is a test" } });

  const addPostButton = getByText("Adicionar");

  fireEvent.click(addPostButton);

  const postsDiv = getByTestId("posts-div");

  expect(getByText("This is a test", postsDiv)).toBeInTheDocument();

  const likeButton = getByTestId("like-button");

  fireEvent.click(likeButton);

  expect(getByText("Descurtir", likeButton));
});

test("Usuário deve ser capaz de deletar um post", () => {
  const { getByPlaceholderText, getByText, getByTestId } = render(<App />);

  const addPostInput = getByPlaceholderText("Novo post");

  fireEvent.change(addPostInput, { target: { value: "This is a test" } });

  const addPostButton = getByText("Adicionar");

  fireEvent.click(addPostButton);

  const postsDiv = getByTestId("posts-div");

  expect(getByText("This is a test", postsDiv)).toBeInTheDocument();

  const deleteButton = getByTestId("delete-button");

  fireEvent.click(deleteButton);

  expect(deleteButton).not.toBeInTheDocument();
  expect(postsDiv).toHaveTextContent("Nenhum Post");
});

test("A interface deve contar o número de posts", () => {
  const { getByPlaceholderText, getByText, getAllByText, getByTestId } = render(
    <App />
  );
  const addPostInput = getByPlaceholderText("Novo post");
  const addPostButton = getByText("Adicionar");

  for (let i = 0; i < 4; i++) {
    fireEvent.change(addPostInput, { target: { value: "This is a test" } });
    fireEvent.click(addPostButton);
  }

  const generatedPosts = getAllByText("This is a test");
  const counter = getByTestId("post-counter");

  expect(counter).toHaveTextContent(
    `Quantidade de posts: ${generatedPosts.length}`
  );
});

test("O input deve esvaziar após a adição de um novo post", () => {
  const { getByPlaceholderText, getByText } = render(<App />);

  const addPostInput = getByPlaceholderText("Novo post");

  fireEvent.change(addPostInput, { target: { value: "This is a test" } });

  const addPostButton = getByText("Adicionar");

  fireEvent.click(addPostButton);

  expect(addPostInput).toHaveTextContent("");
});

test("O usuário não deve conseguir criar posts vazios e deve receber um aviso na tela caso tente, o aviso deve desaparecer após 3s", () => {
  const { getByPlaceholderText, getByText, getByTestId } = render(<App />);

  const addPostInput = getByPlaceholderText("Novo post");

  fireEvent.change(addPostInput, { target: { value: "" } });

  const addPostButton = getByText("Adicionar");
  const postsDiv = getByTestId("posts-div");

  fireEvent.click(addPostButton);

  expect(getByText("Essa ação é proibida")).toBeInTheDocument();
  expect(postsDiv).toHaveTextContent("Nenhum Post"); //Para garantir que nada foi criado

  wait(() => {
    expect(getByText("Essa ação é proibida")).not.toBeInTheDocument();
  });
});

test("Deve existir uma mensagem `Nenhum Post` caso não haja nenhum. ", () => {
  const { getByTestId } = render(<App />);
  const postsDiv = getByTestId("posts-div");

  expect(postsDiv).toHaveTextContent("Nenhum Post");
});
