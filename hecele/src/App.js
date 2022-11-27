import React from 'react';
import { hecele } from './hecele'

import "./App.css"

function App() {
  const sampleWord = "Afyonkarahisarlaştıramadıklarımızdanmışçasına"
  const [text, setText] = React.useState(sampleWord)
  const [heceler, setHeceler] = React.useState([])

  React.useEffect(() => {
    const words = text.split(" ")
    const heceler = words.map(word => hecele(word).join("-"))

    setHeceler(heceler.join(" "))

  }, [text])
  return (
    <div className="App">
      <p className="heceler">{heceler}</p>
      <textarea placeholder={sampleWord} onChange={e => setText(e.target.value)} />
    </div>
  );
}

export default App;
