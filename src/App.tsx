import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './pages/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import About from './pages/About'
import Sucursales from './pages/Sucursales'

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/carrito' element={<Cart />} />
        <Route path='/nosotros' element={<About />} />
        <Route path='/map' element={<Sucursales />} />
      </Routes>
    </>
  )
}

export default App
