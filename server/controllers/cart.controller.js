import Cart from '../models/cart';

/**
 * Add an item
 * @param req
 * @param res
 * @returns void
 */

 // Todo: combine findOne and findOneAndUpdate into one.
export function addItemtoCart(req, res) {
  // Validate request.
  if (!req.body.cart.cusId || !req.body.cart.itemId ) {
    res.status(403).end();
  }

  Cart.findOne({ cusId: req.body.cart.cusId }).exec((err, cart) => {
    if (err) {
      res.status(500).send(err);
    }

    console.log(cart);
    if (cart == null) {
      // Cart not yet created.
      const newCart = new Cart();
      console.log(req.body.cart.itemId);
      newCart.cusId = req.body.cart.cusId;
      newCart.itemIds = [req.body.cart.itemId];

      newCart.save((saveErr, savedCart) => {
        console.log(saveErr);
        console.log(savedCart);
        if (saveErr) {
          res.status(500).send(saveErr);
        }
        res.json({ cart: savedCart });
      });
    }
    else {
      // Cart already exists.
      console.log(cart);
      Cart.findOneAndUpdate(
        { cusId: req.body.cart.cusId },
        { $push: { itemIds: req.body.cart.itemId }},
        {new: true},
        (saveErr, savedCart) => {
          if (saveErr) {
            res.status(500).send(saveErr);
          }
          res.json({ cart: savedCart });
        }
      );
      console.log(req.body);
    }
  });
}

/**
 * Get a single item
 * @param req
 * @param res
 * @returns void
 */
export function getCart(req, res) {
  Cart.findOne({ cusId: req.params.cusId }).exec((err, cart) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ cart: cart });
  });
}

/**
 * Delete an item
 * @param req
 * @param res
 * @returns void
 */
export function deleteItemFromCart(req, res) {
  // Validate request.
  if (!req.body.cart.cusId || !req.body.cart.itemId ) {
    res.status(403).end();
  }

  Cart.findOne({ cusId: req.body.cart.cusId }).exec((err, cart) => {
    console.log(cart);
    if (err || cart == null) {
      res.status(403).send(err);
    }


    Cart.findOneAndUpdate(
      { cusId: req.body.cart.cusId },
      { $pull: { itemIds: req.body.cart.itemId }},
      {new: true},
      (saveErr, savedCart) => {
        if (saveErr) {
          res.status(500).send(saveErr);
        }
        res.json({ cart: savedCart });
      }
    );
    console.log(req.body);

  });

}
