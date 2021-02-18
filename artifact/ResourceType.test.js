/* eslint no-console: ["error", { allow: ["log", "warn"] }] */

import ResourceType from "./ResourceType.js";

QUnit.module("ResourceType");

QUnit.test("ResourceType properties Runestone", (assert) => {
  const typeKey = ResourceType.RUNESTONE;
  const properties = ResourceType.properties[typeKey];
  assert.equal(properties.name, "Runestone");
  assert.equal(properties.url, "https://en.uesp.net/wiki/Online:Runestones");
  assert.equal(properties.key, typeKey);
});

QUnit.test("keys and values", (assert) => {
  // Setup.

  // Run.
  const result = ResourceType.keys();
  const ownPropertyNames = Object.getOwnPropertyNames(ResourceType);

  // Verify.
  R.forEach((key) => {
    const key2 = ResourceType[key];

    if (key !== "properties" && typeof key2 === "string") {
      assert.ok(
        ResourceType.properties[key2],
        `Missing value for key = ${key}`
      );
    }
  }, ownPropertyNames);

  R.forEach((value) => {
    const p = ownPropertyNames.filter((key) => ResourceType[key] === value);

    assert.equal(p.length, 1, `Missing key for value = ${value}`);
  }, result);
});

QUnit.test("keys()", (assert) => {
  // Run.
  const result = ResourceType.keys();

  // Verify.
  assert.ok(result);
  const length = 10;
  assert.equal(result.length, length);
  assert.equal(R.head(result), ResourceType.FURNISHING);
  assert.equal(R.last(result), ResourceType.TEMPER);
});

QUnit.test("keys() alphabetized", (assert) => {
  // Run.
  const result = ResourceType.keys();

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

const ResourceTypeTest = {};
export default ResourceTypeTest;
