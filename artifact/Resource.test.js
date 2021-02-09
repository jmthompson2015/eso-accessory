/* eslint no-console: ["error", { allow: ["log", "warn"] }] */

import Resource from "./Resource.js";

QUnit.module("Resource");

QUnit.test("Resource properties Obsidian", (assert) => {
  const resourceKey = Resource.OBSIDIAN;
  const properties = Resource.properties[resourceKey];
  assert.equal(properties.name, "Obsidian");
  assert.equal(properties.key, resourceKey);
});

QUnit.test("keys and values", (assert) => {
  // Setup.

  // Run.
  const result = Resource.keys();
  const ownPropertyNames = Object.getOwnPropertyNames(Resource);

  // Verify.
  R.forEach((key) => {
    const key2 = Resource[key];

    if (key !== "properties" && typeof key2 === "string") {
      assert.ok(Resource.properties[key2], `Missing value for key = ${key}`);
    }
  }, ownPropertyNames);

  R.forEach((value) => {
    const p = ownPropertyNames.filter((key) => Resource[key] === value);

    assert.equal(p.length, 1, `Missing key for value = ${value}`);
  }, result);
});

QUnit.test("keys()", (assert) => {
  // Run.
  const result = Resource.keys();

  // Verify.
  assert.ok(result);
  const length = 40;
  assert.equal(result.length, length);
  assert.equal(R.head(result), Resource.ALCHEMICAL_RESIN);
  assert.equal(R.last(result), Resource.TURPEN);
});

const ResourceTest = {};
export default ResourceTest;
