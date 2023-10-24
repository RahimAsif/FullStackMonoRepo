import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [about, setAbout] = useState(null);

  const backend_port = process.env.REACT_APP_BACKEND_PORT || 5001;
  let url = `http://localhost:${backend_port}/about`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setAbout(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  function getAboutSection() {
    if (about) {
      return (
        <div>
          <h3>{about.author}</h3>
          <h4>{about.description}</h4>
        </div>
      );
    }

    return null;
  }

  return (
    <div className="App">
      <h2>Full stack mono repo</h2>
      {getAboutSection()}
    </div>
  );
}

export default App;
