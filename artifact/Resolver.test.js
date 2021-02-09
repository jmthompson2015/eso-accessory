import Category from "./Category.js";
import Craft from "./Craft.js";
import Product from "./Product.js";
import Quality from "./Quality.js";
import Resolver from "./Resolver.js";
import Resource from "./Resource.js";
import ResourceType from "./ResourceType.js";

QUnit.module("Resolver");

QUnit.test("category()", (assert) => {
  assert.equal(Resolver.category(Category.COURTYARD).name, "Courtyard");
  assert.equal(Resolver.category(Category.WORKSHOP).name, "Workshop");
  assert.equal(Resolver.category(undefined), null);
});

QUnit.test("craft()", (assert) => {
  assert.equal(Resolver.craft(Craft.ALCHEMY).name, "Alchemy");
  assert.equal(Resolver.craft(Craft.WOODWORKING).name, "Woodworking");
  assert.equal(Resolver.craft(undefined), null);
});

QUnit.test("product()", (assert) => {
  assert.equal(
    Resolver.product(Product.DRES_LANTERN_STATIONARY).name,
    "Dres Lantern, Stationary"
  );
  assert.equal(Resolver.product(Resource.ALCHEMICAL_RESIN), null);
  assert.equal(Resolver.product(undefined), null);
});

QUnit.test("quality()", (assert) => {
  assert.equal(Resolver.quality(Quality.NORMAL).name, "1 Normal");
  assert.equal(Resolver.quality(Quality.LEGENDARY).name, "5 Legendary");
  assert.equal(Resolver.quality(undefined), null);
});

QUnit.test("resource()", (assert) => {
  assert.equal(Resolver.resource(Product.DRES_LANTERN_STATIONARY), null);
  assert.equal(
    Resolver.resource(Resource.ALCHEMICAL_RESIN).name,
    "Alchemical Resin"
  );
  assert.equal(Resolver.resource(undefined), null);
});

QUnit.test("resourceType()", (assert) => {
  assert.equal(Resolver.resourceType(ResourceType.RUNESTONE).name, "Runestone");
  assert.equal(Resolver.resourceType(ResourceType.STYLE).name, "Style");
  assert.equal(Resolver.resourceType(undefined), null);
});

QUnit.test("thing()", (assert) => {
  assert.equal(
    Resolver.thing(Product.DRES_LANTERN_STATIONARY).name,
    "Dres Lantern, Stationary"
  );
  assert.equal(
    Resolver.thing(Resource.ALCHEMICAL_RESIN).name,
    "Alchemical Resin"
  );
  assert.equal(Resolver.thing(undefined), null);
});

const ResolverTest = {};
export default ResolverTest;
