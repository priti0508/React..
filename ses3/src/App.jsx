import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import {BrowserRouter} from 'react-router-dom'
import Props_ex from './components/Props_ex'
import Conditional1 from './components/Conditional1'
import Conditional2 from './components/Conditional2'
import Footer from './components/Footer'
import FormHandling from './components/FormHandling'

function App() {
 
  return (
    <>
      <div>
        <Props_ex name="peter" age={23}/>
        <Conditional1 isLoggedIn={true} />
        <Conditional2 isLoggedIn={false} />
      </div>



<Footer />
<FormHandling/>
      {/* <BrowserRouter>
      <Navbar/>
      </BrowserRouter> */}
    </>
  )
}

export default App