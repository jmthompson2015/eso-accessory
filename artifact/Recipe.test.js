/* eslint no-console: ["error", { allow: ["log", "warn"] }] */

import Craft from "./Craft.js";
import Quality from "./Quality.js";
import Recipe from "./Recipe.js";

QUnit.module("Recipe");

QUnit.test("Recipe properties Blueprint: Breton Desk", (assert) => {
  const recipeKey = Recipe.BLUEPRINT_BRETON_DESK;
  const properties = Recipe.properties[recipeKey];
  assert.equal(properties.name, "Blueprint: Breton Desk");
  assert.equal(properties.craftKey, Craft.WOODWORKING);
  assert.equal(properties.inputs.length, 3);
  assert.equal(properties.qualityKey, Quality.FINE);
  assert.equal(properties.url, "https://eso-housing.com/furniture/breton-desk");
  assert.equal(properties.key, recipeKey);
});

QUnit.test("Recipe ingredients", (assert) => {
  const forEachFunction = (recipe) => {
    const count = recipe.inputs.length;
    for (let i = 0; i < count; i += 1) {
      assert.ok(
        recipe.inputs[i].productKey || recipe.inputs[i].resourceKey,
        `Missing recipe.inputs[${i}].[productKey||resourceKey] for ${recipe.output.productKey}`
      );
    }
  };
  R.forEach(forEachFunction, Recipe.values());
});

QUnit.test("Recipe output", (assert) => {
  const forEachFunction = (recipe) => {
    assert.ok(
      recipe.output.productKey,
      `Missing recipe.output.productKey for ${recipe.name}`
    );
  };
  R.forEach(forEachFunction, Recipe.values());
});

QUnit.test("keys and values", (assert) => {
  // Setup.

  // Run.
  const result = Recipe.keys();
  const ownPropertyNames = Object.getOwnPropertyNames(Recipe);

  // Verify.
  R.forEach((key) => {
    const key2 = Recipe[key];

    if (key !== "properties" && typeof key2 === "string") {
      assert.ok(Recipe.properties[key2], `Missing value for key = ${key}`);
    }
  }, ownPropertyNames);

  R.forEach((value) => {
    const p = ownPropertyNames.filter((key) => Recipe[key] === value);

    assert.equal(p.length, 1, `Missing key for value = ${value}`);
  }, result);
});

QUnit.test("keys()", (assert) => {
  // Run.
  const result = Recipe.keys();

  // Verify.
  assert.ok(result);
  const length = 48;
  assert.equal(result.length, length);
  assert.equal(R.head(result), Recipe.BLUEPRINT_BRETON_DESK);
  assert.equal(R.last(result), Recipe.RECIPE_WITCHMOTHERS_POTENT_BREW);
});

const RecipeTest = {};
export default RecipeTest;
