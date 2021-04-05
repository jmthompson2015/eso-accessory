const { ColumnUtilities: CU } = FilteredReactTable;

const TableColumns = [
  {
    key: "iconUrl",
    label: "Icon",
    type: "string",
    className: "tc",
    valueFunction: (row) => row.product.name,
    cellFunction: (row) =>
      row.product && row.product.iconUrl
        ? CU.createIcon(row.product.iconUrl, row.product.name, 48)
        : undefined,
  },
  {
    key: "name",
    label: "Recipe",
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
    key: "recipeEstimatedPrice",
    label: "Recipe Est. Price",
    type: "number",
    className: "tr",
    convertFunction: (row) => CU.parseFloat(row.recipeEstimatedPrice),
    cellFunction: (row) => CU.formatNumber(row.recipeEstimatedPrice),
  },
  {
    key: "recipeEntryCount",
    label: "Recipe Entry Count",
    type: "number",
    className: "tr",
    convertFunction: (row) => CU.parseInt(row.recipeEntryCount),
    cellFunction: (row) =>
      row.ttcUrl
        ? CU.createLink(row.ttcUrl, CU.formatNumber(row.recipeEntryCount))
        : CU.formatNumber(row.recipeEntryCount),
  },
  {
    key: "owner",
    label: "Recipe Owner",
    type: "string",
    className: "tl",
    valueFunction: (row) => row.owner.name || row.owner,
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
    valueFunction: (row) => (row.product ? row.product.name : undefined),
    cellFunction: (row) => {
      if (row.product) {
        return row.product.url
          ? CU.createLink(row.product.url, row.product.name)
          : row.product.name;
      }
      return undefined;
    },
  },
  {
    key: "craftCost",
    label: "Craft Cost",
    type: "number",
    className: "tr",
    convertFunction: (row) => CU.parseFloat(row.craftCost),
    cellFunction: (row) => CU.formatNumber(row.craftCost),
  },
  {
    key: "productEstimatedPrice",
    label: "Product Est. Price",
    type: "number",
    className: "tr",
    convertFunction: (row) => CU.parseFloat(row.productEstimatedPrice),
    cellFunction: (row) => CU.formatNumber(row.productEstimatedPrice),
  },
  {
    key: "productEntryCount",
    label: "Product Entry Count",
    type: "number",
    className: "tr",
    convertFunction: (row) => CU.parseInt(row.productEntryCount),
    cellFunction: (row) =>
      row.product && row.product.ttcUrl
        ? CU.createLink(
            row.product.ttcUrl,
            CU.formatNumber(row.productEntryCount)
          )
        : CU.formatNumber(row.productEntryCount),
  },
  {
    key: "profit",
    label: "Profit",
    type: "number",
    className: "tr",
    convertFunction: (row) => CU.parseFloat(row.profit),
    cellFunction: (row) => {
      const profit = CU.formatNumber(row.profit);
      return row.profit < 0 ? CU.createSpan(profit) : profit;
    },
  },
  {
    key: "breakEven",
    label: "Break Even",
    type: "number",
    className: "tr",
    convertFunction: (row) => CU.parseInt(row.breakEven),
    cellFunction: (row) => CU.formatNumber(row.breakEven),
  },
];

export default TableColumns;
