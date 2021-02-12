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

const TableColumns = [
  {
    key: "name",
    label: "Product",
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
    key: "productType",
    label: "Type",
    type: "string",
    className: "tl",
    cellFunction: (row) =>
      row.productType && row.productType.url
        ? createLink(row.productType.url, row.productType.name)
        : undefined,
    valueFunction: (row) =>
      row.productType ? row.productType.name : undefined,
  },
  {
    key: "value",
    label: "Avg. Price",
    type: "number",
    className: "tr",
    convertFunction: (data) => round0(data.value),
    cellFunction: (data) => formatNumber(data.value),
    valueFunction: (row) => parseFloat(row.value),
  },
  {
    key: "url",
    label: "URL",
    isShown: false,
  },
];

export default TableColumns;
