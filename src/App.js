import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("./data.JSON")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div className="App">
      <h2>this is React assignment</h2>
    </div>
  );
}

export default App;
