/* eslint no-console: ["error", { allow: ["log", "warn"] }] */

import Character from "./Character.js";

QUnit.module("Character");

QUnit.test("Character properties Frak Lock", (assert) => {
  const characterKey = Character.FRAK_LOCK;
  const properties = Character.properties[characterKey];
  assert.equal(properties.name, "Frak Lock");
  assert.equal(properties.key, characterKey);
});

QUnit.test("keys and values", (assert) => {
  // Setup.

  // Run.
  const result = Character.keys();
  const ownPropertyNames = Object.getOwnPropertyNames(Character);

  // Verify.
  R.forEach((key) => {
    const key2 = Character[key];

    if (key !== "properties" && typeof key2 === "string") {
      assert.ok(Character.properties[key2], `Missing value for key = ${key}`);
    }
  }, ownPropertyNames);

  R.forEach((value) => {
    const p = ownPropertyNames.filter((key) => Character[key] === value);

    assert.equal(p.length, 1, `Missing key for value = ${value}`);
  }, result);
});

QUnit.test("keys()", (assert) => {
  // Run.
  const result = Character.keys();

  // Verify.
  assert.ok(result);
  const length = 6;
  assert.equal(result.length, length);
  assert.equal(R.head(result), Character.FRAK_LOCK);
  assert.equal(R.last(result), Character.ZAREK_LOCK);
});

const CharacterTest = {};
export default CharacterTest;
