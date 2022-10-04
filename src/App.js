import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';


function App() {
  
  const {onToggleButton, tg} = useTelegram()

  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <div className="App">
      <h1>It's working</h1>
      <button onClick={onToggleButton}>toggle-button</button>
    </div>
  );
}

export default App;
