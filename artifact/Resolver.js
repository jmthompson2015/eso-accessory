import Category from "./Category.js";
import Character from "./Character.js";
import Craft from "./Craft.js";
import Product from "./Product.js";
import ProductType from "./ProductType.js";
import Quality from "./Quality.js";
import Resource from "./Resource.js";
import ResourceType from "./ResourceType.js";

const Resolver = {};

Resolver.category = (categoryKey) =>
  categoryKey ? Category.properties[categoryKey] : null;

Resolver.character = (characterKey) =>
  characterKey ? Character.properties[characterKey] : null;

Resolver.craft = (craftKey) => (craftKey ? Craft.properties[craftKey] : null);

Resolver.product = (productKey) =>
  productKey ? Product.properties[productKey] : null;

Resolver.productType = (productTypeKey) =>
  productTypeKey ? ProductType.properties[productTypeKey] : null;

Resolver.quality = (qualityKey) =>
  qualityKey ? Quality.properties[qualityKey] : null;

Resolver.resource = (resourceKey) =>
  resourceKey ? Resource.properties[resourceKey] : null;

Resolver.resourceType = (resourceTypeKey) =>
  resourceTypeKey ? ResourceType.properties[resourceTypeKey] : null;

Resolver.thing = (thingKey) =>
  thingKey ? Resolver.product(thingKey) || Resolver.resource(thingKey) : null;

Object.freeze(Resolver);

export default Resolver;
