const createColorCell = (color, name) =>
  ReactDOMFactories.div({ style: { backgroundColor: color } }, name);

const createLink = (href, name) =>
  ReactDOMFactories.a({ key: name, href, target: "_blank" }, name);

const formatNumber = (value) => {
  if (![undefined, null].includes(value)) {
    const usFormatter = new Intl.NumberFormat("en-US");
    return usFormatter.format(value);
  }

  return undefined;
};

const round0 = (value) =>
  ![undefined, null].includes(value) ? value.toFixed(0) : undefined;

const round2 = (value) =>
  ![undefined, null].includes(value) ? value.toFixed(2) : undefined;

const TableColumns = [
  {
    key: "name",
    label: "Recipe",
    type: "string",
    className: "tl",
    cellFunction: (row) =>
      row.url ? createLink(row.url, row.name) : undefined,
  },
  {
    key: "quality",
    label: "Quality",
    type: "string",
    className: "tl",
    cellFunction: (row) =>
      row.quality
        ? createColorCell(row.quality.color, row.quality.name)
        : undefined,
    valueFunction: (row) => (row.quality ? row.quality.name : undefined),
  },
  {
    key: "recipeMinimumPrice",
    label: "Min. Price",
    type: "number",
    className: "tr",
    convertFunction: (row) => round2(row.recipeMinimumPrice),
    cellFunction: (row) => formatNumber(row.recipeMinimumPrice),
    valueFunction: (row) => parseFloat(row.recipeMinimumPrice),
  },
  {
    key: "recipeSuggestedPrice",
    label: "Sug. Price",
    type: "number",
    className: "tr",
    convertFunction: (row) => round0(row.recipeSuggestedPrice),
    cellFunction: (row) => formatNumber(row.recipeSuggestedPrice),
    valueFunction: (row) => parseFloat(row.recipeSuggestedPrice),
  },
  {
    key: "recipeAveragePrice",
    label: "Avg. Price",
    type: "number",
    className: "tr",
    convertFunction: (row) => round0(row.recipeAveragePrice),
    cellFunction: (row) => formatNumber(row.recipeAveragePrice),
    valueFunction: (row) => parseFloat(row.recipeAveragePrice),
  },
  {
    key: "recipeEntryCount",
    label: "Entry Count",
    type: "number",
    className: "tr",
    convertFunction: (row) => round0(row.recipeEntryCount),
    cellFunction: (row) =>
      row.ttcUrl
        ? createLink(row.ttcUrl, formatNumber(row.recipeEntryCount))
        : undefined,
    valueFunction: (row) => parseFloat(row.recipeEntryCount),
  },
  {
    key: "owner",
    label: "Owner",
    type: "string",
    className: "tl",
    cellFunction: (row) => (row.owner ? row.owner.name : "WANT"),
    valueFunction: (row) => (row.owner ? row.owner.name : "WANT"),
  },
  {
    key: "craft",
    label: "Craft",
    type: "string",
    className: "tl",
    valueFunction: (row) => (row.craft ? row.craft.name : undefined),
  },
  {
    key: "category",
    label: "Category",
    type: "string",
    className: "tl",
    valueFunction: (row) => (row.category ? row.category.name : undefined),
  },
  {
    key: "product",
    label: "Product",
    type: "string",
    className: "tl",
    cellFunction: (row) =>
      row.product && row.product.url
        ? createLink(row.product.url, row.product.name)
        : undefined,
    valueFunction: (row) => (row.product ? row.product.name : undefined),
  },
  {
    key: "craftCost",
    label: "Craft Cost",
    type: "number",
    className: "tr",
    convertFunction: (row) => round0(row.craftCost),
    cellFunction: (row) => formatNumber(row.craftCost),
    valueFunction: (row) => parseFloat(row.craftCost),
  },
  {
    key: "productMinimumPrice",
    label: "Product Min. Price",
    type: "number",
    className: "tr",
    convertFunction: (row) => round2(row.productMinimumPrice),
    cellFunction: (row) => formatNumber(row.productMinimumPrice),
    valueFunction: (row) => parseFloat(row.productMinimumPrice),
  },
  {
    key: "productSuggestedPrice",
    label: "Product Sug. Price",
    type: "number",
    className: "tr",
    convertFunction: (row) => round0(row.productSuggestedPrice),
    cellFunction: (row) => formatNumber(row.productSuggestedPrice),
    valueFunction: (row) => parseFloat(row.productSuggestedPrice),
  },
  {
    key: "productAveragePrice",
    label: "Product Avg. Price",
    type: "number",
    className: "tr",
    convertFunction: (row) => round0(row.productAveragePrice),
    cellFunction: (row) => formatNumber(row.productAveragePrice),
    valueFunction: (row) => parseFloat(row.productAveragePrice),
  },
  {
    key: "productEntryCount",
    label: "Product Entry Count",
    type: "number",
    className: "tr",
    convertFunction: (row) => round0(row.productEntryCount),
    cellFunction: (row) =>
      row.productTtcUrl
        ? createLink(row.productTtcUrl, formatNumber(row.productEntryCount))
        : undefined,
    valueFunction: (row) => parseFloat(row.productEntryCount),
  },
  {
    key: "profit",
    label: "Profit",
    type: "number",
    className: "tr",
    convertFunction: (row) => round0(row.profit),
    cellFunction: (row) => formatNumber(row.profit),
    valueFunction: (row) => parseFloat(row.profit),
  },
  {
    key: "breakEven",
    label: "Break Even",
    type: "number",
    className: "tr",
    cellFunction: (row) => formatNumber(row.breakEven),
    valueFunction: (row) => parseInt(row.breakEven, 10),
  },
  {
    key: "url",
    label: "URL",
    isShown: false,
  },
  {
    key: "ttcUrl",
    label: "TTC URL",
    isShown: false,
  },
  {
    key: "productTtcUrl",
    label: "Product TTC URL",
    isShown: false,
  },
];

export default TableColumns;
