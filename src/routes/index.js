import { Router } from "express";
const router = Router();
// rutas
router.get('/', (req, res) => res.render('index', { title: 'NodeJs Website' }));
router.get('/about', (req, res) => res.render('about', { title: 'About NodeJs'}));
router.get('/why', (req, res) => res.render('why', { title: 'Why NodeJs' }));
router.get('/what', (req, res) => res.render('what', { title: 'What NodeJs'}));
router.get('/start', (req, res) => res.render('start', { title: 'Start NodeJs'}));

export default router;