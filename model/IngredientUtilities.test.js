import Ingredient from "../artifact/Ingredient.js";
import Product from "../artifact/Product.js";
import Resource from "../artifact/Resource.js";

import IngredientUtilities from "./IngredientUtilities.js";

QUnit.module("IngredientUtilities");

QUnit.test("thing()", (assert) => {
  assert.equal(
    IngredientUtilities.thing(
      Ingredient.create({ productKey: Product.DRES_LANTERN_STATIONARY })
    ).name,
    "Dres Lantern, Stationary"
  );
  assert.equal(
    IngredientUtilities.thing(
      Ingredient.create({ resourceKey: Resource.ALCHEMICAL_RESIN })
    ).name,
    "Alchemical Resin"
  );
  assert.equal(IngredientUtilities.thing(undefined), undefined);
});

QUnit.test("toString() ingredient", (assert) => {
  // Setup.
  const ingredient = Ingredient.create({
    resourceKey: Resource.ALCHEMICAL_RESIN,
    amount: 5,
  });

  // Run.
  const result = IngredientUtilities.toString(ingredient);

  // Verify.
  assert.ok(result);
  assert.equal(result, "Alchemical Resin x5");
});

QUnit.test("toString() ingredients", (assert) => {
  // Setup.
  const ingredients = [
    Ingredient.create({ resourceKey: Resource.ALCHEMICAL_RESIN, amount: 5 }),
    Ingredient.create({ resourceKey: Resource.BAST, amount: 2 }),
  ];

  // Run.
  const result = IngredientUtilities.toString(ingredients);

  // Verify.
  assert.ok(result);
  assert.equal(result, "Alchemical Resin x5 + Bast x2");
});

QUnit.test("value() Alchemical Resin", (assert) => {
  // Setup.
  const ingredient = Ingredient.create({
    resourceKey: Resource.ALCHEMICAL_RESIN,
    amount: 5,
  });

  // Run.
  const result = IngredientUtilities.value(ingredient);

  // Verify.
  assert.equal(result >= 44 && result <= 46, true, `result = ${result}`);
});

const IngredientUtilitiesTest = {};
export default IngredientUtilitiesTest;
