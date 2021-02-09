import Resolver from "../artifact/Resolver.js";

const createColorCell = (color, name) =>
  ReactDOMFactories.div({ style: { backgroundColor: color } }, name);

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
    key: "resourceTypeKey",
    label: "Type",
    type: "string",
    className: "tl",
    valueFunction: (row) => {
      const resourceType = Resolver.resourceType(row.resourceTypeKey);
      return resourceType ? resourceType.name : undefined;
    },
  },
  {
    key: "value",
    label: "Avg. Price",
    type: "number",
    className: "tr",
    convertFunction: (row) => round0(row.value),
    cellFunction: (data) => formatNumber(data.value),
    valueFunction: (row) => parseFloat(row.value),
  },
];

export default TableColumns;
