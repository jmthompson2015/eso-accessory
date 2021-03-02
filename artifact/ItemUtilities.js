/* eslint no-console: ["error", { allow: ["error"] }] */
/* eslint prefer-destructuring: ["error", {"array": false}] */

import ItemLookUpTable from "./ItemLookUpTable.js";
import PriceTable from "./PriceTable.js";

const objectFilter = (node) => typeof node === "object";

const childObjects = (parent) => {
  let answer;

  if (parent) {
    const children = Object.values(parent);
    answer = R.filter(objectFilter, children);
  }

  return answer;
};

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
  const root = PriceTable.Data[itemId];
  let item = root;

  if (item) {
    let children = childObjects(item);

    while (children) {
      if (children.length === 1) {
        item = children[0];
        children = childObjects(item);
      } else if (children.length > 1) {
        // Find the child with the largest EntryCount.
        const reduceFunction = (accum, node) =>
          R.isNil(accum) || accum.EntryCount < node.EntryCount ? node : accum;
        item = R.reduce(reduceFunction, null, children);
        children = childObjects(item);
      } else {
        children = null;
      }
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

ItemUtilities.costMultiplePrice = (cost) => (cost ? 1.5 * cost : undefined);

ItemUtilities.entryCount = (itemKey) => {
  const item = ItemUtilities.item(itemKey);

  return item ? item.EntryCount : undefined;
};

ItemUtilities.estimatedPrice = (itemKey, cost) =>
  ItemUtilities.suggestedPrice(itemKey) ||
  ItemUtilities.midRangePrice(itemKey) ||
  ItemUtilities.costMultiplePrice(cost);

ItemUtilities.maximumPrice = (itemKey) => {
  const item = ItemUtilities.item(itemKey);

  return item ? item.Max : undefined;
};

ItemUtilities.midRangePrice = (itemKey) => {
  const minimumPrice = ItemUtilities.minimumPrice(itemKey);
  const averagePrice = ItemUtilities.averagePrice(itemKey);

  return minimumPrice > 0 && averagePrice > 0
    ? minimumPrice + 0.5 * (averagePrice - minimumPrice)
    : undefined;
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
