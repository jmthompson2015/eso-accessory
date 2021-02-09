/* eslint no-console: ["error", { allow: ["log"] }] */

import Product from "../artifact/Product.js";

import ItemUtils from "../model/ItemUtilities.js";

import TableColumns from "./TableColumns.js";

const mapFunction = (product) => {
  const { name, qualityKey, url } = product;
  const value = ItemUtils.averagePrice(product.key);

  return {
    name,
    url,
    qualityKey,
    value,
  };
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
