export const firePottery = (potteryObject, firingTemp) => {
  if (firingTemp > 2200) {
    potteryObject.cracked = true;
  } else {
    potteryObject.cracked = false;
  }

  return potteryObject;
};
