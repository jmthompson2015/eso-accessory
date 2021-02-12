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
    label: "Resource",
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
    key: "resourceType",
    label: "Type",
    type: "string",
    className: "tl",
    cellFunction: (row) =>
      row.resourceType && row.resourceType.url
        ? createLink(row.resourceType.url, row.resourceType.name)
        : undefined,
    valueFunction: (row) =>
      row.resourceType ? row.resourceType.name : undefined,
  },
  {
    key: "value",
    label: "Avg. Price",
    type: "number",
    className: "tr",
    convertFunction: (row) => round0(row.value),
    cellFunction: (row) => formatNumber(row.value),
    valueFunction: (row) => parseFloat(row.value),
  },
  {
    key: "url",
    label: "URL",
    isShown: false,
  },
];

export default TableColumns;
