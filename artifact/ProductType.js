const ProductType = {
  FURNISHING: "furnishing",
  POTION: "potion",
  PROVISION: "provision",
};

ProductType.properties = {
  furnishing: {
    name: "Furnishing",
    url: "https://en.uesp.net/wiki/Online:Furnishings",
    key: "furnishing",
  },
  potion: {
    name: "Potion",
    url: "https://en.uesp.net/wiki/Online:Potions",
    key: "potion",
  },
  provision: {
    name: "Provision",
    url: "https://en.uesp.net/wiki/Online:Provisioning",
    key: "provision",
  },
};

ProductType.keys = () => Object.keys(ProductType.properties);

ProductType.values = () => Object.values(ProductType.properties);

Object.freeze(ProductType);

export default ProductType;
