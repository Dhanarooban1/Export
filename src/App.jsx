import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Test from './Components/test'
import Homepage from './Components/Homepage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Test  /> */}
     <Homepage/>
    </>
  )
}

export default App
