import { useState } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//Layout
import LayoutAuth from './Layout/LayoutAuth'

//Pages
import Login from './pages/Login'
import Registro from './pages/Usuarios/Registro'
import OlvidePassword from './pages/Usuarios/OlvidePassword'
import Confirmar from './pages/Usuarios/Confirmar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
        <Routes>
          {/* RUTAS PUBLICAS */}
          <Route path='/' element={<LayoutAuth />}>
            <Route index element={<Login />} />
            <Route path='registro' element={<Registro />} />
            <Route path='olvide-password' element={<OlvidePassword />} />
            <Route path='confirmar/:id' element={<Confirmar />} />
          </Route>

        </Routes>
    </Router>
  )
}

export default App
