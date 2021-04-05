const { ColumnUtilities: CU } = FilteredReactTable;

const TableColumns = [
  {
    key: "iconUrl",
    label: "Icon",
    type: "string",
    className: "tc",
    valueFunction: (row) => row.name,
    cellFunction: (row) =>
      row.iconUrl ? CU.createIcon(row.iconUrl, row.name, 48) : undefined,
  },
  {
    key: "name",
    label: "Product",
    type: "string",
    className: "tl",
    cellFunction: (row) =>
      row.url ? CU.createLink(row.url, row.name) : row.name,
  },
  {
    key: "quality",
    label: "Quality",
    type: "string",
    className: "tl",
    valueFunction: (row) => (row.quality ? row.quality.name : undefined),
    cellFunction: (row) =>
      row.quality
        ? CU.createColorCell(row.quality.color, row.quality.name)
        : undefined,
  },
  {
    key: "productType",
    label: "Type",
    type: "string",
    className: "tl",
    valueFunction: (row) =>
      row.productType ? row.productType.name : undefined,
    cellFunction: (row) => {
      if (row.productType) {
        return row.productType.url
          ? CU.createLink(row.productType.url, row.productType.name)
          : row.productType.name;
      }
      return undefined;
    },
  },
  {
    key: "suggestedPrice",
    label: "Sug. Price",
    type: "number",
    className: "tr",
    convertFunction: (row) => CU.parseFloat(row.suggestedPrice),
    cellFunction: (row) =>
      CU.formatNumber(row.suggestedPrice, CU.US_FORMATTER2),
  },
  {
    key: "midRangePrice",
    label: "Mid Range Price",
    type: "number",
    className: "tr",
    convertFunction: (row) => CU.parseFloat(row.midRangePrice),
    cellFunction: (row) => CU.formatNumber(row.midRangePrice),
  },
  {
    key: "estimatedPrice",
    label: "Est. Price",
    type: "number",
    className: "tr",
    convertFunction: (row) => CU.parseFloat(row.estimatedPrice),
    cellFunction: (row) => CU.formatNumber(row.estimatedPrice),
  },
  {
    key: "entryCount",
    label: "Entry Count",
    type: "number",
    className: "tr",
    convertFunction: (row) => CU.parseInt(row.entryCount),
    cellFunction: (row) =>
      row.ttcUrl
        ? CU.createLink(row.ttcUrl, CU.formatNumber(row.entryCount))
        : CU.formatNumber(row.entryCount),
  },
];

export default TableColumns;
