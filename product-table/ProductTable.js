/* eslint no-console: ["error", { allow: ["log"] }] */

import ItemUtils from "../artifact/ItemUtilities.js";
import Product from "../artifact/Product.js";
import Resolver from "../artifact/Resolver.js";

import TableColumns from "./TableColumns.js";

const mapFunction = (product) => {
  const quality = Resolver.quality(product.qualityKey);
  const productType = Resolver.productType(product.productTypeKey);
  const suggestedPrice = ItemUtils.suggestedPrice(product.key);
  const midRangePrice = ItemUtils.midRangePrice(product.key);
  const estimatedPrice = ItemUtils.estimatedPrice(product.key);
  const entryCount = ItemUtils.entryCount(product.key);

  return R.mergeRight(product, {
    quality,
    productType,
    suggestedPrice,
    midRangePrice,
    estimatedPrice,
    entryCount: entryCount || 0,
  });
};
const tableRows = R.map(mapFunction, Product.values());

const appName = "Product Table";
const onFilterChange = (filteredTableRows) => {
  console.log(
    `onFilterChange() filteredTableRows.length = ${filteredTableRows.length}`
  );
};
const onShowColumnChange = (columnToChecked) => {
  console.log(
    `onShowColumnChange() columnToChecked = ${JSON.stringify(columnToChecked)}`
  );
};
const isVerbose = true;
const frt = new FilteredReactTable(
  TableColumns,
  tableRows,
  appName,
  onFilterChange,
  onShowColumnChange,
  isVerbose
);

ReactDOM.render(frt.filterPanel(), document.getElementById("filter"));
ReactDOM.render(frt.showColumnsPanel(), document.getElementById("showColumns"));
ReactDOM.render(frt.tableElement(), document.getElementById("table"));
