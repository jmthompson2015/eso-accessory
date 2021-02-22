/* eslint no-console: ["error", { allow: ["log", "warn"] }] */

import Category from "./Category.js";

QUnit.module("Category");

QUnit.test("Category properties Courtyard", (assert) => {
  const categoryKey = Category.COURTYARD;
  const properties = Category.properties[categoryKey];
  assert.equal(properties.name, "Courtyard");
  assert.equal(properties.key, categoryKey);
});

QUnit.test("keys and values", (assert) => {
  // Setup.

  // Run.
  const result = Category.keys();
  const ownPropertyNames = Object.getOwnPropertyNames(Category);

  // Verify.
  R.forEach((key) => {
    const key2 = Category[key];

    if (key !== "properties" && typeof key2 === "string") {
      assert.ok(Category.properties[key2], `Missing value for key = ${key}`);
    }
  }, ownPropertyNames);

  R.forEach((value) => {
    const p = ownPropertyNames.filter((key) => Category[key] === value);

    assert.equal(p.length, 1, `Missing key for value = ${value}`);
  }, result);
});

QUnit.test("keys()", (assert) => {
  // Run.
  const result = Category.keys();

  // Verify.
  assert.ok(result);
  const length = 13;
  assert.equal(result.length, length);
  assert.equal(R.head(result), Category.CONSUMABLE);
  assert.equal(R.last(result), Category.WORKSHOP);
});

const CategoryTest = {};
export default CategoryTest;
