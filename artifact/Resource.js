import Quality from "./Quality.js";
import ResourceType from "./ResourceType.js";

const Resource = {
  ADAMANTITE: "adamantite",
  ALCHEMICAL_RESIN: "alchemical resin",
  ASH_CANVAS: "ash canvas",
  BARLEY: "barley",
  BAST: "bast",
  BERVEZ_JUICE: "bervez juice",
  BONE: "bone",
  BRONZE: "bronze",
  CITRINE: "citrine",
  CLEAN_PELT: "clean pelt",
  CORUNDUM: "corundum",
  CULANDA_LACQUER: "culanda lacquer",
  DECORATIVE_WAX: "decorative wax",
  DENATA: "denata",
  DWARVEN_OIL: "dwarven oil",
  DWEMER_FRAME: "dwemer frame",
  ELEGANT_LINING: "elegant lining",
  EMBROIDERY: "embroidery",
  FLINT: "flint",
  FLOUR: "flour",
  FROST_MIRRIAM: "frost mirriam",
  HEARTWOOD: "heartwood",
  HEMMING: "hemming",
  HONING_STONE: "honing stone",
  JAZBAY_GRAPES: "jazbay grapes",
  JEJOTA: "jejota",
  MANGANESE: "manganese",
  MASTIC: "mastic",
  MOLYBDENUM: "molybdenum",
  MOONSTONE: "moonstone",
  MUNDANE_RUNE: "mundane rune",
  NICKEL: "nickel",
  NIGHTSHADE: "nightshade",
  OBSIDIAN: "obsidian",
  OCHRE: "ochre",
  PITCH: "pitch",
  POTATO: "potato",
  PUMPKIN: "pumpkin",
  RAKEIPA: "rakeipa",
  REGULUS: "regulus",
  RICE: "rice",
  RUBY: "ruby",
  SALTRICE: "saltrice",
  SAPPHIRE: "sapphire",
  SCRIB_JELLY: "scrib jelly",
  SHIMMERING_SAND: "shimmering sand",
  SMALL_GAME: "small game",
  STARMETAL: "starmetal",
  TURPEN: "turpen",
};

Resource.properties = {
  adamantite: {
    name: "Adamantite",
    resourceTypeKey: ResourceType.STYLE,
    key: "adamantite",
  },
  "alchemical resin": {
    name: "Alchemical Resin",
    resourceTypeKey: ResourceType.FURNISHING,
    key: "alchemical resin",
  },
  "ash canvas": {
    name: "Ash Canvas",
    resourceTypeKey: ResourceType.STYLE,
    key: "ash canvas",
  },
  barley: {
    name: "Barley",
    resourceTypeKey: ResourceType.PROVISION,
    key: "barley",
  },
  bast: {
    name: "Bast",
    resourceTypeKey: ResourceType.FURNISHING,
    key: "bast",
  },
  "bervez juice": {
    name: "Bervez Juice",
    resourceTypeKey: ResourceType.PROVISION,
    key: "bervez juice",
  },
  bone: {
    name: "Bone",
    resourceTypeKey: ResourceType.STYLE,
    key: "bone",
  },
  bronze: {
    name: "Bronze",
    resourceTypeKey: ResourceType.STYLE,
    key: "bronze",
  },
  citrine: {
    name: "Citrine",
    resourceTypeKey: ResourceType.GEM,
    key: "citrine",
  },
  "clean pelt": {
    name: "Clean Pelt",
    resourceTypeKey: ResourceType.FURNISHING,
    key: "clean pelt",
  },
  corundum: {
    name: "Corundum",
    resourceTypeKey: ResourceType.STYLE,
    key: "corundum",
  },
  "culanda lacquer": {
    name: "Culanda Lacquer",
    resourceTypeKey: ResourceType.STYLE,
    key: "culanda lacquer",
  },
  "decorative wax": {
    name: "Decorative Wax",
    resourceTypeKey: ResourceType.FURNISHING,
    key: "decorative wax",
  },
  denata: {
    name: "Denata",
    qualityKey: Quality.SUPERIOR,
    resourceTypeKey: ResourceType.RUNESTONE,
    key: "denata",
  },
  "dwarven oil": {
    name: "Dwarven Oil",
    qualityKey: Quality.SUPERIOR,
    resourceTypeKey: ResourceType.TEMPER,
    key: "dwarven oil",
  },
  "dwemer frame": {
    name: "Dwemer frame",
    resourceTypeKey: ResourceType.STYLE,
    key: "dwemer frame",
  },
  "elegant lining": {
    name: "Elegant Lining",
    qualityKey: Quality.EPIC,
    resourceTypeKey: ResourceType.TANNIN,
    key: "elegant lining",
  },
  embroidery: {
    name: "Embroidery",
    qualityKey: Quality.SUPERIOR,
    resourceTypeKey: ResourceType.TANNIN,
    key: "embroidery",
  },
  flint: {
    name: "Flint",
    resourceTypeKey: ResourceType.STYLE,
    key: "flint",
  },
  flour: {
    name: "Flour",
    resourceTypeKey: ResourceType.PROVISION,
    key: "flour",
  },
  "frost mirriam": {
    name: "Frost Mirriam",
    resourceTypeKey: ResourceType.PROVISION,
    key: "frost mirriam",
  },
  heartwood: {
    name: "Heartwood",
    resourceTypeKey: ResourceType.FURNISHING,
    key: "heartwood",
  },
  hemming: {
    name: "Hemming",
    qualityKey: Quality.FINE,
    resourceTypeKey: ResourceType.TANNIN,
    key: "hemming",
  },
  "honing stone": {
    name: "Honing Stone",
    qualityKey: Quality.FINE,
    resourceTypeKey: ResourceType.TEMPER,
    key: "honing stone",
  },
  "jazbay grapes": {
    name: "Jazbay Grapes",
    resourceTypeKey: ResourceType.PROVISION,
    key: "jazbay grapes",
  },
  jejota: {
    name: "Jejota",
    qualityKey: Quality.FINE,
    resourceTypeKey: ResourceType.RUNESTONE,
    key: "jejota",
  },
  manganese: {
    name: "Manganese",
    resourceTypeKey: ResourceType.STYLE,
    key: "manganese",
  },
  mastic: {
    name: "Mastic",
    qualityKey: Quality.EPIC,
    resourceTypeKey: ResourceType.RESIN,
    key: "mastic",
  },
  molybdenum: {
    name: "Molybdenum",
    resourceTypeKey: ResourceType.STYLE,
    key: "molybdenum",
  },
  moonstone: {
    name: "Moonstone",
    resourceTypeKey: ResourceType.STYLE,
    key: "moonstone",
  },
  "mundane rune": {
    name: "Mundane Rune",
    resourceTypeKey: ResourceType.FURNISHING,
    key: "mundane rune",
  },
  nickel: {
    name: "Nickel",
    resourceTypeKey: ResourceType.STYLE,
    key: "nickel",
  },
  nightshade: {
    name: "Nightshade",
    resourceTypeKey: ResourceType.REAGENT,
    key: "nightshade",
  },
  obsidian: {
    name: "Obsidian",
    resourceTypeKey: ResourceType.STYLE,
    key: "obsidian",
  },
  ochre: {
    name: "Ochre",
    resourceTypeKey: ResourceType.FURNISHING,
    key: "ochre",
  },
  pitch: {
    name: "Pitch",
    qualityKey: Quality.FINE,
    resourceTypeKey: ResourceType.RESIN,
    key: "pitch",
  },
  potato: {
    name: "Potato",
    resourceTypeKey: ResourceType.PROVISION,
    key: "potato",
  },
  pumpkin: {
    name: "Pumpkin",
    resourceTypeKey: ResourceType.PROVISION,
    key: "pumpkin",
  },
  rakeipa: {
    name: "Rakeipa",
    resourceTypeKey: ResourceType.RUNESTONE,
    key: "rakeipa",
  },
  regulus: {
    name: "Regulus",
    resourceTypeKey: ResourceType.FURNISHING,
    key: "regulus",
  },
  rice: {
    name: "Rice",
    resourceTypeKey: ResourceType.PROVISION,
    key: "rice",
  },
  ruby: {
    name: "Ruby",
    resourceTypeKey: ResourceType.GEM,
    key: "ruby",
  },
  saltrice: {
    name: "Saltrice",
    resourceTypeKey: ResourceType.PROVISION,
    key: "saltrice",
  },
  sapphire: {
    name: "Sapphire",
    resourceTypeKey: ResourceType.GEM,
    key: "sapphire",
  },
  starmetal: {
    name: "Starmetal",
    resourceTypeKey: ResourceType.STYLE,
    key: "starmetal",
  },
  "scrib jelly": {
    name: "Scrib Jelly",
    resourceTypeKey: ResourceType.REAGENT,
    key: "scrib jelly",
  },
  "shimmering sand": {
    name: "Shimmering Sand",
    resourceTypeKey: ResourceType.STYLE,
    key: "shimmering sand",
  },
  "small game": {
    name: "Small Game",
    resourceTypeKey: ResourceType.PROVISION,
    key: "small game",
  },
  turpen: {
    name: "Turpen",
    qualityKey: Quality.SUPERIOR,
    resourceTypeKey: ResourceType.RESIN,
    key: "turpen",
  },
};

Resource.keys = () => Object.keys(Resource.properties);

Resource.values = () => Object.values(Resource.properties);

Object.freeze(Resource);

export default Resource;
