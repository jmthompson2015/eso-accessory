/* eslint no-console: ["error", { allow: ["log"] }] */

import Product from "../artifact/Product.js";
import Recipe from "../artifact/Recipe.js";
import Resource from "../artifact/Resource.js";

import RecipeUtilities from "./RecipeUtilities.js";

QUnit.module("RecipeUtilities");

const round4 = (value) => Math.round(value * 10000.0) / 10000.0;

QUnit.test("best recipes report", (assert) => {
  const reduceFunction = (accum, recipe) => {
    const outputKey = recipe.output.resourceKey
      ? recipe.output.resourceKey
      : recipe.output.productKey;

    if (accum[outputKey] === undefined) {
      return R.assoc(outputKey, [recipe], accum);
    }

    return R.assoc(outputKey, R.append(recipe, accum[outputKey]), accum);
  };
  const map = R.reduce(reduceFunction, {}, Recipe.values());

  const reduceFunction1 = (accum1, outputKey) => {
    const recipes = map[outputKey];

    if (recipes) {
      let bestRatio;
      let bestRecipe;
      const reduceFunction2 = (accum2, recipe) => {
        const outputValue = RecipeUtilities.outputValue(recipe);
        const cost = RecipeUtilities.inputValue(recipe);
        const ratio = outputValue && cost ? outputValue / cost : undefined;

        if (bestRatio === undefined || ratio > bestRatio) {
          bestRatio = ratio;
          bestRecipe = recipe;
        }
        return accum2;
      };
      R.reduce(reduceFunction2, Number.INFINITY, recipes);

      if (bestRecipe) {
        const suffix =
          bestRecipe.device === "refiner" ? "(Refined)" : "(Crafted)";
        return `${accum1}${RecipeUtilities.toString(bestRecipe)} ${suffix}
`;
      }
    }

    return accum1;
  };
  const outputKeys = Object.keys(map).sort();
  const content = R.reduce(reduceFunction1, "\n", outputKeys);
  console.log(content);

  assert.ok(true);
});

QUnit.test("findByOutput() Dres Lantern, Stationary", (assert) => {
  // Setup.
  const outputKey = Product.DRES_LANTERN_STATIONARY;

  // Run.
  const result = RecipeUtilities.findByOutput(outputKey);

  // Verify.
  assert.ok(result);
  assert.equal(result.length, 1);

  const recipe0 = result[0];
  assert.ok(recipe0);
  const ratio = round4(RecipeUtilities.outputInputRatio(recipe0));
  assert.equal(ratio >= 1.8419 && ratio <= 2.4183, true, `ratio = ${ratio}`);
  assert.ok(recipe0.output);
  assert.equal(recipe0.output.productKey, outputKey);
  assert.ok(recipe0.inputs);
  assert.equal(recipe0.inputs.length, 3);
  assert.equal(recipe0.inputs[0].resourceKey, Resource.ALCHEMICAL_RESIN);
  assert.equal(recipe0.inputs[1].resourceKey, Resource.REGULUS);
  assert.equal(recipe0.inputs[2].resourceKey, Resource.OBSIDIAN);
});

QUnit.test("inputValue()", (assert) => {
  // Setup.
  const recipes = RecipeUtilities.findByOutput(Product.DRES_LANTERN_STATIONARY);
  const recipe = R.head(recipes);

  // Run.
  const result = RecipeUtilities.inputValue(recipe);

  // Verify.
  assert.equal(
    result >= 305.98 && result <= 500.19,
    true,
    `result = ${result}`
  );
});

QUnit.test("outputInputRatio()", (assert) => {
  // Setup.
  const recipes = RecipeUtilities.findByOutput(Product.DRES_LANTERN_STATIONARY);
  const recipe = R.head(recipes);

  // Run.
  const result = round4(RecipeUtilities.outputInputRatio(recipe));

  // Verify.
  assert.equal(
    result >= 1.8419 && result <= 2.4183,
    true,
    `result = ${result}`
  );
});

QUnit.test("outputValue() 0", (assert) => {
  // Setup.
  const recipes = RecipeUtilities.findByOutput(Product.DRES_LANTERN_STATIONARY);
  const recipe = R.head(recipes);

  // Run.
  const result = RecipeUtilities.outputValue(recipe);

  // Verify.
  assert.equal(
    result >= 612.92 && result <= 946.39,
    true,
    `result = ${result}`
  );
});

QUnit.test("toString()", (assert) => {
  // Setup.
  const recipes = RecipeUtilities.findByOutput(Product.DRES_LANTERN_STATIONARY);
  const recipe = R.head(recipes);

  // Run.
  const result = RecipeUtilities.toString(recipe);

  // Verify.
  assert.ok(result);
  assert.equal(
    result,
    "Dres Lantern, Stationary x1 \u2190 Alchemical Resin x6 + Regulus x3 + Obsidian x8"
  );
});

QUnit.test("toString() showName", (assert) => {
  // Setup.
  const recipes = RecipeUtilities.findByOutput(Product.DRES_LANTERN_STATIONARY);
  const recipe = R.head(recipes);
  const showName = true;

  // Run.
  const result = RecipeUtilities.toString(recipe, showName);

  // Verify.
  assert.ok(result);
  assert.equal(
    result,
    "Formula: Dres Lantern, Stationary: Dres Lantern, Stationary x1" +
      " \u2190 Alchemical Resin x6 + Regulus x3 + Obsidian x8"
  );
});

const RecipeUtilitiesTest = {};
export default RecipeUtilitiesTest;
