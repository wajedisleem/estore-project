import { Router } from 'express';
import HomeController from './controllers/home.controller.js';
import ProductController from './controllers/product.controller.js';
import CartController from './controllers/cart.controller.js';

const router = Router();

router.get('/', HomeController.index);
router.get('/health', HomeController.health);
router.get('/log', HomeController.log);
router.get('/environment', HomeController.environment);

router.get('/products/offer', ProductController.offer);
router.get('/products/new', ProductController.new);
router.get('/products/featured', ProductController.featured);

router.get('/products', ProductController.search);
router.get('/products/:id', ProductController.details);
router.get('/products/:id/related', ProductController.related);

router.get('/cart', CartController.get);
router.post('/cart', CartController.add);
router.put('/cart/:productId', CartController.update);
router.delete('/cart/:productId', CartController.remove);

router.post('/order', OrderController.place);

export default router;
