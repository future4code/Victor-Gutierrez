import React, { useState } from "react";
import {
  PostContainer,
  PostHeader,
  UserPhoto,
  PostPhoto,
  PostFooter,
} from "./styles";
import IconeComContador from "../IconeComContador/IconeComContador";
import SecaoComentario from "../SecaoComentario/SecaoComentario";
import iconeCoracaoBranco from "../../img/favorite-white.svg";
import iconeCoracaoPreto from "../../img/favorite.svg";
import iconeComentario from "../../img/comment_icon.svg";

const Post = (props) => {
  const [counters, setCounters] = useState({
    numeroCurtidas: 0,
    numeroComentarios: 0,
  });
  const [toggles, setToggles] = useState({
    comentando: false,
    curtido: false,
  });
  const [comentarios, setComentario] = useState([]);

  const onClickCurtida = () => {
    setToggles({ curtido: !toggles.curtido });
    setCounters({ ...counters, numeroCurtidas: toggles.curtido ? 0 : 1 });
    // Prevendo o atraso, pois a função roda após a definição do estado
  };

  const onClickComentario = () => {
    setToggles({ ...toggles, comentando: !toggles.comentando });
  };

  const enviarComentario = (comentario) => {
    setComentario([...comentarios, comentario]);
  };

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={"Imagem do usuario"} />
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={"Imagem do post"} />

      <PostFooter>
        <IconeComContador
          icone={toggles.curtido ? iconeCoracaoPreto : iconeCoracaoBranco}
          onClickIcone={onClickCurtida}
          valorContador={counters.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={counters.numeroComentarios}
        />
      </PostFooter>
      {toggles.comentando ? (
        <SecaoComentario
          enviarComentario={enviarComentario}
          comentarios={comentarios}
        />
      ) : (
        ""
      )}
    </PostContainer>
  );
};

export default Post;
