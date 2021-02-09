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
    result >= 147982 && result <= 155056,
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
  assert.equal(result >= 8.91 && result <= 9.03, true, `result = ${result}`);
});

QUnit.test("entryCount() Alchemical Resin", (assert) => {
  // Setup.
  const resourceKey = Resource.ALCHEMICAL_RESIN;

  // Run.
  const result = ItemUtilities.entryCount(resourceKey);

  // Verify.
  assert.ok(result);
  assert.equal(result >= 1340 && result <= 1363, true, `result = ${result}`);
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
  assert.equal(result, 10000);
});

QUnit.test("minimumPrice() Alchemical Resin", (assert) => {
  // Setup.
  const resourceKey = Resource.ALCHEMICAL_RESIN;

  // Run.
  const result = ItemUtilities.minimumPrice(resourceKey);

  // Verify.
  assert.ok(result);
  assert.equal(result, 2.2);
});

QUnit.test("suggestedPrice() Alchemical Resin", (assert) => {
  // Setup.
  const resourceKey = Resource.ALCHEMICAL_RESIN;

  // Run.
  const result = ItemUtilities.suggestedPrice(resourceKey);

  // Verify.
  assert.ok(result);
  assert.equal(result >= 8.02 && result <= 8.12, true, `result = ${result}`);
});

const ItemUtilitiesTest = {};
export default ItemUtilitiesTest;
