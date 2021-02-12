/* eslint no-console: ["error", { allow: ["log"] }] */

import Resource from "../artifact/Resource.js";
import Resolver from "../artifact/Resolver.js";

import ResourceUtils from "../model/ResourceUtilities.js";

import TableColumns from "./TableColumns.js";

const mapFunction = (resource) => {
  const value = ResourceUtils.value(resource.key);
  const quality = Resolver.quality(resource.qualityKey);
  const resourceType = Resolver.resourceType(resource.resourceTypeKey);

  return R.mergeRight(resource, { quality, resourceType, value });
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
