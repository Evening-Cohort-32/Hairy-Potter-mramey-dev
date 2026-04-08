import { usePottery } from "./PotteryCatalog.js";

export const potteryList = () => {
  const pottery = usePottery();
  let potteryHTML = "";
  for (const piece of pottery) {
    potteryHTML += `
    <section class="pottery" id="${piece.id}">
    <img src="${piece.image}" class = "pottery__image" />
     <h2 class="pottery__shape">${piece.shape}</h2>
     <div class="pottery__properties">
       Item weighs ${piece.weight} lbs. and is ${piece.height} inches in height
     </div>
     <div class="pottery__price">Price is $${piece.price}</div>
   </section>
   `;
  }
  return potteryHTML;
};
