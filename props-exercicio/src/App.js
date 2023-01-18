import React from "react";
import  {CardVideo}  from "./Componentes/CardVideo";
import "./styles.css";

export default function App() {

  const card1 = {
    img : "https://picsum.photos/400/400?a=1 ",
    titulo : "Título do Vídeo 1"
  }

  const card2 = {
    img : "https://picsum.photos/400/400?a=2 ",
    titulo : "Título do Vídeo 2"
  }

  const card3 = {
    img : "https://picsum.photos/400/400?a=3 ",
    titulo : "Título do Vídeo 3"
  }

  const card4 = {
    img : "https://picsum.photos/400/400?a=4 ",
    titulo : "Título do Vídeo 4"
  }

  const card5 = {
    img : "https://picsum.photos/400/400?a=5 ",
    titulo : "Título do Vídeo 5"
  }

  const card6 = {
    img : "https://picsum.photos/400/400?a=6 ",
    titulo : "Título do Vídeo 6"
  }

  const card7 = {
    img : "https://picsum.photos/400/400?a=7 ",
    titulo : "Título do Vídeo 7"
  }

  const card8 = {
    img : "https://picsum.photos/400/400?a=8 ",
    titulo : "Título do Vídeo 8"
  }

  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
          <CardVideo card={card1}/>
          <CardVideo card={card2}/>
          <CardVideo card={card3}/>
          <CardVideo card={card4}/>
          <CardVideo card={card5}/>
          <CardVideo card={card6}/>
          <CardVideo card={card7}/>
          <CardVideo card={card8}/>
        
          </section>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
