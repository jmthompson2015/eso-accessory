/* eslint no-console: ["error", { allow: ["log"] }] */

import ItemUtils from "../artifact/ItemUtilities.js";
import Recipe from "../artifact/Recipe.js";
import Resolver from "../artifact/Resolver.js";

import IngredientUtils from "../model/IngredientUtilities.js";
import RecipeUtils from "../model/RecipeUtilities.js";

import TableColumns from "./TableColumns.js";

const mapFunction = (recipe) => {
  const product = IngredientUtils.thing(recipe.output);
  const iconUrl = product ? product.iconUrl : undefined;
  const quality = Resolver.quality(product.qualityKey);
  const owner = Resolver.character(recipe.ownerKey);
  const craft = Resolver.craft(recipe.craftKey);
  const category = Resolver.category(recipe.categoryKey);
  const suggestedPrice = ItemUtils.suggestedPrice(recipe.key);
  const midRangePrice = ItemUtils.midRangePrice(recipe.key);
  const craftCost = RecipeUtils.inputValue(recipe);
  const costMultiplePrice = ItemUtils.costMultiplePrice(craftCost);
  const estimatedPrice = ItemUtils.estimatedPrice(recipe.key, craftCost);
  const entryCount = ItemUtils.entryCount(recipe.key);

  return R.mergeRight(recipe, {
    iconUrl,
    quality,
    owner: owner || "WANT",
    craft,
    category,
    suggestedPrice,
    midRangePrice,
    costMultiplePrice,
    estimatedPrice,
    entryCount: entryCount || 0,
  });
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
const isVerbose = false;
const frt = new FilteredReactTable({
  tableColumns: TableColumns,
  tableRows,
  appName,
  onFilterChange,
  onShowColumnChange,
  isVerbose,
});

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
