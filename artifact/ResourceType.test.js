/* eslint no-console: ["error", { allow: ["log", "warn"] }] */

import ResourceType from "./ResourceType.js";

QUnit.module("ResourceType");

QUnit.test("ResourceType properties Runestone", (assert) => {
  const typeKey = ResourceType.RUNESTONE;
  const properties = ResourceType.properties[typeKey];
  assert.equal(properties.name, "Runestone");
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
  const length = 9;
  assert.equal(result.length, length);
  assert.equal(R.head(result), ResourceType.FURNISHING);
  assert.equal(R.last(result), ResourceType.TEMPER);
});

const ResourceTypeTest = {};
export default ResourceTypeTest;
