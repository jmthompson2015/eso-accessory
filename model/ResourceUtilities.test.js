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
  assert.equal(result >= 8.91 && result <= 9.03, true, `result = ${result}`);
});

const ResourceUtilitiesTest = {};
export default ResourceUtilitiesTest;
