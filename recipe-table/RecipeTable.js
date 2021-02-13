/* eslint no-console: ["error", { allow: ["log"] }] */

import Recipe from "../artifact/Recipe.js";
import Resolver from "../artifact/Resolver.js";

import IngredientUtils from "../model/IngredientUtilities.js";
import ItemUtils from "../model/ItemUtilities.js";
import RecipeUtils from "../model/RecipeUtilities.js";

import TableColumns from "./TableColumns.js";

const mapFunction = (recipe) => {
  const product = IngredientUtils.thing(recipe.output);
  const quality = Resolver.quality(product.qualityKey);
  const averagePrice = ItemUtils.averagePrice(recipe.key);
  const owner = Resolver.character(recipe.ownerKey);
  const craft = Resolver.craft(recipe.craftKey);
  const category = Resolver.category(recipe.categoryKey);
  const inputValue = RecipeUtils.inputValue(recipe);
  const outputValue = RecipeUtils.outputValue(recipe);
  const outputInputRatio = RecipeUtils.outputInputRatio(recipe);
  const profit =
    outputValue > inputValue ? outputValue - inputValue : undefined;
  const breakEven =
    averagePrice > 0 && profit > 0
      ? Math.ceil(averagePrice / profit)
      : undefined;

  return R.mergeRight(recipe, {
    quality,
    averagePrice,
    owner,
    craft,
    category,
    product,
    inputValue,
    outputValue,
    outputInputRatio,
    profit,
    breakEven,
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
