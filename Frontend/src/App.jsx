import { useState } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//context
import { AuthProvider } from './context/AuthProvider'
import { UsuariosProvider } from './context/UsuariosProvider'

//Layout
import LayoutAuth from './Layout/LayoutAuth'
import RutaProtegida from './Layout/RutaProtegida'
//Pages
import Login from './pages/Login'
import Registro from './pages/Usuarios/Registro'
import OlvidePassword from './pages/Usuarios/OlvidePassword'
import Confirmar from './pages/Usuarios/Confirmar'

// pages (usuarios protegidas)
import Perfil from './pages/Usuarios/Perfil'
import CambiarPassword from './pages/Usuarios/CambiarPassword.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <AuthProvider>
      <UsuariosProvider>
        <Routes>
          {/* RUTAS PUBLICAS */}
          <Route path='/' element={<LayoutAuth />}>
            <Route index element={<Login />} />
            <Route path='registro' element={<Registro />} />
            <Route path='olvide-password' element={<OlvidePassword />} />
            <Route path='confirmar/:id' element={<Confirmar />} />
          </Route>

          {/* RUTAS PROTEGIDAS */}
          <Route  path='/perfil' element={<RutaProtegida />}>
          <Route index element={<Perfil />} />
          <Route path="cambiar-password" element={<CambiarPassword/>} />
          </Route>

        </Routes>
        </UsuariosProvider>
        </AuthProvider>
    </Router>
  )
}

export default App
