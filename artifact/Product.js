import Quality from "./Quality.js";

const Product = {
  ALINOR_AMPHORA_DELICATE: "alinor amphora, delicate",
  ARGONIAN_TOTEM_OF_SKULLS: "argonian totem of skulls",
  ASHLANDER_PLATTER_CERAMIC: "ashlander platter, ceramic",
  BRETON_AMPHORA_CERAMIC: "breton amphora, ceramic",
  BRETON_DESK: "breton desk",
  BRETON_NIGHTSTAND_OPEN: "breton nightstand, open",
  BRETON_SCONCE_TORCH: "breton sconce, torch",
  COMMON_CANDLE_LASTING: "common candle, lasting",
  COMMON_CANDLE_SET: "common candle, set",
  DARK_ELF_CANDLE_CLAW_BASE: "dark elf candle, claw base",
  DARK_ELF_CAULDRON_BANDED: "dark elf cauldron, banded",
  DARK_ELF_LANTERN_OIL: "dark elf lantern, oil",
  DRES_BOWL_EMPTY: "dres bowl, empty",
  DRES_CANDLES_MEDITATION: "dres candles, meditation",
  DRES_LANTERN_STATIONARY: "dres lantern, stationary",
  HAGRAVEN_CAULDRON_RITUAL: "hagraven cauldron, ritual",
  INDORIL_STREETLIGHT_FULL_STONE: "indoril streetlight, full stone",
  INDORIL_STREETLIGHT_STONE: "indoril streetlight, stone",
  KHAJIIT_CARPET_CRESCENT_MOONS: "khajiit carpet, crescent moons",
  LAVA_FOOT_SOUP_AND_SALTRICE: "lava foot soup-and-saltrice",
  NORD_CANDLEHOLDER_CUP: "nord candleholder, cup",
  ORCISH_BANNER_WORN: "orcish banner, worn",
  ORCISH_BRAZIER_SMOLDERING: "orcish brazier, smoldering",
  ORCISH_CHANDELIER_PRACTICAL: "orcish chandelier, practical",
  ORCISH_LANTERN_HOODED: "orcish lantern, hooded",
  ORCISH_VESSEL_SEALED_CERAMIC: "orcish vessel, sealed ceramic",
  REDGUARD_ARMCHAIR_CUSHIONED: "redguard armchair, cushioned",
  REDGUARD_ARMCHAIR_STARRY: "redguard armchair, starry",
  REDGUARD_BAR_LONG_CABINET: "redguard bar, long cabinet",
  REDGUARD_BENCH_PADDED: "redguard bench, padded",
  REDGUARD_BENCH_SLATTED: "redguard bench, slatted",
  REDGUARD_BOOKCASE_FULL: "redguard bookcase, full",
  REDGUARD_BOOKCASE_PILED: "redguard bookcase, piled",
  REDGUARD_CANDLESTICK_PRACTICAL: "redguard candlestick, practical",
  REDGUARD_CARPET_DUNES: "redguard carpet, dunes",
  REDGUARD_CURTAIN_SMOKY: "redguard curtain, smoky",
  REDGUARD_MAT_SUNSET: "redguard mat, sunset",
  REDGUARD_POT_CAPPED: "redguard pot, capped",
  REDGUARD_POT_SEALED: "redguard pot, sealed",
  REDGUARD_RUNNER_SUN: "redguard runner, sun",
  REDGUARD_STREETLAMP_SINGLE: "redguard streetlamp, single",
  REDGUARD_WAGON_MERCHANT: "redguard wagon, merchant",
  REDORAN_SPOON_WOODEN: "redoran spoon, wooden",
  ROUGH_BAG_BURLAP: "rough bag, burlap",
  ROUGH_BEDROLL_BASIC: "rough bedroll, basic",
  ROUGH_BOWL_COMMON: "rough bowl, common",
  ROUGH_BOX_BOARDED: "rough box, boarded",
  ROUGH_CONTAINER_CARGO: "rough container, cargo",
  ROUGH_CRATE_BOLTED: "rough crate, bolted",
  ROUGH_CRATE_REINFORCED: "rough crate, reinforced",
  ROUGH_CUP_EMPTY: "rough cup, empty",
  ROUGH_HATCHET_PRACTICAL: "rough hatchet, practical",
  ROUGH_KNIFE_BUTCHER: "rough knife, butcher",
  ROUGH_PLATFORM_STAGE: "rough platform, stage",
  ROUGH_STRETCHER_MILITARY: "rough stretcher, military",
  WITCHMOTHERS_POTENT_BREW: "witchmother's potent brew",
  WOOD_ELF_BAR_SHORT: "wood elf bar, short",
  WOOD_ELF_BONE_CHIMES: "wood elf bone chimes",
  WOOD_ELF_DIVIDER_RELAXED: "wood elf divider, relaxed",
  WOOD_ELF_PITCHER_PAINTED: "wood elf pitcher, painted",
};

Product.properties = {
  "alinor amphora, delicate": {
    name: "Alinor Amphora, Delicate",
    qualityKey: Quality.FINE,
    key: "alinor amphora, delicate",
  },
  "argonian totem of skulls": {
    name: "Argonian Totem of Skulls",
    qualityKey: Quality.EPIC,
    key: "argonian totem of skulls",
  },
  "ashlander platter, ceramic": {
    name: "Ashlander Platter, Ceramic",
    qualityKey: Quality.SUPERIOR,
    key: "ashlander platter, ceramic",
  },
  "breton amphora, ceramic": {
    name: "Breton Amphora, Ceramic",
    qualityKey: Quality.FINE,
    key: "breton amphora, ceramic",
  },
  "breton desk": {
    name: "Breton Desk",
    qualityKey: Quality.FINE,
    key: "breton desk",
  },
  "breton nightstand, open": {
    name: "Breton Nightstand, Open",
    qualityKey: Quality.FINE,
    key: "breton nightstand, open",
  },
  "breton sconce, torch": {
    name: "Breton Sconce, Torch",
    qualityKey: Quality.FINE,
    key: "breton sconce, torch",
  },
  "common candle, lasting": {
    name: "Common Candle, Lasting",
    qualityKey: Quality.FINE,
    key: "common candle, lasting",
  },
  "common candle, set": {
    name: "Common Candle, Set",
    qualityKey: Quality.FINE,
    key: "common candle, set",
  },
  "dark elf candle, claw base": {
    name: "Dark Elf Candle, Claw Base",
    qualityKey: Quality.FINE,
    key: "dark elf candle, claw base",
  },
  "dark elf cauldron, banded": {
    name: "Dark Elf Cauldron, Banded",
    qualityKey: Quality.SUPERIOR,
    key: "dark elf cauldron, banded",
  },
  "dark elf lantern, oil": {
    name: "Dark Elf Lantern, Oil",
    qualityKey: Quality.FINE,
    key: "dark elf lantern, oil",
  },
  "dres bowl, empty": {
    name: "Dres Bowl, Empty",
    qualityKey: Quality.SUPERIOR,
    key: "dres bowl, empty",
  },
  "dres candles, meditation": {
    name: "Dres Candles, Meditation",
    qualityKey: Quality.SUPERIOR,
    key: "dres candles, meditation",
  },
  "dres lantern, stationary": {
    name: "Dres Lantern, Stationary",
    qualityKey: Quality.FINE,
    key: "dres lantern, stationary",
  },
  "hagraven cauldron, ritual": {
    name: "Hagraven Cauldron, Ritual",
    qualityKey: Quality.SUPERIOR,
    key: "hagraven cauldron, ritual",
  },
  "indoril streetlight, full stone": {
    name: "Indoril Streetlight, Full Stone",
    qualityKey: Quality.FINE,
    key: "indoril streetlight, full stone",
  },
  "indoril streetlight, stone": {
    name: "Indoril Streetlight, Stone",
    qualityKey: Quality.FINE,
    key: "indoril streetlight, stone",
  },
  "khajiit carpet, crescent moons": {
    name: "Khajiit Carpet, Crescent Moons",
    qualityKey: Quality.FINE,
    key: "khajiit carpet, crescent moons",
  },
  "lava foot soup-and-saltrice": {
    name: "Lava Foot Soup-and-Saltrice",
    qualityKey: Quality.SUPERIOR,
    key: "lava foot soup-and-saltrice",
  },
  "nord candleholder, cup": {
    name: "Nord Candleholder, Cup",
    qualityKey: Quality.FINE,
    key: "nord candleholder, cup",
  },
  "orcish banner, worn": {
    name: "Orcish Banner, Worn",
    qualityKey: Quality.FINE,
    key: "orcish banner, worn",
  },
  "orcish brazier, smoldering": {
    name: "Orcish Brazier, Smoldering",
    qualityKey: Quality.FINE,
    key: "orcish brazier, smoldering",
  },
  "orcish chandelier, practical": {
    name: "Orcish Chandelier, Practical",
    qualityKey: Quality.SUPERIOR,
    key: "orcish chandelier, practical",
  },
  "orcish lantern, hooded": {
    name: "Orcish Lantern, Hooded",
    qualityKey: Quality.FINE,
    key: "orcish lantern, hooded",
  },
  "orcish vessel, sealed ceramic": {
    name: "Orcish Vessel, Sealed Ceramic",
    qualityKey: Quality.SUPERIOR,
    key: "orcish vessel, sealed ceramic",
  },
  "redguard armchair, cushioned": {
    name: "Redguard Armchair, Cushioned",
    qualityKey: Quality.SUPERIOR,
    key: "redguard armchair, cushioned",
  },
  "redguard armchair, starry": {
    name: "Redguard Armchair, Starry",
    qualityKey: Quality.EPIC,
    key: "redguard armchair, starry",
  },
  "redguard bar, long cabinet": {
    name: "Redguard Bar, Long Cabinet",
    qualityKey: Quality.FINE,
    key: "redguard bar, long cabinet",
  },
  "redguard bench, padded": {
    name: "Redguard Bench, Padded",
    qualityKey: Quality.EPIC,
    key: "redguard bench, padded",
  },
  "redguard bench, slatted": {
    name: "Redguard Bench, Slatted",
    qualityKey: Quality.FINE,
    key: "redguard bench, slatted",
  },
  "redguard bookcase, full": {
    name: "Redguard Bookcase, Full",
    qualityKey: Quality.EPIC,
    key: "redguard bookcase, full",
  },
  "redguard bookcase, piled": {
    name: "Redguard Bookcase, Piled",
    qualityKey: Quality.EPIC,
    key: "redguard bookcase, piled",
  },
  "redguard candlestick, practical": {
    name: "Redguard Candlestick, Practical",
    qualityKey: Quality.FINE,
    key: "redguard candlestick, practical",
  },
  "redguard carpet, dunes": {
    name: "Redguard Carpet, Dunes",
    qualityKey: Quality.SUPERIOR,
    key: "redguard carpet, dunes",
  },
  "redguard curtain, smoky": {
    name: "Redguard Curtain, Smoky",
    qualityKey: Quality.FINE,
    key: "redguard curtain, smoky",
  },
  "redguard mat, sunset": {
    name: "Redguard Mat, Sunset",
    qualityKey: Quality.SUPERIOR,
    key: "redguard mat, sunset",
  },
  "redguard pot, capped": {
    name: "Redguard Pot, Capped",
    qualityKey: Quality.FINE,
    key: "redguard pot, capped",
  },
  "redguard pot, sealed": {
    name: "Redguard Pot, Sealed",
    qualityKey: Quality.FINE,
    key: "redguard pot, sealed",
  },
  "redguard runner, sun": {
    name: "Redguard Runner, Sun",
    qualityKey: Quality.SUPERIOR,
    key: "redguard runner, sun",
  },
  "redguard streetlamp, single": {
    name: "Redguard Streetlamp, Single",
    qualityKey: Quality.FINE,
    key: "redguard streetlamp, single",
  },
  "redguard wagon, merchant": {
    name: "Redguard Wagon, Merchant",
    qualityKey: Quality.FINE,
    key: "redguard wagon, merchant",
  },
  "redoran spoon, wooden": {
    name: "Redoran Spoon, Wooden",
    qualityKey: Quality.SUPERIOR,
    key: "redoran spoon, wooden",
  },
  "rough bag, burlap": {
    name: "Rough Bag, Burlap",
    qualityKey: Quality.NORMAL,
    key: "rough bag, burlap",
  },
  "rough bedroll, basic": {
    name: "Rough Bedroll, Basic",
    qualityKey: Quality.NORMAL,
    key: "rough bedroll, basic",
  },
  "rough bowl, common": {
    name: "Rough Bowl, Common",
    qualityKey: Quality.NORMAL,
    key: "rough bowl, common",
  },
  "rough box, boarded": {
    name: "Rough Box, Boarded",
    qualityKey: Quality.NORMAL,
    key: "rough box, boarded",
  },
  "rough container, cargo": {
    name: "Rough Container, Cargo",
    qualityKey: Quality.NORMAL,
    key: "rough container, cargo",
  },
  "rough crate, bolted": {
    name: "Rough Crate, Bolted",
    qualityKey: Quality.NORMAL,
    key: "rough crate, bolted",
  },
  "rough crate, reinforced": {
    name: "Rough Crate, Reinforced",
    qualityKey: Quality.NORMAL,
    key: "rough crate, reinforced",
  },
  "rough cup, empty": {
    name: "Rough Cup, Empty",
    qualityKey: Quality.NORMAL,
    key: "rough cup, empty",
  },
  "rough hatchet, practical": {
    name: "Rough Hatchet, Practical",
    qualityKey: Quality.NORMAL,
    key: "rough hatchet, practical",
  },
  "rough knife, butcher": {
    name: "Rough Knife, Butcher",
    qualityKey: Quality.NORMAL,
    key: "rough knife, butcher",
  },
  "rough platform, stage": {
    name: "Rough Platform, Stage",
    qualityKey: Quality.NORMAL,
    key: "rough platform, stage",
  },
  "rough stretcher, military": {
    name: "Rough Stretcher, Military",
    qualityKey: Quality.NORMAL,
    key: "rough stretcher, military",
  },
  "witchmother's potent brew": {
    name: "Witchmother's Potent Brew",
    qualityKey: Quality.EPIC,
    key: "witchmother's potent brew",
  },
  "wood elf bar, short": {
    name: "Wood Elf Bar, Short",
    qualityKey: Quality.FINE,
    key: "wood elf bar, short",
  },
  "wood elf bone chimes": {
    name: "Wood Elf Bone Chimes",
    qualityKey: Quality.EPIC,
    key: "wood elf bone chimes",
  },
  "wood elf divider, relaxed": {
    name: "Wood Elf Divider, Relaxed",
    qualityKey: Quality.SUPERIOR,
    key: "wood elf divider, relaxed",
  },
  "wood elf pitcher, painted": {
    name: "Wood Elf Pitcher, Painted",
    qualityKey: Quality.SUPERIOR,
    key: "wood elf pitcher, painted",
  },

  // ///////////////////////////////////////////////////////////////////////////
};

Product.keys = () => Object.keys(Product.properties);

Product.values = () => Object.values(Product.properties);

// Add URLs.
const URL_PREFIX = "https://eso.mmo-fashion.com/";
const forEachFunction = (product) => {
  let { url } = product;

  if (R.isNil(url)) {
    const { name } = product;
    const suffix = name.replace(/[,']/g, "").replace(/ /g, "-");
    url = URL_PREFIX + suffix;
    Product.properties[product.key] = R.assoc("url", url, product);
  }
};
R.forEach(forEachFunction, Product.values());

Object.freeze(Product);

export default Product;
