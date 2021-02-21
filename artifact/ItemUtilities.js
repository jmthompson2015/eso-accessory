/* eslint no-console: ["error", { allow: ["error"] }] */
/* eslint prefer-destructuring: ["error", {"array": false}] */

import ItemLookUpTable from "./ItemLookUpTable.js";
import PriceTable from "./PriceTable.js";

const ItemUtilities = {};

ItemUtilities.itemId = (itemKey) => {
  const item = ItemLookUpTable[itemKey];

  if (item) {
    return Object.values(item)[0];
  }

  console.error(`No item found for itemKey: ${itemKey}`);
  return null;
};

ItemUtilities.item = (itemKey) => {
  const itemId = ItemUtilities.itemId(itemKey);
  let item = PriceTable.Data[itemId];

  if (item) {
    while (item && Object.values(item).length === 1) {
      item = Object.values(item)[0];
    }

    return item;
  }

  console.error(
    `No price data found for itemId: ${itemId} for itemKey: ${itemKey}`
  );
  return null;
};

ItemUtilities.amountCount = (itemKey) => {
  const item = ItemUtilities.item(itemKey);

  return item ? item.AmountCount : undefined;
};

ItemUtilities.averagePrice = (itemKey) => {
  const item = ItemUtilities.item(itemKey);

  return item ? item.Avg : undefined;
};

ItemUtilities.entryCount = (itemKey) => {
  const item = ItemUtilities.item(itemKey);

  return item ? item.EntryCount : undefined;
};

ItemUtilities.maximumPrice = (itemKey) => {
  const item = ItemUtilities.item(itemKey);

  return item ? item.Max : undefined;
};

ItemUtilities.minimumPrice = (itemKey) => {
  const item = ItemUtilities.item(itemKey);

  return item ? item.Min : undefined;
};

ItemUtilities.suggestedPrice1 = (itemKey) => {
  const item = ItemUtilities.item(itemKey);

  return item ? item.SuggestedPrice : undefined;
};

ItemUtilities.suggestedPrice2 = (itemKey) => {
  const minimumPrice = ItemUtilities.minimumPrice(itemKey);
  const averagePrice = ItemUtilities.averagePrice(itemKey);

  return minimumPrice > 0 && averagePrice > 0
    ? minimumPrice + (averagePrice - minimumPrice) / 2
    : undefined;
};

ItemUtilities.suggestedPrice = (itemKey) =>
  ItemUtilities.suggestedPrice1(itemKey) ||
  ItemUtilities.suggestedPrice2(itemKey);

Object.freeze(ItemUtilities);

export default ItemUtilities;
