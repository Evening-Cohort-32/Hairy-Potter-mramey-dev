const availablePots = [];

export const toSellOrNotToSell = (potteryObject) => {
  if (potteryObject.cracked === false) {
    if (potteryObject.weight >= 6) {
      potteryObject.price = 40;
    } else if (potteryObject.weight < 6) {
      potteryObject.price = 20;
    }
    availablePots.push(potteryObject);
  }
  return potteryObject;
};

export const usePottery = () => {
  structuredClone(availablePots);
};
