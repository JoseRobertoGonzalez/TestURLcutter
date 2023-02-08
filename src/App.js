import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Player from "./components/Player";

function App() {
  const [videoUrl, setVideoUrl] = useState('');
  const [showPlayer, setShowPlayer] = useState(!!videoUrl);
  const [error, setError] = useState(null);

  const handleVideoUrlChange = (url) => {
    setError(null);
    try {
      setVideoUrl(url);
      setShowPlayer(!!url);
    } catch (e) {
      setError("Invalid video URL entered");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Input setUrl={handleVideoUrlChange}/>
        {showPlayer && <Player src={videoUrl} />}
        {error && <div className="error">{error}</div>}
      </header>
    </div>
  );
}

export default App;
