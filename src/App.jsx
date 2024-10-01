import "./App.css";
import MyComponents from "./components/MyComponents";
import Title from "./components/title";

import { useState } from "react";

function App() {
  const n = 15;

  const [name] = useState("Matheus");

  const redTitle = true;

  return (
    <>
      {/* {CSS global} */}
      <h1>React com CSS</h1>
      {/* {CSS de componente} */}
      <MyComponents />
      <p>Esse é o parágrafo do App.js</p>
      {/* Inline CSS */}
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>
        Este elemento foi estilizado de fora inline
      </p>
      {/* CSS Inline dinâmico */}
      <h2 style={n < 10 ? { color: "purple" } : { color: "pink " }}>
        CSS dinamico
      </h2>
      <h2 style={n > 10 ? { color: "purple" } : { color: "pink " }}>
        CSS dinamico
      </h2>
      <h2
        style={
          name === "Matheus"
            ? { color: "green", backgroundColor: "#000" }
            : null
        }
      >
        Teste nome
      </h2>
      {/* Classe dinamica */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Esse titulo vai ter classe dinamica
      </h2>
      {/* CSS Modules */}
      <Title />
    </>
  );
}

export default App;
