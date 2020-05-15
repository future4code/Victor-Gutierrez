import React from "react";
import "./CardGrande.css";

function CardPequeno(props) {
  return (
    <div className="notsobigcard-container">
      <img src={props.imagem} />
      <div>
        <h4>{props.nome}</h4>
        <p>{props.descricao}</p>
        <p>
          <a target="_blank" href={props.linkutil}>
            {props.descricaolink}
          </a>
        </p>
      </div>
    </div>
  );
}

export default CardPequeno;
