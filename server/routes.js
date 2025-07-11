import { Router } from 'express';
import HomeController from './controllers/home.controller.js';
import AuthController from './controllers/auth.controller.js';
import ProductController from './controllers/product.controller.js';
import CartController from './controllers/cart.controller.js';
import OrderController from './controllers/order.controller.js';
import { validateCartAdd, validateCartUpdate, validateCartRemove } from './validators/cart.validator.js';
import { validateOrderPlace } from './validators/order.validator.js';

const router = Router();

router.get('/', HomeController.index);
router.get('/health', HomeController.health);
router.get('/log', HomeController.log);
router.get('/environment', HomeController.environment);

router.post('/login', AuthController.login);
router.get('/verify', AuthController.verify);

router.get('/products/offer', ProductController.offer);
router.get('/products/new', ProductController.new);
router.get('/products/featured', ProductController.featured);

router.get('/products', ProductController.search);
router.get('/products/:id', ProductController.details);
router.get('/products/:id/related', ProductController.related);

router.get('/cart', CartController.get);
router.post('/cart', validateCartAdd, CartController.add);
router.put('/cart/:productId', validateCartUpdate, CartController.update);
router.delete('/cart/:productId', validateCartRemove, CartController.remove);

router.post('/order', validateOrderPlace, OrderController.place);

export default router;
