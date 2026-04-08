// Imports go first
import { makePottery } from "./PotteryWheel.js";
import { firePottery } from "./Kiln.js";
import { toSellOrNotToSell } from "./PotteryCatalog.js";
import { potteryList } from "./PotteryList.js";

// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 1, 4);
let bowl = makePottery("Bowl", 2, 3);
let plate = makePottery("Plate", 1.5, 1);
let teapot = makePottery("Teapot", 6, 5);
let vase = makePottery("Vase", 5, 6);

// Fire each piece of pottery in the kiln
firePottery(mug, 2000);
firePottery(bowl, 2100);
firePottery(plate, 2200);
firePottery(teapot, 2000);
firePottery(vase, 2400);

// Determine which ones should be sold, and their price

toSellOrNotToSell(mug);
toSellOrNotToSell(bowl);
toSellOrNotToSell(plate);
toSellOrNotToSell(teapot);
toSellOrNotToSell(vase);

// Invoke the component function that renders the HTML list

const articleElement = document.querySelector("article");
articleElement.innerHTML = potteryList();
