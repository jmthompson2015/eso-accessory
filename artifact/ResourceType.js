const ResourceType = {
  FURNISHING: "furnishing",
  GEM: "gem",
  PROVISION: "provision",
  REAGENT: "reagent",
  RESIN: "resin",
  RUNESTONE: "runestone",
  STYLE: "style",
  TANNIN: "tannin",
  TEMPER: "temper",
};

ResourceType.properties = {
  furnishing: {
    name: "Furnishing",
    key: "furnishing",
  },
  gem: {
    name: "Gem",
    key: "gem",
  },
  provision: {
    name: "Provision",
    key: "provision",
  },
  reagent: {
    name: "Reagent",
    key: "reagent",
  },
  resin: {
    name: "Resin",
    key: "resin",
  },
  runestone: {
    name: "Runestone",
    key: "runestone",
  },
  style: {
    name: "Style",
    key: "style",
  },
  tannin: {
    name: "Tannin",
    key: "tannin",
  },
  temper: {
    name: "Temper",
    key: "temper",
  },
};

ResourceType.keys = () => Object.keys(ResourceType.properties);

ResourceType.values = () => Object.values(ResourceType.properties);

Object.freeze(ResourceType);

export default ResourceType;
