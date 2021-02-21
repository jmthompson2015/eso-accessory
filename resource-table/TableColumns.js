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
    key: "minimumPrice",
    label: "Min. Price",
    type: "number",
    className: "tr",
    convertFunction: (row) => round2(row.minimumPrice),
    cellFunction: (row) => formatNumber(row.minimumPrice),
    valueFunction: (row) => parseFloat(row.minimumPrice),
  },
  {
    key: "suggestedPrice",
    label: "Sug. Price",
    type: "number",
    className: "tr",
    convertFunction: (row) => round2(row.suggestedPrice),
    cellFunction: (row) => formatNumber(row.suggestedPrice),
    valueFunction: (row) => parseFloat(row.suggestedPrice),
  },
  {
    key: "averagePrice",
    label: "Avg. Price",
    type: "number",
    className: "tr",
    convertFunction: (row) => round2(row.averagePrice),
    cellFunction: (row) => formatNumber(row.averagePrice),
    valueFunction: (row) => parseFloat(row.averagePrice),
  },
  {
    key: "entryCount",
    label: "Entry Count",
    type: "number",
    className: "tr",
    convertFunction: (row) => round0(row.entryCount),
    cellFunction: (row) =>
      row.ttcUrl
        ? createLink(row.ttcUrl, formatNumber(row.entryCount))
        : undefined,
    valueFunction: (row) => parseFloat(row.entryCount),
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
];

export default TableColumns;
