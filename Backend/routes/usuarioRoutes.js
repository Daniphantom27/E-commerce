import express from 'express';
import {
    prueba,
    registrar,
    confirmar,
    autenticar,
    perfil
} from '../controllers/usuarioController.js';
import checkAuth from '../middleware/authMiddleware.js';


const router = express.Router();

// Rutas Publicas
router.get('/prueba', prueba);
router.post('/', registrar);
router.get('/confirmar/:token', confirmar);
router.post('/login', autenticar);

router.get('/perfil', checkAuth , perfil);


export default router;