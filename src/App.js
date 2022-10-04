import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp


function App() {
  
  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <div className="App">
      <h1>It's working</h1>
    </div>
  );
}

export default App;
