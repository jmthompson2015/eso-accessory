/* eslint no-console: ["error", { allow: ["error"] }] */
/* eslint prefer-destructuring: ["error", {"array": false}] */

import ItemLookUpTable from "../artifact/ItemLookUpTable.js";
import PriceTable from "../artifact/PriceTable.js";

const ItemUtilities = {};

ItemUtilities.item = (itemKey) => {
  const item1 = ItemLookUpTable[itemKey];

  if (item1) {
    const itemId = Object.values(item1)[0];
    let item2 = PriceTable.Data[itemId];

    if (item2) {
      while (item2 && Object.values(item2).length === 1) {
        item2 = Object.values(item2)[0];
      }

      return item2;
    }

    console.error(
      `No price data found for itemId: ${itemId} for itemKey: ${itemKey}`
    );
  }

  console.error(`No item found for itemKey: ${itemKey}`);
  return null;
};

ItemUtilities.amountCount = (itemKey) => {
  const item = ItemUtilities.item(itemKey);

  return item.AmountCount;
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

ItemUtilities.suggestedPrice = (itemKey) => {
  const item = ItemUtilities.item(itemKey);

  return item ? item.SuggestedPrice : undefined;
};

Object.freeze(ItemUtilities);

export default ItemUtilities;
