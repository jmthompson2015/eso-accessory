import Resource from "../artifact/Resource.js";

import ResourceUtilities from "./ResourceUtilities.js";

QUnit.module("ResourceUtilities");

QUnit.test("value() Alchemical Resin", (assert) => {
  // Setup.
  const resourceKey = Resource.ALCHEMICAL_RESIN;

  // Run.
  const result = ResourceUtilities.value(resourceKey);

  // Verify.
  assert.ok(result);
  assert.equal(result >= 8.86 && result <= 15.42, true, `result = ${result}`);
});

const ResourceUtilitiesTest = {};
export default ResourceUtilitiesTest;
