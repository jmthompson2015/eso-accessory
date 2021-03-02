/* eslint no-console: ["error", { allow: ["log", "warn"] }] */

import ItemUtilities from "./ItemUtilities.js";
import Product from "./Product.js";
import Resource from "./Resource.js";

QUnit.module("ItemUtilities");

QUnit.test("amountCount() Alchemical Resin", (assert) => {
  // Setup.
  const resourceKey = Resource.ALCHEMICAL_RESIN;

  // Run.
  const result = ItemUtilities.amountCount(resourceKey);

  // Verify.
  assert.ok(result);
  assert.equal(
    result >= 140297 && result <= 155056,
    true,
    `result = ${result}`
  );
});

QUnit.test("averagePrice() Alchemical Resin", (assert) => {
  // Setup.
  const resourceKey = Resource.ALCHEMICAL_RESIN;

  // Run.
  const result = ItemUtilities.averagePrice(resourceKey);

  // Verify.
  assert.ok(result);
  assert.equal(result >= 8.86 && result <= 28.98, true, `result = ${result}`);
});

QUnit.test("averagePrice() Essence of Spell Power", (assert) => {
  // Setup.
  const resourceKey = Product.ESSENCE_OF_SPELL_POWER;

  // Run.
  const result = ItemUtilities.averagePrice(resourceKey);

  // Verify.
  assert.ok(result);
  assert.equal(
    result >= 332.25 && result <= 337.06,
    true,
    `result = ${result}`
  );
});

QUnit.test("costMultiplePrice()", (assert) => {
  // Setup.
  const cost = 8.0;

  // Run.
  const result = ItemUtilities.costMultiplePrice(cost);

  // Verify.
  assert.ok(result);
  assert.equal(result, 12.0, `result = ${result}`);
});

QUnit.test("entryCount() Alchemical Resin", (assert) => {
  // Setup.
  const resourceKey = Resource.ALCHEMICAL_RESIN;

  // Run.
  const result = ItemUtilities.entryCount(resourceKey);

  // Verify.
  assert.ok(result);
  assert.equal(result >= 1279 && result <= 1385, true, `result = ${result}`);
});

QUnit.test("estimatedPrice() Alchemical Resin", (assert) => {
  // Setup.
  const resourceKey = Resource.ALCHEMICAL_RESIN;
  const cost = 8.0;

  // Run.
  const result = ItemUtilities.estimatedPrice(resourceKey, cost);

  // Verify.
  assert.ok(result);
  assert.equal(result >= 8.0 && result <= 8.08, true, `result = ${result}`);
});

QUnit.test("item() Alchemical Resin", (assert) => {
  // Setup.
  const resourceKey = Resource.ALCHEMICAL_RESIN;

  // Run.
  const result = ItemUtilities.item(resourceKey);

  // Verify.
  assert.ok(result);
  assert.ok(result.Avg);
  assert.ok(result.Min);
  assert.ok(result.Max);
  assert.ok(result.SuggestedPrice);
});

QUnit.test("item() Essence of Spell Power", (assert) => {
  // Setup.
  const productKey = Product.ESSENCE_OF_SPELL_POWER;

  // Run.
  const result = ItemUtilities.item(productKey);

  // Verify.
  assert.ok(result);
  assert.ok(result.Avg);
  assert.ok(result.Min);
  assert.ok(result.Max);
  assert.ok(result.SuggestedPrice);
});

QUnit.test("itemId() Alchemical Resin", (assert) => {
  // Setup.
  const resourceKey = Resource.ALCHEMICAL_RESIN;

  // Run.
  const result = ItemUtilities.itemId(resourceKey);

  // Verify.
  assert.equal(result, 11967);
});

QUnit.test("itemId() Essence of Spell Power", (assert) => {
  // Setup.
  const productKey = Product.ESSENCE_OF_SPELL_POWER;

  // Run.
  const result = ItemUtilities.itemId(productKey);

  // Verify.
  assert.equal(result, 3300);
});

QUnit.test("maximumPrice() Alchemical Resin", (assert) => {
  // Setup.
  const resourceKey = Resource.ALCHEMICAL_RESIN;

  // Run.
  const result = ItemUtilities.maximumPrice(resourceKey);

  // Verify.
  assert.ok(result);
  assert.equal(
    result >= 695.6087 && result <= 13402.51,
    true,
    `result = ${result}`
  );
});

QUnit.test("midRangePrice() Alchemical Resin", (assert) => {
  // Setup.
  const resourceKey = Resource.ALCHEMICAL_RESIN;

  // Run.
  const result = ItemUtilities.midRangePrice(resourceKey);

  // Verify.
  assert.ok(result);
  assert.equal(result >= 14.02 && result <= 15.49, true, `result = ${result}`);
});

QUnit.test("minimumPrice() Alchemical Resin", (assert) => {
  // Setup.
  const resourceKey = Resource.ALCHEMICAL_RESIN;

  // Run.
  const result = ItemUtilities.minimumPrice(resourceKey);

  // Verify.
  assert.ok(result);
  assert.equal(result >= 1.5 && result <= 5, true, `result = ${result}`);
});

QUnit.test("suggestedPrice() Alchemical Resin", (assert) => {
  // Setup.
  const resourceKey = Resource.ALCHEMICAL_RESIN;

  // Run.
  const result = ItemUtilities.suggestedPrice(resourceKey);

  // Verify.
  assert.ok(result);
  assert.equal(result >= 8.0 && result <= 8.08, true, `result = ${result}`);
});

const ItemUtilitiesTest = {};
export default ItemUtilitiesTest;
