import { useEffect, useState } from "react";

function App() {
  const BACKEND_SERVICE = process.env.REACT_APP_BACKEND_SERVICE;

  const [text, setText] = useState();
  useEffect(() => {
    const port = 8080;

    const fetchExpressApp = async () => {
      const response = await fetch(`http://${BACKEND_SERVICE}:${port}/`);

      if (!response.ok) {
        throw new Error(`Could not connect to local host port ${port}`);
      }

      const data = await response.json();
      const message = data.message;

      setText(message);
    };

    try {
      fetchExpressApp();
    } catch (error) {
      console.log(error.message);
    }
  }, [BACKEND_SERVICE]);

  return (
    <div className="App">
      <h1 style={{ fontSize: "10rem" }}>This react app works</h1>
      <h1 style={{ fontSize: "5rem" }}>
        Environment Variable: {BACKEND_SERVICE}
      </h1>
      <h1 style={{ fontSize: "20rem" }}>{text}</h1>
    </div>
  );
}

export default App;
