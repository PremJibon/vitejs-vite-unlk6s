import { useState } from 'react'

import './App.css'

function App() {
  let time = new Date().toLocaleTimeString()
  const [ctime,setCtime] = useState(time);
  const UpdateTime= ()=>{
    time = new Date().toLocaleTimeString()
    setCtime(time)
  }
  setInterval(UpdateTime)

  return (
    <>
    <h1>{ctime}</h1>
    <button onClick={UpdateTime}>get time</button>
    </>
  )
}

export default App
