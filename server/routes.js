import { Router } from 'express';
import HomeController from './controllers/home.controller.js';

const router = Router();

router.get('/', HomeController.index);
router.get('/health', HomeController.health);
router.get('/log', HomeController.log);
router.get('/environment', HomeController.environment);

export default router;
