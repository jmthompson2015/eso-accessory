/* eslint no-console: ["error", { allow: ["log", "warn"] }] */

import Product from "./Product.js";
import ProductType from "./ProductType.js";
import Quality from "./Quality.js";

QUnit.module("Product");

QUnit.test("Product properties Dres Lantern, Stationary", (assert) => {
  const productKey = Product.DRES_LANTERN_STATIONARY;
  const properties = Product.properties[productKey];
  assert.equal(properties.name, "Dres Lantern, Stationary");
  assert.equal(properties.productTypeKey, ProductType.FURNISHING);
  assert.equal(properties.qualityKey, Quality.FINE);
  assert.equal(
    properties.url,
    "https://eso.mmo-fashion.com/Dres-Lantern-Stationary"
  );
  assert.equal(properties.key, productKey);
});

QUnit.test("Product properties Rough Bag, Burlap", (assert) => {
  const productKey = Product.ROUGH_BAG_BURLAP;
  const properties = Product.properties[productKey];
  assert.equal(properties.name, "Rough Bag, Burlap");
  assert.equal(properties.productTypeKey, ProductType.FURNISHING);
  assert.equal(properties.qualityKey, Quality.NORMAL);
  assert.equal(properties.url, "https://eso.mmo-fashion.com/Rough-Bag-Burlap");
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
  const length = 173;
  assert.equal(result.length, length);
  assert.equal(R.head(result), Product.ALINOR_AMPHORA_DELICATE);
  assert.equal(R.last(result), Product.WOOD_ELF_VASE_PAINTED);
});

QUnit.test("keys() alphabetized", (assert) => {
  // Run.
  const result = Product.keys();

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

const ProductTest = {};
export default ProductTest;
