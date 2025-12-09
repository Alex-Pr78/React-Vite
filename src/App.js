// ИМПОРТЫ — декларативный стиль

import React from "react";
import { useState } from "react";
import { today } from "./today";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";


function App() {
  // Декларативно: описываем состояние
  const [count, setCount] = useState(0);


  // Декларативный рендеринг
  // Тут описываем каким должен быть UI
  return React.createElement(
    React.Fragment,
    null,

    // Декларативно: описываем результат интерфейса (структуру)
    React.createElement(
      "div",
      null,

      // Декларативно: ссылка с картинкой
      React.createElement(
        "a",
        { href: "https://vite.dev", target: "_blank" },
        React.createElement("img", {
          src: viteLogo,
          className: "logo",
          alt: "Vite logo",
        })
      ),

      React.createElement(
        "a",
        { href: "https://react.dev", target: "_blank" },
        React.createElement("img", {
          src: reactLogo,
          className: "logo react",
          alt: "React logo",
        })
      )
    ),

    React.createElement("h1", null, "Vite + React"),

    // Декларативно: UI = функция от состояния
    React.createElement("p", null, `Сегодня: ${today()}`),


    // СМЕШАННЫЙ СТИЛЬ
    // Сам компонент – декларативный
    // Но обработчик onClick — императивный (там выполняется команда)
    React.createElement(
      "div",
      { className: "card" },

      React.createElement(
        "button",
        {
          // ИМПЕРАТИВНО — команда: когда клик → увеличить setCount на 1
          onClick: () => setCount(count => count + 1)
        },
        `count is ${count}`
      ),

      // Декларативно — обычный UI
      React.createElement(
        "p",
        null,
        "Edit ",
        React.createElement("code", null, "src/App.jsx"),
        " and save to test HMR"
      )
    ),


    React.createElement(
      "p",
      { className: "read-the-docs" },
      "Click on the Vite and React logos to learn more"
    )
  );
}

export default App;
