const Craft = {
  ALCHEMY: "alchemy",
  BLACKSMITHING: "blacksmithing",
  CLOTHING: "clothing",
  ENCHANTING: "enchanting",
  JEWELRY: "jewelry",
  PROVISIONING: "provisioning",
  WOODWORKING: "woodworking",
};

Craft.properties = {
  alchemy: {
    name: "Alchemy",
    key: "alchemy",
  },
  blacksmithing: {
    name: "Blacksmithing",
    key: "blacksmithing",
  },
  clothing: {
    name: "Clothing",
    key: "clothing",
  },
  enchanting: {
    name: "Enchanting",
    key: "enchanting",
  },
  jewelry: {
    name: "Jewelry",
    key: "jewelry",
  },
  provisioning: {
    name: "Provisioning",
    key: "provisioning",
  },
  woodworking: {
    name: "Woodworking",
    key: "woodworking",
  },
};

Craft.keys = () => Object.keys(Craft.properties);

Craft.values = () => Object.values(Craft.properties);

Object.freeze(Craft);

export default Craft;
