/* eslint no-console: ["error", { allow: ["log", "warn"] }] */

import Resource from "../artifact/Resource.js";

import ItemUtilities from "./ItemUtilities.js";

QUnit.module("ItemUtilities");

QUnit.test("amountCount() Alchemical Resin", (assert) => {
  // Setup.
  const resourceKey = Resource.ALCHEMICAL_RESIN;

  // Run.
  const result = ItemUtilities.amountCount(resourceKey);

  // Verify.
  assert.ok(result);
  assert.equal(
    result >= 142995 && result <= 155056,
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
  assert.equal(result >= 8.86 && result <= 15.42, true, `result = ${result}`);
});

QUnit.test("entryCount() Alchemical Resin", (assert) => {
  // Setup.
  const resourceKey = Resource.ALCHEMICAL_RESIN;

  // Run.
  const result = ItemUtilities.entryCount(resourceKey);

  // Verify.
  assert.ok(result);
  assert.equal(result >= 1279 && result <= 1363, true, `result = ${result}`);
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

QUnit.test("maximumPrice() Alchemical Resin", (assert) => {
  // Setup.
  const resourceKey = Resource.ALCHEMICAL_RESIN;

  // Run.
  const result = ItemUtilities.maximumPrice(resourceKey);

  // Verify.
  assert.ok(result);
  assert.equal(
    result >= 695.6087 && result <= 10000,
    true,
    `result = ${result}`
  );
});

QUnit.test("minimumPrice() Alchemical Resin", (assert) => {
  // Setup.
  const resourceKey = Resource.ALCHEMICAL_RESIN;

  // Run.
  const result = ItemUtilities.minimumPrice(resourceKey);

  // Verify.
  assert.ok(result);
  assert.equal(result >= 2.2 && result <= 5, true, `result = ${result}`);
});

QUnit.test("suggestedPrice() Alchemical Resin", (assert) => {
  // Setup.
  const resourceKey = Resource.ALCHEMICAL_RESIN;

  // Run.
  const result = ItemUtilities.suggestedPrice(resourceKey);

  // Verify.
  assert.ok(result);
  assert.equal(result >= 7.97 && result <= 8.3, true, `result = ${result}`);
});

const ItemUtilitiesTest = {};
export default ItemUtilitiesTest;
