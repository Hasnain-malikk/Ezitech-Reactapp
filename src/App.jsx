import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'

function App() {
  
  return (
    <div className='main'>
      <BrowserRouter>
      <Navbar/>
      </BrowserRouter>
      
    </div>
  )
}

export default App
