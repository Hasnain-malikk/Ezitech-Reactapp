import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import AboutUs from './Components/AboutUs/AboutUs'
import Home from './Components/Home/Home'
import Certifications from './Components/Certifications/Certifications'
import Internships from './Components/Internships/Internships'
import Seminar from './Components/Seminar/Seminar'
import InternPortal from './Components/InternPortal/InternPortal'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'


function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/certifications' element={<Certifications/>}/>
      <Route path='/Internships' element={<Internships/>}/>
      <Route path='/seminar' element={<Seminar/>}/>
      <Route path='/internportal' element={<InternPortal/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
