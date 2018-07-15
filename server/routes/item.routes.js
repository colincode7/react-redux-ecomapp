import { Router } from 'express';
import * as ItemController from '../controllers/item.controller';
import * as CartController from '../controllers/cart.controller';
import * as OrderController from '../controllers/order.controller';
const router = new Router();

// Get all Posts
router.route('/items').get(ItemController.getItems);

// Get one item by id (cleanup)
router.route('/items/:id').get(ItemController.getItem);

// (TODO(rishika): cleanup) Add a new Post.
router.route('/items').post(ItemController.addItem);

// (TODO(rishika): cleanup) Delete a post by cuid.
router.route('/items/:id').delete(ItemController.deleteItem);

// Add item to cart.
router.route('/addtocart').post(CartController.addItemtoCart);

// Delete item from cart.
router.route('/deletefromcart').post(CartController.deleteItemFromCart);

// Get cart by cusId.
router.route('/cart/:cusId').get(CartController.getCart);

//create a new order
router.route('/createorder').post(OrderController.createOrder);

export default router;
