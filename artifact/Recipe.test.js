/* eslint no-console: ["error", { allow: ["log", "warn"] }] */

import Category from "./Category.js";
import Craft from "./Craft.js";
import Product from "./Product.js";
import Recipe from "./Recipe.js";

import RecipeUtils from "../model/RecipeUtilities.js";

QUnit.module("Recipe");

QUnit.test("Product has Recipe", (assert) => {
  const forEachFunction = (product) => {
    const recipes = RecipeUtils.findByOutput(product.key);
    assert.ok(
      recipes && recipes.length > 0,
      `Missing recipe for product ${product.name}`
    );
  };
  R.forEach(forEachFunction, Product.values());
});

QUnit.test("Recipe properties Blueprint: Breton Desk", (assert) => {
  const recipeKey = Recipe.BLUEPRINT_BRETON_DESK;
  const properties = Recipe.properties[recipeKey];
  assert.equal(properties.name, "Blueprint: Breton Desk");
  assert.equal(properties.categoryKey, Category.LIBRARY);
  assert.equal(properties.craftKey, Craft.WOODWORKING);
  assert.equal(properties.inputs.length, 3);
  assert.equal(properties.url, "https://eso-housing.com/furniture/Breton-Desk");
  assert.equal(properties.key, recipeKey);
});

QUnit.test("Recipe properties Design: Rough Bag, Burlap", (assert) => {
  const recipeKey = Recipe.DESIGN_ROUGH_BAG_BURLAP;
  const properties = Recipe.properties[recipeKey];
  assert.equal(properties.name, "Design: Rough Bag, Burlap");
  assert.equal(properties.categoryKey, Category.HEARTH);
  assert.equal(properties.craftKey, Craft.CLOTHING);
  assert.equal(properties.inputs.length, 3);
  assert.equal(
    properties.url,
    "https://eso-housing.com/furniture/Rough-Bag-Burlap"
  );
  assert.equal(properties.key, recipeKey);
});

QUnit.test("Recipe ingredients", (assert) => {
  const forEachFunction = (recipe) => {
    const count = recipe.inputs.length;
    for (let i = 0; i < count; i += 1) {
      assert.ok(
        recipe.inputs[i].productKey || recipe.inputs[i].resourceKey,
        `Missing recipe.inputs[${i}].[productKey||resourceKey] for ${recipe.name}`
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
  const length = 184;
  assert.equal(result.length, length);
  assert.equal(R.head(result), Recipe.BLUEPRINT_ARGONIAN_COUNTER_LONG);
  assert.equal(R.last(result), Recipe.SKETCH_SCRIMSHAW_ANCIENT_VESSEL);
});

QUnit.test("keys() alphabetized", (assert) => {
  // Run.
  const result = Recipe.keys();

  // Verify.
  const forEachFunction = (key, i) => {
    const key2 = i + 1 < result.length ? result[i + 1] : undefined;
    console.log(`key = ${key} key2 = ${key2}`);

    if (key2) {
      assert.equal(
        key < key2,
        true,
        `Keys not alphabetized: key = ${key} key2 = ${key2}`
      );
    }
  };

  const forEachIndexed = R.addIndex(R.forEach);
  forEachIndexed(forEachFunction, result);
});

const RecipeTest = {};
export default RecipeTest;
