const createColorCell = (color, name) =>
  ReactDOMFactories.div({ style: { backgroundColor: color } }, name);

const createIcon = (iconUrl, name) =>
  ReactDOMFactories.img({
    key: iconUrl,
    src: iconUrl,
    style: { minWidth: 48, width: 48 },
    title: name,
  });

const createLink = (href, name) =>
  ReactDOMFactories.a({ key: name, href, target: "_blank" }, name);

const createSpan = (label, fontColor = "red") =>
  ReactDOMFactories.span({ key: label, style: { color: fontColor } }, label);

const usFormatter0 = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const formatNumber = (value, formatter = usFormatter0) =>
  ![undefined, null].includes(value) ? formatter.format(value) : undefined;

const TableColumns = [
  {
    key: "iconUrl",
    label: "Icon",
    type: "string",
    className: "tc",
    cellFunction: (row) =>
      row.product && row.product.iconUrl
        ? createIcon(row.product.iconUrl, row.product.name)
        : undefined,
    valueFunction: (row) => row.product.name,
  },
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
    key: "recipeEstimatedPrice",
    label: "Recipe Est. Price",
    type: "number",
    className: "tr",
    cellFunction: (row) => formatNumber(row.recipeEstimatedPrice),
    valueFunction: (row) => parseFloat(row.recipeEstimatedPrice),
  },
  {
    key: "recipeEntryCount",
    label: "Recipe Entry Count",
    type: "number",
    className: "tr",
    cellFunction: (row) =>
      row.ttcUrl
        ? createLink(row.ttcUrl, formatNumber(row.recipeEntryCount))
        : undefined,
    valueFunction: (row) => parseFloat(row.recipeEntryCount),
  },
  {
    key: "owner",
    label: "Recipe Owner",
    type: "string",
    className: "tl",
    cellFunction: (row) => (row.owner ? row.owner.name : "WANT"),
    valueFunction: (row) => (row.owner ? row.owner.name : "WANT"),
  },
  {
    key: "craft",
    label: "Recipe Craft",
    type: "string",
    className: "tl",
    valueFunction: (row) => (row.craft ? row.craft.name : undefined),
  },
  {
    key: "category",
    label: "Recipe Category",
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
    cellFunction: (row) => formatNumber(row.craftCost),
    valueFunction: (row) => parseFloat(row.craftCost),
  },
  {
    key: "productEstimatedPrice",
    label: "Product Est. Price",
    type: "number",
    className: "tr",
    cellFunction: (row) => formatNumber(row.productEstimatedPrice),
    valueFunction: (row) => parseFloat(row.productEstimatedPrice),
  },
  {
    key: "productEntryCount",
    label: "Product Entry Count",
    type: "number",
    className: "tr",
    cellFunction: (row) =>
      row.product && row.product.ttcUrl
        ? createLink(row.product.ttcUrl, formatNumber(row.productEntryCount))
        : undefined,
    valueFunction: (row) => parseFloat(row.productEntryCount),
  },
  {
    key: "profit",
    label: "Profit",
    type: "number",
    className: "tr",
    cellFunction: (row) => {
      const profit = formatNumber(row.profit);
      return row.profit < 0 ? createSpan(profit) : profit;
    },
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
];

export default TableColumns;
