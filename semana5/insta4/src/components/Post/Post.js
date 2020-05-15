import React from "react";
import "./Post.css";

import sharePlane from "./../../assets/iconfinder_038_028_share_link_friends_send_android_material_3171669.png";
import IconeSalvo from "./../../assets/instagram-tag-png-5-transparent.png";
import IconeNaoSalvo from "./../../assets/iconfinder_jee-67_2180667.png";
import { IconeComContador } from "../IconeComContador/IconeComContador";
import iconeCoracaoBranco from "../../img/favorite-white.svg";
import iconeCoracaoPreto from "../../img/favorite.svg";
import iconeComentario from "../../img/comment_icon.svg";
import { SecaoComentario } from "../SecaoComentario/SecaoComentario";
import Share from "../Share/Share";

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    favorito: false,
    salvo: false,
    sharing: false,
  };

  onClickCurtida = () => {
    const curtido = this.state.curtido;
    this.setState({
      curtido: !curtido,
      numeroCurtidas: this.state.numeroCurtidas === 1 ? 0 : 1,
    });
  };

  onClickSave = () => {
    const salvo = this.state.salvo;
    const favorito = this.state.favorito;
    alert("Você salvou este post")
    this.setState({
      salvo: !salvo,
      favorito: !favorito,
    });
  };

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando,
    });
  };

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1,
    });
  };

  onClickSharing = () => {
    let sharing = this.state.sharing;
    this.setState({ sharing: !sharing });
  };

  render() {
    let iconeCurtida;

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto;
    } else {
      iconeCurtida = iconeCoracaoBranco;
    }

    let componenteSharing;
    let componenteComentario;

    if (this.state.comentando) {
      componenteComentario = (
        <SecaoComentario aoEnviar={this.aoEnviarComentario} />
      );
    }

    if (this.state.sharing) {
      componenteSharing = <Share />;
    }

    let salvar;

    if (this.state.favorito) {
      salvar = IconeSalvo;
    } else {
      salvar = IconeNaoSalvo;
    }

    return (
      <>
        <div className={"post-container"}>
          <div className={"post-header"}>
            <img
              className={"user-photo"}
              src={this.props.fotoUsuario}
              alt={"Imagem do usuario"}
            />
            <p>{this.props.nomeUsuario}</p>
          </div>
          <img
            className={"post-photo"}
            src={this.props.fotoPost}
            alt={"Imagem do post"}
          />
          <div className={"post-footer"}>
            <div id="LikeNComent">
              <IconeComContador
                icone={iconeCurtida}
                onClickIcone={this.onClickCurtida}
                valorContador={this.state.numeroCurtidas}
              />

              <IconeComContador
                icone={iconeComentario}
                onClickIcone={this.onClickComentario}
                valorContador={this.state.numeroComentarios}
              />
            </div>
            <IconeComContador
              icone={sharePlane}
              onClickIcone={this.onClickSharing}
            />
            <IconeComContador icone={salvar} onClickIcone={this.onClickSave} />
          </div>
          {componenteSharing}
          {componenteComentario}
        </div>
      </>
    );
  }
}

export default Post;
