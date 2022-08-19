import { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState();
  useEffect(() => {
    const port = 8080;

    const fetchExpressApp = async () => {
      const response = await fetch(`http://localhost:${port}/`);

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
  }, []);

  return (
    <div className="App">
      <h1 style={{ fontSize: "20rem" }}>{text}</h1>
    </div>
  );
}

export default App;
