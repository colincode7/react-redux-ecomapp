import Item from '../models/item';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */
export function getItems(req, res) {
  Item.find().exec((err, items) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ items });
  });
}

/**
 * Add an item
 * @param req
 * @param res
 * @returns void
 */
export function addItem(req, res) {
  if (!req.body.item.name || !req.body.item.title || !req.body.item.content) {
    res.status(403).end();
  }

  const newPost = new Item(req.body.item);

  // Let's sanitize inputs
  newPost.title = sanitizeHtml(newPost.title);
  newPost.name = sanitizeHtml(newPost.name);
  newPost.content = sanitizeHtml(newPost.content);

  newPost.slug = slug(newPost.title.toLowerCase(), { lowercase: true });
  newPost.cuid = cuid();
  newPost.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ item: saved });
  });
}

/**
 * Get a single item
 * @param req
 * @param res
 * @returns void
 */
export function getItem(req, res) {
  Item.findOne({ id: req.params.id }).exec((err, item) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ item });
  });
}

/**
 * Delete an item
 * @param req
 * @param res
 * @returns void
 */
export function deleteItem(req, res) {
  Item.findOne({ id: req.params.id }).exec((err, item) => {
    if (err) {
      res.status(500).send(err);
    }

    item.remove(() => {
      res.status(200).end();
    });
  });
}
