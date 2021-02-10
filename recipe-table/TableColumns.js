import Resolver from "../artifact/Resolver.js";

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
    key: "url",
    label: "URL",
    isShown: false,
  },
  {
    key: "ttcUrl",
    label: "TTC",
    isShown: false,
  },
  {
    key: "qualityKey",
    label: "Quality",
    type: "string",
    className: "tl",
    cellFunction: (row) => {
      const quality = Resolver.quality(row.qualityKey);
      return quality ? createColorCell(quality.color, quality.name) : undefined;
    },
    valueFunction: (row) => {
      const quality = Resolver.quality(row.qualityKey);
      return quality ? quality.name : undefined;
    },
  },
  {
    key: "averagePrice",
    label: "Avg. Price",
    type: "number",
    className: "tr",
    convertFunction: (data) => round0(data.averagePrice),
    cellFunction: (data) => formatNumber(data.averagePrice),
    valueFunction: (row) => parseFloat(row.averagePrice),
  },
  {
    key: "ownerKey",
    label: "Owner",
    type: "string",
    className: "tl",
    valueFunction: (row) => {
      const character = Resolver.character(row.ownerKey);
      let answer;
      if (character) {
        answer = character.name;
      } else {
        answer = row.ttcUrl ? createLink(row.ttcUrl, "WANT") : undefined;
      }
      return answer;
    },
  },
  {
    key: "craftKey",
    label: "Craft",
    type: "string",
    className: "tl",
    valueFunction: (row) => {
      const craft = Resolver.craft(row.craftKey);
      return craft ? craft.name : undefined;
    },
  },
  {
    key: "categoryKey",
    label: "Category",
    type: "string",
    className: "tl",
    valueFunction: (row) => {
      const category = Resolver.category(row.categoryKey);
      return category ? category.name : undefined;
    },
  },
  {
    key: "productKey",
    label: "Product",
    type: "string",
    className: "tl",
    cellFunction: (row) => {
      const product = Resolver.product(row.productKey);
      return product && product.url
        ? createLink(product.url, product.name)
        : undefined;
    },
    valueFunction: (row) => {
      const product = Resolver.product(row.productKey);
      return product ? product.name : undefined;
    },
  },
  {
    key: "inputValue",
    label: "Craft Cost",
    type: "number",
    className: "tr",
    convertFunction: (data) => round0(data.inputValue),
    cellFunction: (data) => formatNumber(data.inputValue),
    valueFunction: (row) => parseFloat(row.inputValue),
  },
  {
    key: "outputValue",
    label: "Avg. Price",
    type: "number",
    className: "tr",
    convertFunction: (data) => round0(data.outputValue),
    cellFunction: (data) => formatNumber(data.outputValue),
    valueFunction: (row) => parseFloat(row.outputValue),
  },
  {
    key: "outputInputRatio",
    label: "Price / Cost",
    type: "number",
    className: "tr",
    convertFunction: (data) => round2(data.outputInputRatio),
  },
];

export default TableColumns;
