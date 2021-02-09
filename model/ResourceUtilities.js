import ItemUtils from "./ItemUtilities.js";

const ResourceUtilities = {};

ResourceUtilities.value = (resourceKey) => ItemUtils.averagePrice(resourceKey);

export default ResourceUtilities;
