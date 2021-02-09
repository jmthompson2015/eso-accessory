const Category = {
  COURTYARD: "courtyard",
  DINING: "dining",
  HEARTH: "hearth",
  LIBRARY: "library",
  LIGHTING: "lighting",
  MISCELLANEOUS: "miscellaneous",
  PARLOR: "parlor",
  STRUCTURES: "structures",
  SUITE: "suite",
  UNDERCROFT: "undercroft",
  WORKSHOP: "workshop",
};

Category.properties = {
  courtyard: {
    name: "Courtyard",
    key: "courtyard",
  },
  dining: {
    name: "Dining",
    key: "dining",
  },
  hearth: {
    name: "Hearth",
    key: "hearth",
  },
  library: {
    name: "Library",
    key: "library",
  },
  lighting: {
    name: "Lighting",
    key: "lighting",
  },
  miscellaneous: {
    name: "Miscellaneous",
    key: "miscellaneous",
  },
  parlor: {
    name: "Parlor",
    key: "parlor",
  },
  structures: {
    name: "Structures",
    key: "structures",
  },
  suite: {
    name: "Suite",
    key: "suite",
  },
  undercroft: {
    name: "Undercroft",
    key: "undercroft",
  },
  workshop: {
    name: "Workshop",
    key: "workshop",
  },
};

Category.keys = () => Object.keys(Category.properties);

Category.values = () => Object.values(Category.properties);

Object.freeze(Category);

export default Category;
