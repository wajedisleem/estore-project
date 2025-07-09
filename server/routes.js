import { Router } from 'express';
import HomeController from './controllers/home.controller.js';
import ProductController from './controllers/product.controller.js';

const router = Router();

router.get('/', HomeController.index);
router.get('/health', HomeController.health);
router.get('/log', HomeController.log);
router.get('/environment', HomeController.environment);

router.get('/products', ProductController.list);
export default router;
