/* eslint no-console: ["error", { allow: ["error"] }] */

import ItemUtils from "./ItemUtilities.js";

const URLGenerator = {};

const FASHION_PREFIX = "https://eso.mmo-fashion.com/";
const HOUSING_PREFIX = "https://eso-housing.com/furniture/";
const PRODUCT_ICON_PREFIX =
  "https://elderscrollsonline.wiki.fextralife.com/file/Elder-Scrolls-Online/";
const PRODUCT_ICON_SUFFIX = ".jpg";
const RESOURCE_ICON_PREFIX =
  "https://elderscrollsonline.wiki.fextralife.com/file/Elder-Scrolls-Online/";
const RESOURCE_ICON_SUFFIX = ".png";
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

URLGenerator.productIcon = (productName) => {
  if (productName) {
    const midfix = productName
      .replace(/,/g, "")
      .replace(/ /g, "_")
      .toLowerCase();

    return PRODUCT_ICON_PREFIX + midfix + PRODUCT_ICON_SUFFIX;
  }

  console.error(`Missing productName: ${productName}`);
  return null;
};

URLGenerator.resourceIcon = (resourceName) => {
  if (resourceName) {
    const midfix = resourceName.replace(/ /g, "%20");

    return RESOURCE_ICON_PREFIX + midfix + RESOURCE_ICON_SUFFIX;
  }

  console.error(`Missing resourceName: ${resourceName}`);
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
