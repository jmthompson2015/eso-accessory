/* eslint no-console: ["error", { allow: ["log", "warn"] }] */

import Resource from "./Resource.js";
import ResourceType from "./ResourceType.js";

QUnit.module("Resource");

QUnit.test("Resource properties Obsidian", (assert) => {
  const resourceKey = Resource.OBSIDIAN;
  const properties = Resource.properties[resourceKey];
  assert.equal(properties.name, "Obsidian");
  assert.equal(properties.resourceTypeKey, ResourceType.STYLE);
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
  const length = 55;
  assert.equal(result.length, length);
  assert.equal(R.head(result), Resource.ADAMANTITE);
  assert.equal(R.last(result), Resource.TURPEN);
});

QUnit.test("keys() alphabetized", (assert) => {
  // Run.
  const result = Resource.keys();

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

const ResourceTest = {};
export default ResourceTest;
