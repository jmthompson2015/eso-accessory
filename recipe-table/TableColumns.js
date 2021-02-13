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
    key: "averagePrice",
    label: "Avg. Price",
    type: "number",
    className: "tr",
    convertFunction: (row) => round0(row.averagePrice),
    cellFunction: (row) => formatNumber(row.averagePrice),
    valueFunction: (row) => parseFloat(row.averagePrice),
  },
  {
    key: "owner",
    label: "Owner",
    type: "string",
    className: "tl",
    cellFunction: (row) => {
      let answer;
      if (row.owner) {
        answer = row.owner.name;
      } else {
        answer = row.ttcUrl ? createLink(row.ttcUrl, "WANT") : undefined;
      }
      return answer;
    },
    valueFunction: (row) => {
      let answer;
      if (row.owner) {
        answer = row.owner.name;
      } else {
        answer = row.ttcUrl ? "WANT" : undefined;
      }
      return answer;
    },
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
    key: "inputValue",
    label: "Craft Cost",
    type: "number",
    className: "tr",
    convertFunction: (row) => round0(row.inputValue),
    cellFunction: (row) => formatNumber(row.inputValue),
    valueFunction: (row) => parseFloat(row.inputValue),
  },
  {
    key: "outputValue",
    label: "Avg. Price",
    type: "number",
    className: "tr",
    convertFunction: (row) => round0(row.outputValue),
    cellFunction: (row) => formatNumber(row.outputValue),
    valueFunction: (row) => parseFloat(row.outputValue),
  },
  {
    key: "outputInputRatio",
    label: "Price / Cost",
    type: "number",
    className: "tr",
    convertFunction: (row) => round2(row.outputInputRatio),
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
    label: "TTC",
    isShown: false,
  },
];

export default TableColumns;
