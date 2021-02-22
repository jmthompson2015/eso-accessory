/* eslint no-console: ["error", { allow: ["error"] }] */

import ItemUtils from "./ItemUtilities.js";

const URLGenerator = {};

const FASHION_PREFIX = "https://eso.mmo-fashion.com/";
const HOUSING_PREFIX = "https://eso-housing.com/furniture/";
const TTC_PREFIX =
  "https://us.tamrieltradecentre.com/pc/Trade/SearchResult?SearchType=Sell&ItemID=";
const TTC_SUFFIX = "&SortBy=Price&Order=asc";

URLGenerator.fashion = (productName) => {
  if (productName) {
    const suffix = productName
      .replace("Alinor", "High Elf")
      .replace(/[,']/g, "")
      .replace(/ /g, "-");

    return FASHION_PREFIX + suffix;
  }

  console.error(`Missing productName: ${productName}`);
  return null;
};

URLGenerator.housing = (productName) => {
  if (productName) {
    const suffix = productName.replace(/[,']/g, "").replace(/ /g, "-");

    return HOUSING_PREFIX + suffix;
  }

  console.error(`Missing productName: ${productName}`);
  return null;
};

URLGenerator.tamrielTradeCentre = (productName) => {
  if (productName) {
    const id = ItemUtils.itemId(productName.toLowerCase());

    if (id) {
      return TTC_PREFIX + id + TTC_SUFFIX;
    }

    console.error(`Missing ID: ${id} for productName: ${productName}`);
    return null;
  }

  console.error(`Missing productName: ${productName}`);
  return null;
};

Object.freeze(URLGenerator);

export default URLGenerator;
