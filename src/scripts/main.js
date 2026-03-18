// Imports go first
import { makePottery } from "./PotteryWheel.js";

// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 2, 4);
let bowl = makePottery("Bowl", 3, 3);
let plate = makePottery("Plate", 3, 1);
let teapot = makePottery("Teapot", 4, 5);
let vase = makePottery("Vase", 5, 6);

console.log(mug, bowl, plate, teapot, vase);
// Fire each piece of pottery in the kiln

// Determine which ones should be sold, and their price

// Invoke the component function that renders the HTML list
