// Imports go first
import { makePottery } from "./PotteryWheel.js";
import { firePottery } from "./Kiln.js";
import { toSellOrNotToSell, usePottery } from "./PotteryCatalog.js";

// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 2, 4);
let bowl = makePottery("Bowl", 3, 3);
let plate = makePottery("Plate", 3, 1);
let teapot = makePottery("Teapot", 4, 5);
let vase = makePottery("Vase", 5, 6);

console.log(mug, bowl, plate, teapot, vase);

// Fire each piece of pottery in the kiln
console.log(firePottery(mug, 2000));
console.log(firePottery(bowl, 2100));
console.log(firePottery(plate, 2200));
console.log(firePottery(teapot, 2000));
console.log(firePottery(vase, 2400));
// Determine which ones should be sold, and their price

console.log(toSellOrNotToSell(mug));
console.log(toSellOrNotToSell(bowl));
console.log(toSellOrNotToSell(plate));
console.log(toSellOrNotToSell(teapot));
console.log(toSellOrNotToSell(vase));

// Invoke the component function that renders the HTML list
