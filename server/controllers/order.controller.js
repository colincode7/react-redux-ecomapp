import Order from '../models/order';
import Cart from '../models/cart';

/**
 * Add an item
 * @param req
 * @param res
 * @returns void
 */

 // Todo(rishika): combine findOne and findOneAndUpdate into one.
export function createOrder(req, res) {
  // Validate request.
  if (!req.body.order.cusId || !req.body.order.address || !req.body.order.payOption|| !req.body.order.name) {
    console.log('Bad request: ' + req.body);
    res.status(403).end();
  }

  let itemsList = [];
  Cart.findOneAndRemove({ cusId: req.body.order.cusId }).exec((err, cart) => {
    if (err || cart == null) {
      res.status(500).send(err);
    } else {
      // Cart already exists.
      itemsList = cart.itemIds;
    }
    console.log(itemsList);
    const newOrder = new Order({
      cusId: req.body.order.cusId,
      name: req.body.order.name,
      address: req.body.order.address,
      payOption: req.body.order.payOption,
      itemsList: itemsList,
    });

    newOrder.save((err, createdOrder) => {
      if (err) {
        res.status(500).send(err);
      }
      console.log("Created order: "+ createdOrder);
      res.json({ order: createdOrder});
    });
  });

}
