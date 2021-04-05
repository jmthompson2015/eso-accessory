/* eslint no-console: ["error", { allow: ["log"] }] */

import ItemUtils from "../artifact/ItemUtilities.js";
import Recipe from "../artifact/Recipe.js";
import Resolver from "../artifact/Resolver.js";

import IngredientUtils from "../model/IngredientUtilities.js";
import RecipeUtils from "../model/RecipeUtilities.js";

import TableColumns from "./TableColumns.js";

const mapFunction = (recipe) => {
  const product = IngredientUtils.thing(recipe.output);
  const quality = Resolver.quality(product.qualityKey);
  const recipeEstimatedPrice = ItemUtils.estimatedPrice(recipe.key);
  const recipeEntryCount = ItemUtils.entryCount(recipe.key);
  const owner = Resolver.character(recipe.ownerKey);
  const craft = Resolver.craft(recipe.craftKey);
  const category = Resolver.category(recipe.categoryKey);
  const craftCost = RecipeUtils.inputValue(recipe);
  const productEstimatedPrice = ItemUtils.estimatedPrice(
    product.key,
    craftCost
  );
  const productEntryCount = ItemUtils.entryCount(product.key);
  const profit =
    productEstimatedPrice > 0 && craftCost > 0
      ? productEstimatedPrice - craftCost
      : undefined;
  const breakEven =
    recipeEstimatedPrice > 0 && profit > 0
      ? Math.ceil(recipeEstimatedPrice / profit)
      : undefined;

  return R.mergeRight(recipe, {
    quality,
    recipeEstimatedPrice,
    recipeEntryCount: recipeEntryCount || 0,
    owner: owner || "WANT",
    craft,
    category,
    product,
    craftCost,
    productEstimatedPrice,
    productEntryCount: productEntryCount || 0,
    profit,
    breakEven,
  });
};
const tableRows = R.map(mapFunction, Recipe.values());

const appName = "Recipe Product Table";
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
