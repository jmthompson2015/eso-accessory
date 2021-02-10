/* eslint no-console: ["error", { allow: ["log"] }] */

import Recipe from "../artifact/Recipe.js";

import IngredientUtils from "../model/IngredientUtilities.js";
import ItemUtils from "../model/ItemUtilities.js";
import RecipeUtils from "../model/RecipeUtilities.js";

import TableColumns from "./TableColumns.js";

const mapFunction = (recipe) => {
  const { categoryKey, craftKey, name, output, ownerKey, ttcUrl, url } = recipe;
  const averagePrice = ItemUtils.averagePrice(recipe.key);
  const product = IngredientUtils.thing(output);
  const { key: productKey, qualityKey } = product;
  const inputValue = RecipeUtils.inputValue(recipe);
  const outputValue = RecipeUtils.outputValue(recipe);
  const outputInputRatio = RecipeUtils.outputInputRatio(recipe);

  return {
    name,
    qualityKey,
    averagePrice,
    ownerKey,
    craftKey,
    categoryKey,
    inputValue,
    outputValue,
    outputInputRatio,
    productKey,
    ttcUrl,
    url,
  };
};
const tableRows = R.map(mapFunction, Recipe.values());

const appName = "Recipe Table";
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
