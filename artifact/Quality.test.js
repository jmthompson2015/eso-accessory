/* eslint no-console: ["error", { allow: ["log", "warn"] }] */

import Quality from "./Quality.js";

QUnit.module("Quality");

QUnit.test("Quality properties Fine", (assert) => {
  const qualityKey = Quality.FINE;
  const properties = Quality.properties[qualityKey];
  assert.equal(properties.name, "2 Fine");
  assert.equal(properties.key, qualityKey);
});

QUnit.test("keys and values", (assert) => {
  // Setup.

  // Run.
  const result = Quality.keys();
  const ownPropertyNames = Object.getOwnPropertyNames(Quality);

  // Verify.
  R.forEach((key) => {
    const key2 = Quality[key];

    if (key !== "properties" && typeof key2 === "string") {
      assert.ok(Quality.properties[key2], `Missing value for key = ${key}`);
    }
  }, ownPropertyNames);

  R.forEach((value) => {
    const p = ownPropertyNames.filter((key) => Quality[key] === value);

    assert.equal(p.length, 1, `Missing key for value = ${value}`);
  }, result);
});

QUnit.test("keys()", (assert) => {
  // Run.
  const result = Quality.keys();

  // Verify.
  assert.ok(result);
  const length = 5;
  assert.equal(result.length, length);
  assert.equal(R.head(result), Quality.NORMAL);
  assert.equal(R.last(result), Quality.LEGENDARY);
});

const QualityTest = {};
export default QualityTest;
