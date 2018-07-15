import Order from '../models/order';

/**
 * Add an item
 * @param req
 * @param res
 * @returns void
 */

 // Todo(rishika): combine findOne and findOneAndUpdate into one.
export function createOrder(req, res) {
  // Validate request.
  if (!req.body.order.cusId || !req.body.order.address || !req.body.order.payOption || !req.body.order.itemsList) {
    res.status(403).end();
  }

  const newOrder = new Order({
    cusId: req.body.order.cusId,
    address: req.body.order.address,
    payOption: req.body.order.payOption,
    itemsList: req.body.order.itemsList,
  });

  newOrder.save((err, createdOrder) => {
    if (err) {
      res.status(500).send(err);
    }
    console.log("Created order:"+ createdOrder);
    res.json({ order: createdOrder});

  });
}
