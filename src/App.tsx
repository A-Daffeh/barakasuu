import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Services from './components/pages/Services'
import Contact from './components/pages/Contact'
import Navig from './components/navbar/Navig'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>

      <Navig />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
