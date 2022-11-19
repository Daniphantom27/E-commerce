import express from 'express';
import {
    prueba,
    registrar,
    confirmar,
    autenticar,
    perfil,
    usuarioRegistrados,
    comprobarToken,
    nuevoPassword,
    actualizarPerfil,
    olvidePassword,
    actualizarPassword
} from '../controllers/usuarioController.js';
import checkAuth from '../middleware/authMiddleware.js';


const router = express.Router();

// Rutas Publicas
router.get('/prueba', prueba);
router.post('/', registrar);
router.get('/confirmar/:token', confirmar);
router.post('/login', autenticar);
router.post('/olvide-password', olvidePassword); 
router.route('/olvide-password/:token').get(comprobarToken).post(nuevoPassword);


//Rutas protegidas a través del middleware checkAuth
//Identificams el usuario y se identifica para mostrarle los datos o funcionalidades que le corresponden
router.get('/perfil', checkAuth , perfil);
router.put('/perfil/:id', checkAuth, perfil, actualizarPerfil);
router.get('/lista-usuarios', checkAuth, usuarioRegistrados);
router.put('/actualizar-password', checkAuth, actualizarPassword);

export default router;