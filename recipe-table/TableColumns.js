const createColorCell = (color, name) =>
  ReactDOMFactories.div({ style: { backgroundColor: color } }, name);

const createIcon = (iconUrl, name) =>
  ReactDOMFactories.img({
    key: iconUrl,
    src: iconUrl,
    style: { width: 48 },
    title: name,
  });

const createLink = (href, name) =>
  ReactDOMFactories.a({ key: name, href, target: "_blank" }, name);

const usFormatter0 = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const usFormatter2 = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
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
      row.iconUrl ? createIcon(row.iconUrl, row.name) : undefined,
    valueFunction: (row) => row.name,
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
    key: "suggestedPrice",
    label: "Sug. Price",
    type: "number",
    className: "tr",
    cellFunction: (row) => formatNumber(row.suggestedPrice, usFormatter2),
    valueFunction: (row) => parseFloat(row.suggestedPrice),
  },
  {
    key: "midRangePrice",
    label: "Mid Range Price",
    type: "number",
    className: "tr",
    cellFunction: (row) => formatNumber(row.midRangePrice),
    valueFunction: (row) => parseFloat(row.midRangePrice),
  },
  {
    key: "costMultiplePrice",
    label: "Cost Mult. Price",
    type: "number",
    className: "tr",
    cellFunction: (row) => formatNumber(row.costMultiplePrice),
    valueFunction: (row) => parseFloat(row.costMultiplePrice),
  },
  {
    key: "estimatedPrice",
    label: "Est. Price",
    type: "number",
    className: "tr",
    cellFunction: (row) => formatNumber(row.estimatedPrice),
    valueFunction: (row) => parseFloat(row.estimatedPrice),
  },
  {
    key: "entryCount",
    label: "Entry Count",
    type: "number",
    className: "tr",
    cellFunction: (row) =>
      row.ttcUrl
        ? createLink(row.ttcUrl, formatNumber(row.entryCount))
        : undefined,
    valueFunction: (row) => parseFloat(row.entryCount),
  },
];

export default TableColumns;
