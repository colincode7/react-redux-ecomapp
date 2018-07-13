import { Router } from 'express';
import * as ItemController from '../controllers/item.controller';
const router = new Router();

// Get all Posts
router.route('/items').get(ItemController.getItems);

// Get one post by cuid
router.route('/items/:id').get(ItemController.getItem);

// Add a new Post
router.route('/items').post(ItemController.addItem);

// Delete a post by cuid
router.route('/items/:id').delete(ItemController.deleteItem);

export default router;
