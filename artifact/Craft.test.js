/* eslint no-console: ["error", { allow: ["log", "warn"] }] */

import Craft from "./Craft.js";

QUnit.module("Craft");

QUnit.test("Craft properties Fine", (assert) => {
  const craftKey = Craft.ALCHEMY;
  const properties = Craft.properties[craftKey];
  assert.equal(properties.name, "Alchemy");
  assert.equal(properties.key, craftKey);
});

QUnit.test("keys and values", (assert) => {
  // Setup.

  // Run.
  const result = Craft.keys();
  const ownPropertyNames = Object.getOwnPropertyNames(Craft);

  // Verify.
  R.forEach((key) => {
    const key2 = Craft[key];

    if (key !== "properties" && typeof key2 === "string") {
      assert.ok(Craft.properties[key2], `Missing value for key = ${key}`);
    }
  }, ownPropertyNames);

  R.forEach((value) => {
    const p = ownPropertyNames.filter((key) => Craft[key] === value);

    assert.equal(p.length, 1, `Missing key for value = ${value}`);
  }, result);
});

QUnit.test("keys()", (assert) => {
  // Run.
  const result = Craft.keys();

  // Verify.
  assert.ok(result);
  const length = 7;
  assert.equal(result.length, length);
  assert.equal(R.head(result), Craft.ALCHEMY);
  assert.equal(R.last(result), Craft.WOODWORKING);
});

const CraftTest = {};
export default CraftTest;
