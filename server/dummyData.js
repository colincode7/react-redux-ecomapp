import Item from './models/item';
// import Cart from './models/cart';

export default function () {
  Item.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    const content1 = `The Brilliant Smoothie Blender delivers all the delicious-tasting flavors of restaurant smoothies and frozen drinks at a fraction of the price. With its durable stainless steel blade, powerful 575 Watt peak-power motor, ten speeds and pulse blending action, its fully equipped to prepare a variety of great-tasting beverages. Ordinary blenders spin contents around the walls of the jar, which can leave whole chunks untouched by the blades. The Wave~Action System has a unique container and blade system which is designed to continually force the mixture down into the blades for perfectly smooth results every time. The BPA-free 56 oz. container with easy-to-read measurement marks lets you measure ingredients right into the blender. A removable filler cap makes adding liquid while blending easy and the spout eliminates messy drips while pouring. Clean up is a breeze as the whole jar goes in the dishwasher. For your peace of mind, this product comes with a three-year limited warranty.`;

    const content2 = `Native Americans believe that the night air is filled with dreams both good and bad. The dream catcher when hung over or near your bed swinging freely in the air, catches the dreams as they flow by. The good dreams know how to pass through the dream catcher, slipping through the outer holes and slide down the soft feathers so gently that many times the sleeper does not know that he/she is dreaming. The bad dreams not knowing the way get tangled in the dream catcher and perish with the first light of the new day`;

    const content3 = `Add a touch of botanical decor to your home, office or outdoor landscape with the Delray Plants Mass Cane in 10" Pot. It has dark green leaves with cream/yellow stripes down the middle a beautiful look and looks good on the patio or in a shaded window. This Massangeana cane helps to purify the air and also add a natural feel to your surroundings. A low maintenance specimen, it only requires watering on a weekly or bi-weekly basis and daily misting. The mass cane plant also benefits from bi-monthly feeding with a foliage/plant fertilizer or liquid fertilizer. It can be kept in its original pot, placed in a new one of your choosing or transferred to the soil of a garden or landscape plot.`;

    const content4 = `The BaByliss Pro 2,000W Dryer is one of the classics. Its powerful AC motor with extra-high wattage delivers professional performance for salon-style results, with minimal noise. It features four temperature settings and an instant freeze button to lock in and accelerate long-lasting curls. This BaByliss hair dryer BAB307 also includes an 8mm slim concentrator nozzle that can be attached when needed for stronger air pressure. You will be able to create virtually any style you want. The attached 9' cord has a convenient hang-up feature for easy storage when done. `;

    const item1 = new Item({ id: 1001, name: 'Brilliant Blender', price: 50, img: 'blender.jpeg', description: content1 });
    const item2 = new Item({ id: 1002, name: 'Perfect Plant', price: 20, img: 'plant.jpg', description: content2 });
    const item3 = new Item({ id: 1003, name: 'Dream Catcher', price: 10, img: 'dreamCatcher.jpg', description: content3 });
    const item4 = new Item({ id: 1004, name: 'BaByliss Hair Dryer', price: 40, img: 'hairDryer.jpg', description: content4 });

    Item.create([item1, item2, item3, item4], (error) => {
      if (!error) {
        console.log('ready to go....');
      } else {
        console.log(error);
      }

    });
  });


}
