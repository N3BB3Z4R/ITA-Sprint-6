import React, { useState, useEffect } from 'react';
import stories from './Data/stories.json';
import { GlobalStyle } from './css/GlobalStyle';
import { Escena } from './Components/Escena/Escena';
import { Controles } from './Components/Controles/Controles';
import { Welcome } from './Components/Welcome/Welcome';


function App() {
 
  // useState para cambio de Index de frases con botones
  // 0, 1, 2, 3 estados del index
  const [index, setIndex] = useState(0);
  // Es la primera visita? Saca modal de bienvenida y pide nombre
  const [nameVisit, setNameVisit] = useState(localStorage.getItem('nameVisit') || 'convidat'); 

  useEffect(() => {
    // escribir nameVisit en localStorage
    localStorage.setItem('nameVisit', nameVisit);    
  }, [nameVisit]);

  // useEffect para redibujar los cambios en el index para debug en la consola
  useEffect(() => {
    console.log("Carga", index + 1);
    Escena.index = index;
  }, [index]);

  return (
    <div className="App">
      {/* Cargando estilos globales pasando index y ruta de imagen */}
      <GlobalStyle index={index} img={stories[index].img} />
      <header className="header">
        <Welcome nameVisit={nameVisit} setNameVisit={setNameVisit}/>
        <div>
          <Controles length={stories.length} index={index} setIndex={setIndex} />
        </div>
        <div>
          <Escena index={index} idNum={stories[0].id} story={stories[0].txt} />
          <Escena index={index} idNum={stories[1].id} story={stories[1].txt} />
          <Escena index={index} idNum={stories[2].id} story={stories[2].txt} />
          <Escena index={index} idNum={stories[3].id} story={stories[3].txt} />
        </div>
      </header>
    </div>
  );
}

export default App;
