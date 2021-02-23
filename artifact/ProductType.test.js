/* eslint no-console: ["error", { allow: ["log", "warn"] }] */

import ProductType from "./ProductType.js";

QUnit.module("ProductType");

QUnit.test("ProductType properties Furnishing", (assert) => {
  const typeKey = ProductType.FURNISHING;
  const properties = ProductType.properties[typeKey];
  assert.equal(properties.name, "Furnishing");
  assert.equal(properties.url, "https://en.uesp.net/wiki/Online:Furnishings");
  assert.equal(properties.key, typeKey);
});

QUnit.test("keys and values", (assert) => {
  // Setup.

  // Run.
  const result = ProductType.keys();
  const ownPropertyNames = Object.getOwnPropertyNames(ProductType);

  // Verify.
  R.forEach((key) => {
    const key2 = ProductType[key];

    if (key !== "properties" && typeof key2 === "string") {
      assert.ok(ProductType.properties[key2], `Missing value for key = ${key}`);
    }
  }, ownPropertyNames);

  R.forEach((value) => {
    const p = ownPropertyNames.filter((key) => ProductType[key] === value);

    assert.equal(p.length, 1, `Missing key for value = ${value}`);
  }, result);
});

QUnit.test("keys()", (assert) => {
  // Run.
  const result = ProductType.keys();

  // Verify.
  assert.ok(result);
  const length = 3;
  assert.equal(result.length, length);
  assert.equal(R.head(result), ProductType.FURNISHING);
  assert.equal(R.last(result), ProductType.PROVISION);
});

const ProductTypeTest = {};
export default ProductTypeTest;
