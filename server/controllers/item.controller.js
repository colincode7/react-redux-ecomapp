import Item from '../models/item';


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
