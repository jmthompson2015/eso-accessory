import Recipe from "../artifact/Recipe.js";

import IngredientUtils from "./IngredientUtilities.js";

const RecipeUtilities = {};

RecipeUtilities.accept = (recipe, visitor) => visitor.visit(recipe);

RecipeUtilities.findByOutput = (thingKey) => {
  const filterFunction = (r) =>
    r.output.productKey === thingKey || r.output.resourceKey === thingKey;
  const recipes1 = R.filter(filterFunction, Recipe.values());
  const byRatio = R.descend(RecipeUtilities.outputInputRatio);

  return R.sort(byRatio, recipes1);
};

RecipeUtilities.inputValue = (recipe) => {
  const reduceFunction = (accum, input) => {
    const value = IngredientUtils.value(input);

    return value ? accum + value : accum;
  };

  return R.reduce(reduceFunction, 0, recipe.inputs);
};

RecipeUtilities.outputInputRatio = (recipe) => {
  const outputValue = RecipeUtilities.outputValue(recipe);
  const inputValue = RecipeUtilities.inputValue(recipe);

  return outputValue && inputValue ? outputValue / inputValue : null;
};

RecipeUtilities.outputValue = (recipe) => IngredientUtils.value(recipe.output);

RecipeUtilities.toString = (recipe, showName) => {
  const prefix = showName && recipe.name ? `${recipe.name}: ` : "";
  return `${prefix}${IngredientUtils.toString(
    recipe.output
  )} \u2190 ${IngredientUtils.toString(recipe.inputs)}`;
};

export default RecipeUtilities;
