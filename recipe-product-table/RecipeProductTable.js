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
  const recipeMinimumPrice = ItemUtils.minimumPrice(recipe.key);
  const recipeSuggestedPrice = ItemUtils.suggestedPrice(recipe.key);
  const recipeAveragePrice = ItemUtils.averagePrice(recipe.key);
  const recipeEntryCount = ItemUtils.entryCount(recipe.key);
  const owner = Resolver.character(recipe.ownerKey);
  const craft = Resolver.craft(recipe.craftKey);
  const category = Resolver.category(recipe.categoryKey);
  const craftCost = RecipeUtils.inputValue(recipe);
  const productMinimumPrice = ItemUtils.minimumPrice(product.key);
  const productSuggestedPrice = ItemUtils.suggestedPrice(product.key);
  const productAveragePrice = ItemUtils.averagePrice(product.key);
  const productEntryCount = ItemUtils.entryCount(product.key);
  const profit =
    productSuggestedPrice > 0 && craftCost > 0
      ? productSuggestedPrice - craftCost
      : undefined;
  const breakEven =
    recipeAveragePrice > 0 && profit > 0
      ? Math.ceil(recipeAveragePrice / profit)
      : undefined;

  return R.mergeRight(recipe, {
    quality,
    recipeMinimumPrice,
    recipeSuggestedPrice,
    recipeAveragePrice,
    recipeEntryCount,
    owner,
    craft,
    category,
    product,
    craftCost,
    productMinimumPrice,
    productSuggestedPrice,
    productAveragePrice,
    productEntryCount,
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
