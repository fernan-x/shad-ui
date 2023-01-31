import { useState } from "react";
import { SwipeBar } from "ui";
import "ui/dist/style.css";
import "./assets/styles/index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App flex flex-col justify-center items-center">
      <h1>Coucou {count} </h1>
      <SwipeBar />
    </div>
  );
}

export default App;
