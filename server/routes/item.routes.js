import { Router } from 'express';
import * as ItemController from '../controllers/item.controller';
import * as CartController from '../controllers/cart.controller';
import * as OrderController from '../controllers/order.controller';
import * as LoginController from '../controllers/login.controller';
const router = new Router();

// Login
router.route('/login').post(LoginController.loginUser);

// Register
router.route('/register').post(LoginController.registerUser);

// Get all Items
router.route('/items').get(ItemController.getItems);

// Get one item by id (cleanup)
router.route('/items/:id').get(ItemController.getItem);

// Add item to cart.
router.route('/addtocart').post(CartController.addItemtoCart);

// Delete item from cart.
router.route('/deletefromcart').post(CartController.deleteItemFromCart);

// Get cart by cusId.
router.route('/cart/:cusId').get(CartController.getCart);

// Create a new order.
router.route('/createorder').post(OrderController.createOrder);


export default router;
