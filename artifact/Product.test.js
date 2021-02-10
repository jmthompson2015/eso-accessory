/* eslint no-console: ["error", { allow: ["log", "warn"] }] */

import Product from "./Product.js";

QUnit.module("Product");

QUnit.test("Product properties Dres Lantern, Stationary", (assert) => {
  const productKey = Product.DRES_LANTERN_STATIONARY;
  const properties = Product.properties[productKey];
  assert.equal(properties.name, "Dres Lantern, Stationary");
  assert.equal(properties.key, productKey);
});

QUnit.test("keys and values", (assert) => {
  // Setup.

  // Run.
  const result = Product.keys();
  const ownPropertyNames = Object.getOwnPropertyNames(Product);

  // Verify.
  R.forEach((key) => {
    const key2 = Product[key];

    if (key !== "properties" && typeof key2 === "string") {
      assert.ok(Product.properties[key2], `Missing value for key = ${key}`);
    }
  }, ownPropertyNames);

  R.forEach((value) => {
    const p = ownPropertyNames.filter((key) => Product[key] === value);

    assert.equal(p.length, 1, `Missing key for value = ${value}`);
  }, result);
});

QUnit.test("keys()", (assert) => {
  // Run.
  const result = Product.keys();

  // Verify.
  assert.ok(result);
  const length = 48;
  assert.equal(result.length, length);
  assert.equal(R.head(result), Product.ALINOR_AMPHORA_DELICATE);
  assert.equal(R.last(result), Product.WOOD_ELF_PITCHER_PAINTED);
});

const ProductTest = {};
export default ProductTest;
