import React from "react";
import "./App.css";
import CardGrande from "./components/CardGrande/CardGrande";
import CardPequeno from "./components/CardGrande/CardPequeno";
import ImagemButton from "./components/ImagemButton/ImagemButton";

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h1>Dados pessoais</h1>
        <CardGrande
          imagem="https://avatars2.githubusercontent.com/u/62355596?s=460&u=2555a26fbb0492942992f02dd48556c7f1aed637&v=4"
          nome="Victor Gutierrez"
          descricao="Olá, meu nome é Victor. Tenho 22 anos e sou aluno da Labenu. Tudo isso tem sido incrível e programação tem despertado meu interesse e foco como nunca."
        />
      </div>

      <CardPequeno
        nome="Endereço"
        descricao="Vila Buriti, Manaus, Amazonas"
        linkutil="https://www.google.com.br/maps/place/Amazonas/@-2.7465968,-61.0624816,274245m/data=!3m2!1e3!4b1!4m13!1m7!3m6!1s0x926c04888fc03827:0x20be63a446d097c1!2sR.+Rio+Itaqua%C3%AD,+162-628+-+Vila+Buriti,+Manaus+-+AM!3b1!8m2!3d-3.1332296!4d-59.945854!3m4!1s0x926c067a884ded93:0x1d76f6e9651b7c02!8m2!3d-3.089316!4d-60.1416228"
        descricaolink="Clique aqui para acessar a localização"
        imagem="https://img.icons8.com/pastel-glyph/64/000000/worldwide-location--v1.png"
      />
      <CardPequeno
        nome="Contato"
        descricao="Email: victorgutierrezgomes@gmail.com"
        linkutil="mailto:victorgutierrezgomes@gmail.com"
        descricaolink="Clique aqui para me enviar um e-mail"
        imagem="https://image.flaticon.com/icons/svg/683/683206.svg"
      />

      <div className="page-section-container">
        <h1>Experiências profissionais</h1>
        <CardGrande
          imagem="https://scontent.fpll2-1.fna.fbcdn.net/v/t1.0-9/48404595_2312127485524876_4599730942599233536_n.jpg?_nc_cat=1&_nc_sid=85a577&_nc_eui2=AeEO9ZLDzTbdYzBdInxNN_G4Exuh6o3o-LMTG6Hqjej4s4NdrpLuti0YxVMNcX6Pq8bjqdqVKeS18m_i1DioyMZr&_nc_ohc=255DFhuFjgcAX-WZfh9&_nc_ht=scontent.fpll2-1.fna&oh=91b277a22982462656232f65346f8ba4&oe=5EDF4317"
          nome="Marinha do Brasil"
          descricao="Auxiliar em seção de comunicações e informática"
        />

        <CardGrande
          imagem="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5eab0c8d3b34bcc0f12f3ddc_avatar_labenu_branco.png"
          nome="Labenu"
          descricao="Apontando meus próprios defeitos."
        />
      </div>

      <div className="page-section-container">
        <h1>Minhas redes sociais</h1>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
          link="https://www.facebook.com/Labenu-388131481831991/"
        />
        <ImagemButton
          imagem="https://www.gov.br/agricultura/pt-br/centrais-de-conteudo/imagens/linkedin.png/@@images/image.png"
          texto="LinkedIn"
          link="https://www.linkedin.com/in/weikeduo/"
        />
        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
          link="https://www.twitter.com"
        />
        <ImagemButton
          imagem="https://lh3.googleusercontent.com/proxy/kK521F_EY96Vvb7hUuE4k9Y-bsWi98AXy2V9xbqWhoFrdI1wOY4LZTacnGpuotxhMsr0hswSndyMQ2gzhGRFe0J6AVeS1yUMDALtwWpDuuRDF7ASfreTzDxXXyPqCw"
          texto="GitHub"
          link="https://github.com/V-Gutierrez?tab=repositories"
        />
      </div>
    </div>
  );
}

export default App;
