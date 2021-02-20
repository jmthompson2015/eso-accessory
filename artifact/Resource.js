import Quality from "./Quality.js";
import ResourceType from "./ResourceType.js";

const Resource = {
  ADAMANTITE: "adamantite",
  ALCHEMICAL_RESIN: "alchemical resin",
  ARKTHZAND_SPROCKET: "arkthzand sprocket",
  ASH_CANVAS: "ash canvas",
  BARLEY: "barley",
  BAST: "bast",
  BEETLE_SCUTTLE: "beetle scuttle",
  BERVEZ_JUICE: "bervez juice",
  BLESSED_THISTLE: "blessed thistle",
  BLUE_ENTOLOMA: "blue entoloma",
  BONE: "bone",
  BRONZE: "bronze",
  BUGLOSS: "bugloss",
  BUTTERFLY_WING: "butterfly wing",
  CHAURUS_EGG: "chaurus egg",
  CHROMIUM_PLATING: "chromium plating",
  CLAM_GALL: "clam gall",
  COLUMNBINE: "columbine",
  CORN_FLOWER: "corn flower",
  CITRINE: "citrine",
  CLEAN_PELT: "clean pelt",
  CORUNDUM: "corundum",
  CRIMSON_NIRNROOT: "crimson nirnroot",
  CULANDA_LACQUER: "culanda lacquer",
  DECORATIVE_WAX: "decorative wax",
  DENATA: "denata",
  DRAGON_RHEUM: "dragon rheum",
  DRAGONS_BILE: "dragon's bile",
  DRAGONS_BLOOD: "dragon's blood",
  DRAGONTHORN: "dragonthorn",
  DREUGH_WAX: "dreugh wax",
  DWARVEN_OIL: "dwarven oil",
  DWEMER_FRAME: "dwemer frame",
  ELEGANT_LINING: "elegant lining",
  EMBROIDERY: "embroidery",
  EMETIC_RUSSULA: "emetic russula",
  FLESHFLY_LARVA: "fleshfly larva",
  FLINT: "flint",
  FLOUR: "flour",
  FROST_MIRRIAM: "frost mirriam",
  GRAIN_SOLVENT: "grain solvent",
  HEARTWOOD: "heartwood",
  HEMMING: "hemming",
  HONING_STONE: "honing stone",
  IMP_STOOL: "imp stool",
  IRIDIUM_PLATING: "iridium plating",
  IVORY_POLISHED: "ivory, polished",
  JAZBAY_GRAPES: "jazbay grapes",
  JEJOTA: "jejota",
  LADYS_SMOCK: "lady's smock",
  LUMINOUS_RUSSULA: "luminous russula",
  MANGANESE: "manganese",
  MASTIC: "mastic",
  MOLYBDENUM: "molybdenum",
  MOONSTONE: "moonstone",
  MOUNTAIN_FLOWER: "mountain flower",
  MUDCRAB_CHITIN: "mudcrab chitin",
  MUNDANE_RUNE: "mundane rune",
  NAMIRAS_ROT: "namira's rot",
  NICKEL: "nickel",
  NIGHTSHADE: "nightshade",
  NIRNROOT: "nirnroot",
  OBSIDIAN: "obsidian",
  OCHRE: "ochre",
  PITCH: "pitch",
  POTATO: "potato",
  POWDERED_MOTHER_OF_PEARL: "powdered mother of pearl",
  PUMPKIN: "pumpkin",
  RAKEIPA: "rakeipa",
  REGULUS: "regulus",
  REKUTA: "rekuta",
  RICE: "rice",
  ROSIN: "rosin",
  RUBY: "ruby",
  SALTRICE: "saltrice",
  SAPPHIRE: "sapphire",
  SCRIB_JELLY: "scrib jelly",
  SHIMMERING_SAND: "shimmering sand",
  SMALL_GAME: "small game",
  SPIDER_EGG: "spider egg",
  STARMETAL: "starmetal",
  STINKHORN: "stinkhorn",
  TEMPERING_ALLOY: "tempering alloy",
  TERNE_PLATING: "terne plating",
  TORCHBUG_THORAX: "torchbug thorax",
  TURPEN: "turpen",
  VILE_COAGULANT: "vile coagulant",
  VIOLET_COPRINUS: "violet coprinus",
  WATER_HYACINTH: "water hyacinth",
  WHITE_CAP: "white cap",
  WORMWOOD: "wormwood",
  ZIRCON_PLATING: "zircon plating",
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
  "arkthzand sprocket": {
    name: "Arkthzand Sprocket",
    resourceTypeKey: ResourceType.STYLE,
    key: "arkthzand sprocket",
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
  "beetle scuttle": {
    name: "Beetle Scuttle",
    resourceTypeKey: ResourceType.REAGENT,
    key: "beetle scuttle",
  },
  "bervez juice": {
    name: "Bervez Juice",
    qualityKey: Quality.EPIC,
    resourceTypeKey: ResourceType.PROVISION,
    url: "http://teso-guides.com/the-elder-scrolls-online-bervez-juice",
    key: "bervez juice",
  },
  "blessed thistle": {
    name: "Blessed Thistle",
    resourceTypeKey: ResourceType.REAGENT,
    key: "blessed thistle",
  },
  "blue entoloma": {
    name: "Blue Entoloma",
    resourceTypeKey: ResourceType.REAGENT,
    key: "blue entoloma",
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
  bugloss: {
    name: "Bugloss",
    resourceTypeKey: ResourceType.REAGENT,
    key: "bugloss",
  },
  "butterfly wing": {
    name: "Butterfly Wing",
    resourceTypeKey: ResourceType.REAGENT,
    key: "butterfly wing",
  },
  "chaurus egg": {
    name: "Chaurus Egg",
    resourceTypeKey: ResourceType.REAGENT,
    key: "chaurus egg",
  },
  "chromium plating": {
    name: "Chromium Plating",
    qualityKey: Quality.LEGENDARY,
    resourceTypeKey: ResourceType.PLATING,
    key: "chromium plating",
  },
  citrine: {
    name: "Citrine",
    resourceTypeKey: ResourceType.GEM,
    key: "citrine",
  },
  "clam gall": {
    name: "Clam Gall",
    resourceTypeKey: ResourceType.REAGENT,
    key: "clam gall",
  },
  "clean pelt": {
    name: "Clean Pelt",
    resourceTypeKey: ResourceType.FURNISHING,
    key: "clean pelt",
  },
  columbine: {
    name: "Columbine",
    resourceTypeKey: ResourceType.REAGENT,
    key: "columbine",
  },
  "corn flower": {
    name: "Corn Flower",
    resourceTypeKey: ResourceType.REAGENT,
    key: "corn flower",
  },
  corundum: {
    name: "Corundum",
    resourceTypeKey: ResourceType.STYLE,
    key: "corundum",
  },
  "crimson nirnroot": {
    name: "Crimson Nirnroot",
    resourceTypeKey: ResourceType.REAGENT,
    key: "crimson nirnroot",
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
  "dragon rheum": {
    name: "Dragon Rheum",
    resourceTypeKey: ResourceType.REAGENT,
    key: "dragon rheum",
  },
  "dragon's bile": {
    name: "Dragon's Bile",
    resourceTypeKey: ResourceType.REAGENT,
    key: "dragon's bile",
  },
  "dragon's blood": {
    name: "Dragon's Blood",
    resourceTypeKey: ResourceType.REAGENT,
    key: "dragon's blood",
  },
  dragonthorn: {
    name: "Dragonthorn",
    resourceTypeKey: ResourceType.REAGENT,
    key: "dragonthorn",
  },
  "dreugh wax": {
    name: "Dreugh Wax",
    qualityKey: Quality.LEGENDARY,
    resourceTypeKey: ResourceType.TANNIN,
    key: "dreugh wax",
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
  "emetic russula": {
    name: "Emetic Russula",
    resourceTypeKey: ResourceType.REAGENT,
    key: "emetic russula",
  },
  "fleshfly larva": {
    name: "Fleshfly Larva",
    resourceTypeKey: ResourceType.REAGENT,
    key: "fleshfly larva",
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
    qualityKey: Quality.EPIC,
    resourceTypeKey: ResourceType.PROVISION,
    url: "http://teso-guides.com/the-elder-scrolls-online-frost-mirriam",
    key: "frost mirriam",
  },
  "grain solvent": {
    name: "Grain Solvent",
    qualityKey: Quality.EPIC,
    resourceTypeKey: ResourceType.TEMPER,
    key: "grain solvent",
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
  "imp stool": {
    name: "Imp Stool",
    resourceTypeKey: ResourceType.REAGENT,
    key: "imp stool",
  },
  "iridium plating": {
    name: "Iridium Plating",
    qualityKey: Quality.SUPERIOR,
    resourceTypeKey: ResourceType.PLATING,
    key: "iridium plating",
  },
  "ivory, polished": {
    name: "Ivory, Polished",
    qualityKey: Quality.FINE,
    resourceTypeKey: ResourceType.FURNISHING,
    key: "ivory, polished",
  },
  "jazbay grapes": {
    name: "Jazbay Grapes",
    resourceTypeKey: ResourceType.PROVISION,
    url: "http://teso-guides.com/the-elder-scrolls-online-jazbay-grapes",
    key: "jazbay grapes",
  },
  jejota: {
    name: "Jejota",
    qualityKey: Quality.FINE,
    resourceTypeKey: ResourceType.RUNESTONE,
    key: "jejota",
  },
  "lady's smock": {
    name: "Lady's Smock",
    resourceTypeKey: ResourceType.REAGENT,
    key: "lady's smock",
  },
  "luminous russula": {
    name: "Luminous Russula",
    resourceTypeKey: ResourceType.REAGENT,
    key: "luminous russula",
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
  "mountain flower": {
    name: "Mountain Flower",
    resourceTypeKey: ResourceType.REAGENT,
    key: "mountain flower",
  },
  "mudcrab chitin": {
    name: "Mudcrab Chitin",
    resourceTypeKey: ResourceType.REAGENT,
    key: "mudcrab chitin",
  },
  "mundane rune": {
    name: "Mundane Rune",
    resourceTypeKey: ResourceType.FURNISHING,
    key: "mundane rune",
  },
  "namira's rot": {
    name: "Namira's Rot",
    resourceTypeKey: ResourceType.REAGENT,
    key: "namira's rot",
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
  nirnroot: {
    name: "Nirnroot",
    resourceTypeKey: ResourceType.REAGENT,
    key: "nirnroot",
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
  "powdered mother of pearl": {
    name: "Powdered Mother of Pearl",
    resourceTypeKey: ResourceType.REAGENT,
    key: "powdered mother of pearl",
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
  rekuta: {
    name: "Rekuta",
    resourceTypeKey: ResourceType.RUNESTONE,
    key: "rekuta",
  },
  rice: {
    name: "Rice",
    resourceTypeKey: ResourceType.PROVISION,
    key: "rice",
  },
  rosin: {
    name: "Rosin",
    qualityKey: Quality.LEGENDARY,
    resourceTypeKey: ResourceType.RESIN,
    key: "rosin",
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
  "spider egg": {
    name: "Spider Egg",
    resourceTypeKey: ResourceType.REAGENT,
    key: "spider egg",
  },
  starmetal: {
    name: "Starmetal",
    resourceTypeKey: ResourceType.STYLE,
    key: "starmetal",
  },
  stinkhorn: {
    name: "Stinkhorn",
    resourceTypeKey: ResourceType.REAGENT,
    key: "stinkhorn",
  },
  "tempering alloy": {
    name: "Tempering Alloy",
    qualityKey: Quality.LEGENDARY,
    resourceTypeKey: ResourceType.TEMPER,
    key: "tempering alloy",
  },
  "terne plating": {
    name: "Terne Plating",
    qualityKey: Quality.FINE,
    resourceTypeKey: ResourceType.PLATING,
    key: "terne plating",
  },
  "torchbug thorax": {
    name: "Torchbug Thorax",
    resourceTypeKey: ResourceType.REAGENT,
    key: "torchbug thorax",
  },
  turpen: {
    name: "Turpen",
    qualityKey: Quality.SUPERIOR,
    resourceTypeKey: ResourceType.RESIN,
    key: "turpen",
  },
  "vile coagulant": {
    name: "Vile Coagulant",
    resourceTypeKey: ResourceType.REAGENT,
    key: "vile coagulant",
  },
  "violet coprinus": {
    name: "Violet Coprinus",
    resourceTypeKey: ResourceType.REAGENT,
    key: "violet coprinus",
  },
  "water hyacinth": {
    name: "Water Hyacinth",
    resourceTypeKey: ResourceType.REAGENT,
    key: "water hyacinth",
  },
  "white cap": {
    name: "White Cap",
    resourceTypeKey: ResourceType.REAGENT,
    key: "white cap",
  },
  wormwood: {
    name: "Wormwood",
    resourceTypeKey: ResourceType.REAGENT,
    key: "wormwood",
  },
  "zircon plating": {
    name: "Zircon Plating",
    qualityKey: Quality.EPIC,
    resourceTypeKey: ResourceType.PLATING,
    key: "zircon plating",
  },
};

Resource.keys = () => Object.keys(Resource.properties);

Resource.values = () => Object.values(Resource.properties);

Object.freeze(Resource);

export default Resource;
