/* eslint no-console: ["error", { allow: ["log"] }] */

import ItemUtils from "../artifact/ItemUtilities.js";
import Resource from "../artifact/Resource.js";
import Resolver from "../artifact/Resolver.js";

import TableColumns from "./TableColumns.js";

const mapFunction = (resource) => {
  const quality = Resolver.quality(resource.qualityKey);
  const resourceType = Resolver.resourceType(resource.resourceTypeKey);
  const suggestedPrice = ItemUtils.suggestedPrice(resource.key);
  const midRangePrice = ItemUtils.midRangePrice(resource.key);
  const estimatedPrice = ItemUtils.estimatedPrice(resource.key);
  const entryCount = ItemUtils.entryCount(resource.key);

  return R.mergeRight(resource, {
    quality,
    resourceType,
    suggestedPrice,
    midRangePrice,
    estimatedPrice,
    entryCount,
  });
};
const tableRows = R.map(mapFunction, Resource.values());

const appName = "Resource Table";
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
const isVerbose = false;
const frt = new FilteredReactTable(
  TableColumns,
  tableRows,
  appName,
  onFilterChange,
  onShowColumnChange,
  isVerbose
);

const collapsiblePaneProps = {
  className: "bg-eso-dark ma1",
  titleClass: "b f5 ph1 pt1 tl white",
};
const dataTableProps = { rowClass: "striped--eso-light" };
ReactDOM.render(
  frt.filterPanel(collapsiblePaneProps),
  document.getElementById("filter")
);
ReactDOM.render(
  frt.showColumnsPanel(collapsiblePaneProps),
  document.getElementById("showColumns")
);
ReactDOM.render(
  frt.tableElement(dataTableProps),
  document.getElementById("table")
);
