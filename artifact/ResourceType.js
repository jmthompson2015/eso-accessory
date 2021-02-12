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
    url:
      "https://en.uesp.net/wiki/Online:Furnishing_Materials#Primary_Furnishing_Materials",
    key: "furnishing",
  },
  gem: {
    name: "Gem",
    url: "https://en.uesp.net/wiki/Online:Blacksmithing_Materials#Gems",
    key: "gem",
  },
  provision: {
    name: "Provision",
    url: "https://en.uesp.net/wiki/Online:Provisioning_Ingredients",
    key: "provision",
  },
  reagent: {
    name: "Reagent",
    url: "https://en.uesp.net/wiki/Online:Alchemy_Ingredients#Reagents",
    key: "reagent",
  },
  resin: {
    name: "Resin",
    url: "https://en.uesp.net/wiki/Online:Woodworking_Materials#Resins",
    key: "resin",
  },
  runestone: {
    name: "Runestone",
    url: "https://en.uesp.net/wiki/Online:Runestones",
    key: "runestone",
  },
  style: {
    name: "Style",
    url: "https://en.uesp.net/wiki/Online:Style_Materials",
    key: "style",
  },
  tannin: {
    name: "Tannin",
    url: "https://en.uesp.net/wiki/Online:Clothing_Materials#Tannins",
    key: "tannin",
  },
  temper: {
    name: "Temper",
    url: "https://en.uesp.net/wiki/Online:Blacksmithing_Materials#Tempers",
    key: "temper",
  },
};

ResourceType.keys = () => Object.keys(ResourceType.properties);

ResourceType.values = () => Object.values(ResourceType.properties);

Object.freeze(ResourceType);

export default ResourceType;
