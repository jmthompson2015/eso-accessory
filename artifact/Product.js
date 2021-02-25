import ProductType from "./ProductType.js";
import Quality from "./Quality.js";
import URLGenerator from "./URLGenerator.js";

const Product = {
  ALINOR_AMPHORA_DELICATE: "alinor amphora, delicate",
  ALINOR_AMPHORA_EMBOSSED: "alinor amphora, embossed",
  ALINOR_AMPHORA_PORTRAIT: "alinor amphora, portrait",
  ALINOR_AMPHORA_SLENDER: "alinor amphora, slender",
  ALINOR_BOWL_MILLET: "alinor bowl, millet",
  ALINOR_MEAL_INDIVIDUAL: "alinor meal, individual",
  ALINOR_POT_LIMESTONE: "alinor pot, limestone",
  ALINOR_SCONCE_CRENELLATED: "alinor sconce, crenellated",
  ARGONIAN_BASKETS_DOUBLE: "argonian baskets, double",
  ARGONIAN_COUNTER_LONG: "argonian counter, long",
  ARGONIAN_MAT_REED: "argonian mat, reed",
  ARGONIAN_MUG_TOOTH: "argonian mug, tooth",
  ARGONIAN_PAN_FRYING: "argonian pan, frying",
  ARGONIAN_TARP_WOVEN: "argonian tarp, woven",
  ARGONIAN_TOTEM_OF_SKULLS: "argonian totem of skulls",
  ASHLANDER_PLATTER_CERAMIC: "ashlander platter, ceramic",
  BRETON_AMPHORA_CERAMIC: "breton amphora, ceramic",
  BRETON_AMPHORA_GLAZED: "breton amphora, glazed",
  BRETON_BED_BUNK: "breton bed, bunk",
  BRETON_CARPET_GREEN: "breton carpet, green",
  BRETON_CHAIR_SLATTED: "breton chair, slatted",
  BRETON_DESK: "breton desk",
  BRETON_DESK_SCHOLARS: "breton desk, scholar's",
  BRETON_NIGHTSTAND_OPEN: "breton nightstand, open",
  BRETON_SCONCE_TORCH: "breton sconce, torch",
  BRETON_SHELF_LONG: "breton shelf, long",
  BRETON_SHELVES_DOUBLE: "breton shelves, double",
  BRETON_STREET_POST_STONE: "breton street post, stone",
  BRETON_STREETLIGHT_PAIRED: "breton streetlight, paired",
  BRETON_TABLE_DINING: "breton table, dining",
  BRETON_TABLE_KITCHEN: "breton table, kitchen",
  BRETON_VASE_CERAMIC: "breton vase, ceramic",
  BRETON_VASE_DELICATE: "breton vase, delicate",
  BRETON_VASE_GLAZED: "breton vase, glazed",
  COMMON_BARREL_SEALED: "common barrel, sealed",
  COMMON_BASKET_OPEN: "common basket, open",
  COMMON_BASKET_TALL: "common basket, tall",
  COMMON_BOWL_OF_SOUP_DISPLAY: "common bowl of soup, display",
  COMMON_BOWL_OF_STEW_DISPLAY: "common bowl of stew, display",
  COMMON_BUCKET_ROPE: "common bucket, rope",
  COMMON_CANDLE_LASTING: "common candle, lasting",
  COMMON_CANDLE_SET: "common candle, set",
  COMMON_CARGO_COVERED: "common cargo, covered",
  COMMON_CARGO_SEALED: "common cargo, sealed",
  COMMON_PLATTER_SERVING: "common platter, serving",
  COMMON_POT_COOKING: "common pot, cooking",
  COMMON_TABLE_SLANTED: "common table, slanted",
  COMMON_WASHTUB_EMPTY: "common washtub, empty",
  DARK_ELF_CANDLE_CLAW_BASE: "dark elf candle, claw base",
  DARK_ELF_CARPET_PATTERNED: "dark elf carpet, patterned",
  DARK_ELF_CART_MERCHANT: "dark elf cart, merchant",
  DARK_ELF_CAULDRON_BANDED: "dark elf cauldron, banded",
  DARK_ELF_LANTERN_OIL: "dark elf lantern, oil",
  DARK_ELF_RUG_STRIATED: "dark elf rug, striated",
  DARK_ELF_TABLE_FORMAL: "dark elf table, formal",
  DRES_BOWL_DINNER: "dres bowl, dinner",
  DRES_BOWL_EMPTY: "dres bowl, empty",
  DRES_CANDLES_MEDITATION: "dres candles, meditation",
  DRES_CARPET_CHAINS: "dres carpet, chains",
  DRES_CUP_EMPTY_MAZTE: "dres cup, empty mazte",
  DRES_CUP_GREEF: "dres cup, greef",
  DRES_LANTERN_STATIONARY: "dres lantern, stationary",
  DRES_POT_SAUCE: "dres pot, sauce",
  DWARVEN_AMPHORA_ORNATE_POLISHED: "dwarven amphora, ornate polished",
  DWARVEN_AMPHORA_SEALED: "dwarven amphora, sealed",
  DWARVEN_CANNISTER_SEALED: "dwarven cannister, sealed",
  DWARVEN_VASE_FORGED: "dwarven vase, forged",
  DWARVEN_VESSEL_SEALED: "dwarven vessel, sealed",
  ELSWEYR_CARPET_GOLD_EMERALD: "elsweyr carpet, gold-emerald",
  ELSWEYR_CARPET_GOLD_RUBY: "elsweyr carpet, gold-ruby",
  ELSWEYR_CUP_OF_RICE_GILDED: "elsweyr cup of rice, gilded",
  ELSWEYR_POT_ORNATE: "elsweyr pot, ornate",
  ELSWEYR_POT_WAVES: "elsweyr pot, waves",
  ELSWEYR_VESSEL_UMBER_EMBELLISHED: "elsweyr vessel, umber embellished",
  ESSENCE_OF_HEALTH: "essence of health",
  ESSENCE_OF_SPELL_CRITICAL: "essence of spell critical",
  ESSENCE_OF_SPELL_POWER: "essence of spell power",
  ESSENCE_OF_WEAPON_CRIT: "essence of weapon crit",
  ESSENCE_OF_WEAPON_POWER: "essence of weapon power",
  FOOTSTOOL_BLOCK: "footstool, block",
  GRAPES_WAX: "grapes, wax",
  HAGRAVEN_CAULDRON_RITUAL: "hagraven cauldron, ritual",
  HIGH_ELF_BED_BUNK: "high elf bed, bunk",
  HIGH_ELF_BED_SINGLE: "high elf bed, single",
  HIGH_ELF_CANDLEHOLDER_STURDY: "high elf candleholder, sturdy",
  HIGH_ELF_PLATE_DINNER: "high elf plate, dinner",
  HIGH_ELF_VASE_GILDED: "high elf vase, gilded",
  HIGH_ELF_VASE_WINGED: "high elf vase, winged",
  HLAALU_AMPHORA_SEALED_ORICHALCUM: "hlaalu amphora, sealed orichalcum",
  HLAALU_BED_SINGLE: "hlaalu bed, single",
  HLAALU_HANGER_MOUNTED: "hlaalu hanger, mounted",
  HLAALU_RACK_BARREL: "hlaalu rack, barrel",
  HLAALU_STOOL_POLISHED: "hlaalu stool, polished",
  HLAALU_VASE_GILDED: "hlaalu vase, gilded",
  INDORIL_SHELF_BLOCK: "indoril shelf, block",
  INDORIL_STREETLIGHT_FULL_STONE: "indoril streetlight, full stone",
  INDORIL_STREETLIGHT_STONE: "indoril streetlight, stone",
  KHAJIIT_BED_FUR: "khajiit bed, fur",
  KHAJIIT_BEDDING_PADDED: "khajiit bedding, padded",
  KHAJIIT_CARPET_CRESCENT_MOONS: "khajiit carpet, crescent moons",
  KHAJIIT_CARPET_SUN: "khajiit carpet, sun",
  KHAJIIT_END_TABLE_FADED: "khajiit end table, faded",
  KHAJIIT_FLASK_AMBER: "khajiit flask, amber",
  KHAJIIT_FRAME_ARCHED: "khajiit frame, arched",
  KHAJIIT_RUG_MOONS: "khajiit rug, moons",
  KHAJIIT_RUG_SUN: "khajiit rug, sun",
  KHAJIIT_VESSEL_AMBER: "khajiit vessel, amber",
  LAVA_FOOT_SOUP_AND_SALTRICE: "lava foot soup-and-saltrice",
  NORD_AMPHORA_GLAZED: "nord amphora, glazed",
  NORD_CANDLEHOLDER_CUP: "nord candleholder, cup",
  NORD_DRESSER_ROUGH: "nord dresser, rough",
  NORD_LANTERN_CAGE: "nord lantern, cage",
  NORD_POT_STEW: "nord pot, stew",
  NORD_SHELF_WALL: "nord shelf, wall",
  NORD_VASE_BENT: "nord vase, bent",
  ORCISH_BANNER_WORN: "orcish banner, worn",
  ORCISH_BEDDING_FUR: "orcish bedding, fur",
  ORCISH_BEDDING_STONE: "orcish bedding, stone",
  ORCISH_BRAZIER_SMOLDERING: "orcish brazier, smoldering",
  ORCISH_CARPET_FRINGED: "orcish carpet, fringed",
  ORCISH_CHANDELIER_PRACTICAL: "orcish chandelier, practical",
  ORCISH_COUNTER_BLOCK: "orcish counter, block",
  ORCISH_COUNTER_ISLAND_STALL: "orcish counter, island stall",
  ORCISH_LANTERN_HOODED: "orcish lantern, hooded",
  ORCISH_MUG_RUGGED: "orcish mug, rugged",
  ORCISH_PLATFORM_BLOCK: "orcish platform, block",
  ORCISH_SACK_FLOUR: "orcish sack, flour",
  ORCISH_SHELF_LONG: "orcish shelf, long",
  ORCISH_TABLE_BLOCK: "orcish table, block",
  ORCISH_TRUNK_BRACED: "orcish trunk, braced",
  ORCISH_VESSEL_SEALED: "orcish vessel, sealed",
  ORCISH_VESSEL_SEALED_CERAMIC: "orcish vessel, sealed ceramic",
  RADISH_WAX: "radish, wax",
  REDGUARD_AMPHORA_POLISHED: "redguard amphora, polished",
  REDGUARD_ARMCHAIR_CUSHIONED: "redguard armchair, cushioned",
  REDGUARD_ARMCHAIR_STARRY: "redguard armchair, starry",
  REDGUARD_BAR_LONG_CABINET: "redguard bar, long cabinet",
  REDGUARD_BED_FULL_ARCHED: "redguard bed, full arched",
  REDGUARD_BED_FULL_LATTICE: "redguard bed, full lattice",
  REDGUARD_BED_WIDE_GRAND: "redguard bed, wide grand",
  REDGUARD_BENCH_PADDED: "redguard bench, padded",
  REDGUARD_BENCH_SLATTED: "redguard bench, slatted",
  REDGUARD_BOOKCASE_FULL: "redguard bookcase, full",
  REDGUARD_BOOKCASE_PILED: "redguard bookcase, piled",
  REDGUARD_CANDLESTICK_PRACTICAL: "redguard candlestick, practical",
  REDGUARD_CARPET_DUNES: "redguard carpet, dunes",
  REDGUARD_COUCH_PADDED: "redguard couch, padded",
  REDGUARD_COUCH_SLATTED: "redguard couch, slatted",
  REDGUARD_CURTAIN_DESERT_ROSE: "redguard curtain, desert rose",
  REDGUARD_CURTAIN_SMOKY: "redguard curtain, smoky",
  REDGUARD_DESK_BOLTED: "redguard desk, bolted",
  REDGUARD_END_TABLE_INLAID: "redguard end table, inlaid",
  REDGUARD_MAT_DESERT_SUN: "redguard mat, desert sun",
  REDGUARD_MAT_MEDITATION: "redguard mat, meditation",
  REDGUARD_MAT_SUNRISE: "redguard mat, sunrise",
  REDGUARD_MAT_SUNSET: "redguard mat, sunset",
  REDGUARD_POT_CAPPED: "redguard pot, capped",
  REDGUARD_POT_SEALED: "redguard pot, sealed",
  REDGUARD_RUNNER_SUN: "redguard runner, sun",
  REDGUARD_SHELF_BOLTED: "redguard shelf, bolted",
  REDGUARD_STREETLAMP_SINGLE: "redguard streetlamp, single",
  REDGUARD_TABLE_FORMAL: "redguard table, formal",
  REDGUARD_TABLE_GAME: "redguard table, game",
  REDGUARD_TABLE_GRAND_INLAID: "redguard table, grand inlaid",
  REDGUARD_TAPESTRY_LATTICE: "redguard tapestry, lattice",
  REDGUARD_VASE_BAROQUE: "redguard vase, baroque",
  REDGUARD_VASE_LACQUERED: "redguard vase, lacquered",
  REDGUARD_WAGON_MERCHANT: "redguard wagon, merchant",
  REDORAN_CARPET_VOLCANIC_SANDS: "redoran carpet, volcanic sands",
  REDORAN_AMPHORA_SEALED_MARBLE: "redoran amphora, sealed marble",
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
  SCRIMSHAW_ANCIENT_VESSEL: "scrimshaw, ancient vessel",
  SIMPLE_BLUE_BANNER: "simple blue banner",
  SOLITUDE_VASE_LARGE_SEALED: "solitude vase, large sealed",
  STOOL_CARVED: "stool, carved",
  SUGAR_PUMPKIN_WAX: "sugar pumpkin, wax",
  WINTER_SQUASH_DISPLAY: "winter squash, display",
  WITCHMOTHERS_POTENT_BREW: "witchmother's potent brew",
  WOOD_ELF_BAR_SHORT: "wood elf bar, short",
  WOOD_ELF_BONE_CHIMES: "wood elf bone chimes",
  WOOD_ELF_COUNTER_LONG_LEATHER: "wood elf counter, long leather",
  WOOD_ELF_CUP_CERAMIC: "wood elf cup, ceramic",
  WOOD_ELF_DIVIDER_NARROW: "wood elf divider, narrow",
  WOOD_ELF_DIVIDER_RELAXED: "wood elf divider, relaxed",
  WOOD_ELF_DIVIDER_STRETCHED: "wood elf divider, stretched",
  WOOD_ELF_GRINDING_STONE: "wood elf grinding stone",
  WOOD_ELF_PITCHER_PAINTED: "wood elf pitcher, painted",
  WOOD_ELF_STOOL_LEATHER: "wood elf stool, leather",
  WOOD_ELF_TABLE_LEATHER: "wood elf table, leather",
  WOOD_ELF_VASE_CHIPPED: "wood elf vase, chipped",
  WOOD_ELF_VASE_PAINTED: "wood elf vase, painted",
  WOOD_ELF_VESSEL_TIERED_CERAMIC: "wood elf vessel, tiered ceramic",
  WOOD_ELF_VESSEL_TIERED_PAINTED: "wood elf vessel, tiered painted",
  // ///////////////////////////////////////////////////////////////////////////
};

Product.properties = {
  "alinor amphora, delicate": {
    name: "Alinor Amphora, Delicate",
    productTypeKey: ProductType.FURNISHING,
    qualityKey: Quality.FINE,
    key: "alinor amphora, delicate",
  },
  "alinor amphora, embossed": {
    name: "Alinor Amphora, Embossed",
    qualityKey: Quality.SUPERIOR,
    key: "alinor amphora, embossed",
  },
  "alinor amphora, portrait": {
    name: "Alinor Amphora, Portrait",
    qualityKey: Quality.SUPERIOR,
    key: "alinor amphora, portrait",
  },
  "alinor amphora, slender": {
    name: "Alinor Amphora, Slender",
    qualityKey: Quality.EPIC,
    key: "alinor amphora, slender",
  },
  "alinor bowl, millet": {
    name: "Alinor Bowl, Millet",
    qualityKey: Quality.FINE,
    key: "alinor bowl, millet",
  },
  "alinor meal, individual": {
    name: "Alinor Meal, Individual",
    qualityKey: Quality.FINE,
    key: "alinor meal, individual",
  },
  "alinor pot, limestone": {
    name: "Alinor Pot, Limestone",
    qualityKey: Quality.FINE,
    key: "alinor pot, limestone",
  },
  "alinor sconce, crenellated": {
    name: "Alinor Sconce, Crenellated",
    qualityKey: Quality.SUPERIOR,
    key: "alinor sconce, crenellated",
  },
  "argonian baskets, double": {
    name: "Argonian Baskets, Double",
    qualityKey: Quality.FINE,
    key: "argonian baskets, double",
  },
  "argonian counter, long": {
    name: "Argonian Counter, Long",
    qualityKey: Quality.FINE,
    key: "argonian counter, long",
  },
  "argonian mat, reed": {
    name: "Argonian Mat, Reed",
    qualityKey: Quality.FINE,
    key: "argonian mat, reed",
  },
  "argonian mug, tooth": {
    name: "Argonian Mug, Tooth",
    qualityKey: Quality.FINE,
    key: "argonian mug, tooth",
  },
  "argonian pan, frying": {
    name: "Argonian Pan, Frying",
    qualityKey: Quality.FINE,
    key: "argonian pan, frying",
  },
  "argonian tarp, woven": {
    name: "Argonian Tarp, Woven",
    qualityKey: Quality.FINE,
    key: "argonian tarp, woven",
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
  "breton amphora, glazed": {
    name: "Breton Amphora, Glazed",
    qualityKey: Quality.SUPERIOR,
    key: "breton amphora, glazed",
  },
  "breton bed, bunk": {
    name: "Breton Bed, Bunk",
    qualityKey: Quality.FINE,
    key: "breton bed, bunk",
  },
  "breton carpet, green": {
    name: "Breton Carpet, Green",
    iconUrl:
      "https://images.uesp.net/b/b8/ON-item-furnishing-Breton_Carpet%2C_Green.jpg",
    qualityKey: Quality.FINE,
    key: "breton carpet, green",
  },
  "breton chair, slatted": {
    name: "Breton Chair, Slatted",
    qualityKey: Quality.FINE,
    key: "breton chair, slatted",
  },
  "breton desk": {
    name: "Breton Desk",
    qualityKey: Quality.FINE,
    key: "breton desk",
  },
  "breton desk, scholar's": {
    name: "Breton Desk, Scholar's",
    iconUrl:
      "https://images.uesp.net/c/c3/ON-item-furnishing-Breton_Desk%2C_Scholar%27s.jpg",
    qualityKey: Quality.EPIC,
    key: "breton desk, scholar's",
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
  "breton shelf, long": {
    name: "Breton Shelf, Long",
    qualityKey: Quality.FINE,
    key: "breton shelf, long",
  },
  "breton shelves, double": {
    name: "Breton Shelves, Double",
    qualityKey: Quality.FINE,
    key: "breton shelves, double",
  },
  "breton street post, stone": {
    name: "Breton Street Post, Stone",
    qualityKey: Quality.FINE,
    key: "breton street post, stone",
  },
  "breton streetlight, paired": {
    name: "Breton Streetlight, Paired",
    qualityKey: Quality.SUPERIOR,
    key: "breton streetlight, paired",
  },
  "breton table, dining": {
    name: "Breton Table, Dining",
    qualityKey: Quality.FINE,
    key: "breton table, dining",
  },
  "breton table, kitchen": {
    name: "Breton Table, Kitchen",
    qualityKey: Quality.FINE,
    key: "breton table, kitchen",
  },
  "breton vase, ceramic": {
    name: "Breton Vase, Ceramic",
    qualityKey: Quality.FINE,
    key: "breton vase, ceramic",
  },
  "breton vase, delicate": {
    name: "Breton Vase, Delicate",
    qualityKey: Quality.EPIC,
    key: "breton vase, delicate",
  },
  "breton vase, glazed": {
    name: "Breton Vase, Glazed",
    qualityKey: Quality.SUPERIOR,
    key: "breton vase, glazed",
  },
  "common barrel, sealed": {
    name: "Common Barrel, Sealed",
    qualityKey: Quality.FINE,
    key: "common barrel, sealed",
  },
  "common basket, open": {
    name: "Common Basket, Open",
    qualityKey: Quality.FINE,
    key: "common basket, open",
  },
  "common basket, tall": {
    name: "Common Basket, Tall",
    qualityKey: Quality.FINE,
    key: "common basket, tall",
  },
  "common bowl of soup, display": {
    name: "Common Bowl of Soup, Display",
    iconUrl:
      "https://images.uesp.net/a/ab/ON-item-furnishing-Common_Bowl_of_Soup%2C_Display.jpg",
    qualityKey: Quality.FINE,
    key: "common bowl of soup, display",
  },
  "common bowl of stew, display": {
    name: "Common Bowl of Stew, Display",
    qualityKey: Quality.FINE,
    key: "common bowl of stew, display",
  },
  "common bucket, rope": {
    name: "Common Bucket, Rope",
    qualityKey: Quality.FINE,
    key: "common bucket, rope",
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
  "common cargo, covered": {
    name: "Common Cargo, Covered",
    qualityKey: Quality.FINE,
    key: "common cargo, covered",
  },
  "common cargo, sealed": {
    name: "Common Cargo, Sealed",
    qualityKey: Quality.FINE,
    key: "common cargo, sealed",
  },
  "common platter, serving": {
    name: "Common Platter, Serving",
    qualityKey: Quality.FINE,
    key: "common platter, serving",
  },
  "common pot, cooking": {
    name: "Common Pot, Cooking",
    qualityKey: Quality.FINE,
    key: "common pot, cooking",
  },
  "common table, slanted": {
    name: "Common Table, Slanted",
    qualityKey: Quality.FINE,
    key: "common table, slanted",
  },
  "common washtub, empty": {
    name: "Common Washtub, Empty",
    qualityKey: Quality.FINE,
    key: "common washtub, empty",
  },
  "dark elf candle, claw base": {
    name: "Dark Elf Candle, Claw Base",
    qualityKey: Quality.FINE,
    key: "dark elf candle, claw base",
  },
  "dark elf carpet, patterned": {
    name: "Dark Elf Carpet, Patterned",
    qualityKey: Quality.FINE,
    key: "dark elf carpet, patterned",
  },
  "dark elf cart, merchant": {
    name: "Dark Elf Cart, Merchant",
    qualityKey: Quality.FINE,
    key: "dark elf cart, merchant",
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
  "dark elf rug, striated": {
    name: "Dark Elf Rug, Striated",
    qualityKey: Quality.EPIC,
    key: "dark elf rug, striated",
  },
  "dark elf table, formal": {
    name: "Dark Elf Table, Formal",
    qualityKey: Quality.FINE,
    key: "dark elf table, formal",
  },
  "dres bowl, dinner": {
    name: "Dres Bowl, Dinner",
    qualityKey: Quality.FINE,
    key: "dres bowl, dinner",
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
  "dres carpet, chains": {
    name: "Dres Carpet, Chains",
    qualityKey: Quality.FINE,
    key: "dres carpet, chains",
  },
  "dres cup, empty mazte": {
    name: "Dres Cup, Empty Mazte",
    iconUrl:
      "https://images.uesp.net/e/ed/ON-item-furnishing-Dres_Cup%2C_Empty_Mazte.jpg",
    qualityKey: Quality.FINE,
    key: "dres cup, empty mazte",
  },
  "dres cup, greef": {
    name: "Dres Cup, Greef",
    iconUrl:
      "https://images.uesp.net/6/60/ON-item-furnishing-Dres_Cup%2C_Greef.jpg",
    qualityKey: Quality.SUPERIOR,
    key: "dres cup, greef",
  },
  "dres lantern, stationary": {
    name: "Dres Lantern, Stationary",
    qualityKey: Quality.FINE,
    key: "dres lantern, stationary",
  },
  "dres pot, sauce": {
    name: "Dres Pot, Sauce",
    qualityKey: Quality.FINE,
    key: "dres pot, sauce",
  },
  "dwarven amphora, ornate polished": {
    name: "Dwarven Amphora, Ornate Polished",
    iconUrl:
      "https://i2.wp.com/eso.mmo-fashion.com/wp-content/uploads/sites/2/2020/10/Dwarven-Amphora-Ornate-Polished-1.jpg",
    qualityKey: Quality.EPIC,
    key: "dwarven amphora, ornate polished",
  },
  "dwarven amphora, sealed": {
    name: "Dwarven Amphora, Sealed",
    qualityKey: Quality.SUPERIOR,
    key: "dwarven amphora, sealed",
  },
  "dwarven cannister, sealed": {
    name: "Dwarven Cannister, Sealed",
    qualityKey: Quality.FINE,
    key: "dwarven cannister, sealed",
  },
  "dwarven vase, forged": {
    name: "Dwarven Vase, Forged",
    qualityKey: Quality.SUPERIOR,
    key: "dwarven vase, forged",
  },
  "dwarven vessel, sealed": {
    name: "Dwarven Vessel, Sealed",
    qualityKey: Quality.SUPERIOR,
    key: "dwarven vessel, sealed",
  },
  "elsweyr carpet, gold-emerald": {
    name: "Elsweyr Carpet, Gold-Emerald",
    iconUrl:
      "https://images.uesp.net/9/97/ON-item-furnishing-Elsweyr_Carpet%2C_Gold-Emerald.jpg",
    qualityKey: Quality.FINE,
    key: "elsweyr carpet, gold-emerald",
  },
  "elsweyr carpet, gold-ruby": {
    name: "Elsweyr Carpet, Gold-Ruby",
    iconUrl:
      "https://images.uesp.net/4/4b/ON-item-furnishing-Elsweyr_Carpet%2C_Gold-Ruby.jpg",
    qualityKey: Quality.FINE,
    key: "elsweyr carpet, gold-ruby",
  },
  "elsweyr cup of rice, gilded": {
    name: "Elsweyr Cup of Rice, Gilded",
    iconUrl:
      "https://images.uesp.net/4/4c/ON-item-furnishing-Elsweyr_Cup_of_Rice%2C_Gilded.jpg",
    qualityKey: Quality.SUPERIOR,
    key: "elsweyr cup of rice, gilded",
  },
  "elsweyr pot, ornate": {
    name: "Elsweyr Pot, Ornate",
    iconUrl:
      "https://images.uesp.net/c/cb/ON-item-furnishing-Elsweyr_Pot%2C_Ornate.jpg",
    qualityKey: Quality.FINE,
    key: "elsweyr pot, ornate",
  },
  "elsweyr pot, waves": {
    name: "Elsweyr Pot, Waves",
    iconUrl:
      "https://images.uesp.net/d/de/ON-item-furnishing-Elsweyr_Pot%2C_Waves.jpg",
    qualityKey: Quality.FINE,
    key: "elsweyr pot, waves",
  },
  "elsweyr vessel, umber embellished": {
    name: "Elsweyr Vessel, Umber Embellished",
    iconUrl:
      "https://images.uesp.net/f/f2/ON-item-furnishing-Elsweyr_Vessel%2C_Umber_Embellished.jpg",
    qualityKey: Quality.SUPERIOR,
    key: "elsweyr vessel, umber embellished",
  },
  "essence of health": {
    name: "Essence of Health",
    iconUrl:
      "https://images.uesp.net/5/5f/ON-icon-potion-Restore_Health_05.png",
    productTypeKey: ProductType.POTION,
    qualityKey: Quality.EPIC,
    url:
      "http://benevolentbowd.ca/games/esotu/alchemy-writs-101-essence-of-health/",
    key: "essence of health",
  },
  "essence of spell critical": {
    name: "Essence of Spell Critical",
    iconUrl: "https://images.uesp.net/e/ee/ON-icon-potion-Spell_Crit_05.png",
    productTypeKey: ProductType.POTION,
    qualityKey: Quality.EPIC,
    url:
      "http://benevolentbowd.ca/games/esotu/esotu-alchemy-potions-with-three-ingredients/#spell-critical",
    key: "essence of spell critical",
  },
  "essence of spell power": {
    name: "Essence of Spell Power",
    iconUrl: "https://images.uesp.net/9/9a/ON-icon-potion-Spell_Power_05.png",
    productTypeKey: ProductType.POTION,
    qualityKey: Quality.EPIC,
    url:
      "http://benevolentbowd.ca/games/esotu/esotu-alchemy-potions-with-three-ingredients/#spell-power",
    key: "essence of spell power",
  },
  "essence of weapon crit": {
    name: "Essence of Weapon Crit",
    iconUrl: "https://images.uesp.net/0/03/ON-icon-potion-Weapon_Crit_05.png",
    productTypeKey: ProductType.POTION,
    qualityKey: Quality.EPIC,
    url:
      "http://benevolentbowd.ca/games/esotu/esotu-alchemy-potions-with-three-ingredients/#weapon-crit",
    key: "essence of weapon crit",
  },
  "essence of weapon power": {
    name: "Essence of Weapon Power",
    iconUrl: "https://images.uesp.net/4/44/ON-icon-potion-Weapon_Power_05.png",
    productTypeKey: ProductType.POTION,
    qualityKey: Quality.EPIC,
    url:
      "http://benevolentbowd.ca/games/esotu/esotu-alchemy-potions-with-three-ingredients/#weapon-power",
    key: "essence of weapon power",
  },
  "footstool, block": {
    name: "Footstool, Block",
    qualityKey: Quality.FINE,
    key: "footstool, block",
  },
  "grapes, wax": {
    name: "Grapes, Wax",
    iconUrl:
      "https://images.uesp.net/4/4a/ON-item-furnishing-Grapes%2C_Wax.jpg",
    qualityKey: Quality.FINE,
    key: "grapes, wax",
  },
  "hagraven cauldron, ritual": {
    name: "Hagraven Cauldron, Ritual",
    iconUrl:
      "https://images.uesp.net/1/14/ON-item-furnishing-Hagraven_Cauldron%2C_Ritual.jpg",
    qualityKey: Quality.SUPERIOR,
    key: "hagraven cauldron, ritual",
  },
  "high elf bed, bunk": {
    name: "High Elf Bed, Bunk",
    qualityKey: Quality.FINE,
    key: "high elf bed, bunk",
  },
  "high elf bed, single": {
    name: "High Elf Bed, Single",
    qualityKey: Quality.FINE,
    key: "high elf bed, single",
  },
  "high elf candleholder, sturdy": {
    name: "High Elf Candleholder, Sturdy",
    iconUrl:
      "https://images.uesp.net/9/9f/ON-item-furnishing-High_Elf_Candleholder%2C_Sturdy.jpg",
    qualityKey: Quality.FINE,
    key: "high elf candleholder, sturdy",
  },
  "high elf plate, dinner": {
    name: "High Elf Plate, Dinner",
    qualityKey: Quality.FINE,
    key: "high elf plate, dinner",
  },
  "high elf vase, gilded": {
    name: "High Elf Vase, Gilded",
    qualityKey: Quality.SUPERIOR,
    key: "high elf vase, gilded",
  },
  "high elf vase, winged": {
    name: "High Elf Vase, Winged",
    qualityKey: Quality.EPIC,
    key: "high elf vase, winged",
  },
  "hlaalu amphora, sealed orichalcum": {
    name: "Hlaalu Amphora, Sealed Orichalcum",
    qualityKey: Quality.EPIC,
    key: "hlaalu amphora, sealed orichalcum",
  },
  "hlaalu bed, single": {
    name: "Hlaalu Bed, Single",
    qualityKey: Quality.FINE,
    key: "hlaalu bed, single",
  },
  "hlaalu hanger, mounted": {
    name: "Hlaalu Hanger, Mounted",
    qualityKey: Quality.FINE,
    key: "hlaalu hanger, mounted",
  },
  "hlaalu rack, barrel": {
    name: "Hlaalu Rack, Barrel",
    qualityKey: Quality.FINE,
    key: "hlaalu rack, barrel",
  },
  "hlaalu stool, polished": {
    name: "Hlaalu Stool, Polished",
    qualityKey: Quality.FINE,
    key: "hlaalu stool, polished",
  },
  "hlaalu vase, gilded": {
    name: "Hlaalu Vase, Gilded",
    qualityKey: Quality.EPIC,
    key: "hlaalu vase, gilded",
  },
  "indoril shelf, block": {
    name: "Indoril Shelf, Block",
    qualityKey: Quality.FINE,
    key: "indoril shelf, block",
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
  "khajiit bed, fur": {
    name: "Khajiit Bed, Fur",
    qualityKey: Quality.FINE,
    key: "khajiit bed, fur",
  },
  "khajiit bedding, padded": {
    name: "Khajiit Bedding, Padded",
    qualityKey: Quality.FINE,
    key: "khajiit bedding, padded",
  },
  "khajiit carpet, crescent moons": {
    name: "Khajiit Carpet, Crescent Moons",
    qualityKey: Quality.FINE,
    key: "khajiit carpet, crescent moons",
  },
  "khajiit carpet, sun": {
    name: "Khajiit Carpet, Sun",
    qualityKey: Quality.SUPERIOR,
    key: "khajiit carpet, sun",
  },
  "khajiit end table, faded": {
    name: "Khajiit End Table, Faded",
    qualityKey: Quality.FINE,
    key: "khajiit end table, faded",
  },
  "khajiit flask, amber": {
    name: "Khajiit Flask, Amber",
    qualityKey: Quality.FINE,
    key: "khajiit flask, amber",
  },
  "khajiit frame, arched": {
    name: "Khajiit Frame, Arched",
    qualityKey: Quality.FINE,
    key: "khajiit frame, arched",
  },
  "khajiit rug, moons": {
    name: "Khajiit Rug, Moons",
    qualityKey: Quality.EPIC,
    key: "khajiit rug, moons",
  },
  "khajiit rug, sun": {
    name: "Khajiit Rug, Sun",
    qualityKey: Quality.EPIC,
    key: "khajiit rug, sun",
  },
  "khajiit vessel, amber": {
    name: "Khajiit Vessel, Amber",
    qualityKey: Quality.EPIC,
    key: "khajiit vessel, amber",
  },
  "lava foot soup-and-saltrice": {
    name: "Lava Foot Soup-and-Saltrice",
    iconUrl:
      "https://images.uesp.net/7/7b/ON-icon-food-Lava_Foot_Soup-And-Saltrice.png",
    productTypeKey: ProductType.PROVISION,
    qualityKey: Quality.SUPERIOR,
    key: "lava foot soup-and-saltrice",
  },
  "nord amphora, glazed": {
    name: "Nord Amphora, Glazed",
    qualityKey: Quality.SUPERIOR,
    key: "nord amphora, glazed",
  },
  "nord candleholder, cup": {
    name: "Nord Candleholder, Cup",
    qualityKey: Quality.FINE,
    key: "nord candleholder, cup",
  },
  "nord dresser, rough": {
    name: "Nord Dresser, Rough",
    qualityKey: Quality.FINE,
    key: "nord dresser, rough",
  },
  "nord lantern, cage": {
    name: "Nord Lantern, Cage",
    qualityKey: Quality.FINE,
    key: "nord lantern, cage",
  },
  "nord pot, stew": {
    name: "Nord Pot, Stew",
    qualityKey: Quality.FINE,
    key: "nord pot, stew",
  },
  "nord shelf, wall": {
    name: "Nord Shelf, Wall",
    qualityKey: Quality.FINE,
    key: "nord shelf, wall",
  },
  "nord vase, bent": {
    name: "Nord Vase, Bent",
    qualityKey: Quality.SUPERIOR,
    key: "nord vase, bent",
  },
  "orcish banner, worn": {
    name: "Orcish Banner, Worn",
    qualityKey: Quality.FINE,
    key: "orcish banner, worn",
  },
  "orcish bedding, fur": {
    name: "Orcish Bedding, Fur",
    qualityKey: Quality.FINE,
    key: "orcish bedding, fur",
  },
  "orcish bedding, stone": {
    name: "Orcish Bedding, Stone",
    qualityKey: Quality.FINE,
    key: "orcish bedding, stone",
  },
  "orcish brazier, smoldering": {
    name: "Orcish Brazier, Smoldering",
    qualityKey: Quality.FINE,
    key: "orcish brazier, smoldering",
  },
  "orcish carpet, fringed": {
    name: "Orcish Carpet, Fringed",
    qualityKey: Quality.FINE,
    key: "orcish carpet, fringed",
  },
  "orcish chandelier, practical": {
    name: "Orcish Chandelier, Practical",
    qualityKey: Quality.SUPERIOR,
    key: "orcish chandelier, practical",
  },
  "orcish counter, block": {
    name: "Orcish Counter, Block",
    qualityKey: Quality.FINE,
    key: "orcish counter, block",
  },
  "orcish counter, island stall": {
    name: "Orcish Counter, Island Stall",
    qualityKey: Quality.FINE,
    key: "orcish counter, island stall",
  },
  "orcish lantern, hooded": {
    name: "Orcish Lantern, Hooded",
    qualityKey: Quality.FINE,
    key: "orcish lantern, hooded",
  },
  "orcish mug, rugged": {
    name: "Orcish Mug, Rugged",
    qualityKey: Quality.FINE,
    key: "orcish mug, rugged",
  },
  "orcish platform, block": {
    name: "Orcish Platform, Block",
    qualityKey: Quality.FINE,
    key: "orcish platform, block",
  },
  "orcish sack, flour": {
    name: "Orcish Sack, Flour",
    qualityKey: Quality.SUPERIOR,
    key: "orcish sack, flour",
  },
  "orcish shelf, long": {
    name: "Orcish Shelf, Long",
    qualityKey: Quality.FINE,
    key: "orcish shelf, long",
  },
  "orcish table, block": {
    name: "Orcish Table, Block",
    qualityKey: Quality.FINE,
    key: "orcish table, block",
  },
  "orcish trunk, braced": {
    name: "Orcish Trunk, Braced",
    qualityKey: Quality.FINE,
    key: "orcish trunk, braced",
  },
  "orcish vessel, sealed": {
    name: "Orcish Vessel, Sealed",
    qualityKey: Quality.EPIC,
    key: "orcish vessel, sealed",
  },
  "orcish vessel, sealed ceramic": {
    name: "Orcish Vessel, Sealed Ceramic",
    qualityKey: Quality.SUPERIOR,
    key: "orcish vessel, sealed ceramic",
  },
  "radish, wax": {
    name: "Radish, Wax",
    iconUrl:
      "https://images.uesp.net/d/d9/ON-item-furnishing-Radish%2C_Wax.jpg",
    qualityKey: Quality.FINE,
    key: "radish, wax",
  },
  "redguard amphora, polished": {
    name: "Redguard Amphora, Polished",
    qualityKey: Quality.SUPERIOR,
    key: "redguard amphora, polished",
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
  "redguard bed, full arched": {
    name: "Redguard Bed, Full Arched",
    qualityKey: Quality.SUPERIOR,
    key: "redguard bed, full arched",
  },
  "redguard bed, full lattice": {
    name: "Redguard Bed, Full Lattice",
    qualityKey: Quality.EPIC,
    key: "redguard bed, full lattice",
  },
  "redguard bed, wide grand": {
    name: "Redguard Bed, Wide Grand",
    qualityKey: Quality.SUPERIOR,
    key: "redguard bed, wide grand",
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
  "redguard couch, padded": {
    name: "Redguard Couch, Padded",
    qualityKey: Quality.SUPERIOR,
    key: "redguard couch, padded",
  },
  "redguard couch, slatted": {
    name: "Redguard Couch, Slatted",
    qualityKey: Quality.EPIC,
    key: "redguard couch, slatted",
  },
  "redguard curtain, desert rose": {
    name: "Redguard Curtain, Desert Rose",
    qualityKey: Quality.FINE,
    key: "redguard curtain, desert rose",
  },
  "redguard curtain, smoky": {
    name: "Redguard Curtain, Smoky",
    qualityKey: Quality.FINE,
    key: "redguard curtain, smoky",
  },
  "redguard desk, bolted": {
    name: "Redguard Desk, Bolted",
    qualityKey: Quality.EPIC,
    key: "redguard desk, bolted",
  },
  "redguard end table, inlaid": {
    name: "Redguard End Table, Inlaid",
    qualityKey: Quality.SUPERIOR,
    key: "redguard end table, inlaid",
  },
  "redguard mat, desert sun": {
    name: "Redguard Mat, Desert Sun",
    qualityKey: Quality.EPIC,
    key: "redguard mat, desert sun",
  },
  "redguard mat, meditation": {
    name: "Redguard Mat, Meditation",
    qualityKey: Quality.EPIC,
    key: "redguard mat, meditation",
  },
  "redguard mat, sunrise": {
    name: "Redguard Mat, Sunrise",
    qualityKey: Quality.EPIC,
    key: "redguard mat, sunrise",
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
  "redguard shelf, bolted": {
    name: "Redguard Shelf, Bolted",
    qualityKey: Quality.EPIC,
    key: "redguard shelf, bolted",
  },
  "redguard streetlamp, single": {
    name: "Redguard Streetlamp, Single",
    qualityKey: Quality.FINE,
    key: "redguard streetlamp, single",
  },
  "redguard table, formal": {
    name: "Redguard Table, Formal",
    qualityKey: Quality.EPIC,
    key: "redguard table, formal",
  },
  "redguard table, game": {
    name: "Redguard Table, Game",
    qualityKey: Quality.EPIC,
    key: "redguard table, game",
  },
  "redguard table, grand inlaid": {
    name: "Redguard Table, Grand Inlaid",
    qualityKey: Quality.EPIC,
    key: "redguard table, grand inlaid",
  },
  "redguard tapestry, lattice": {
    name: "Redguard Tapestry, Lattice",
    qualityKey: Quality.SUPERIOR,
    key: "redguard tapestry, lattice",
  },
  "redguard vase, baroque": {
    name: "Redguard Vase, Baroque",
    qualityKey: Quality.EPIC,
    key: "redguard vase, baroque",
  },
  "redguard vase, lacquered": {
    name: "Redguard Vase, Lacquered",
    qualityKey: Quality.SUPERIOR,
    key: "redguard vase, lacquered",
  },
  "redguard wagon, merchant": {
    name: "Redguard Wagon, Merchant",
    qualityKey: Quality.FINE,
    key: "redguard wagon, merchant",
  },
  "redoran amphora, sealed marble": {
    name: "Redoran Amphora, Sealed Marble",
    qualityKey: Quality.EPIC,
    key: "redoran amphora, sealed marble",
  },
  "redoran carpet, volcanic sands": {
    name: "Redoran Carpet, Volcanic Sands",
    qualityKey: Quality.FINE,
    key: "redoran carpet, volcanic sands",
  },
  "redoran spoon, wooden": {
    name: "Redoran Spoon, Wooden",
    iconUrl:
      "https://images.uesp.net/c/cc/ON-item-furnishing-Redoran_Spoon%2C_Wooden.jpg",
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
  "scrimshaw, ancient vessel": {
    name: "Scrimshaw, Ancient Vessel",
    qualityKey: Quality.EPIC,
    key: "scrimshaw, ancient vessel",
  },
  "simple blue banner": {
    name: "Simple Blue Banner",
    qualityKey: Quality.FINE,
    key: "simple blue banner",
  },
  "solitude vase, large sealed": {
    name: "Solitude Vase, Large Sealed",
    iconUrl:
      "https://images.uesp.net/5/58/ON-item-furnishing-Solitude_Vase%2C_Large_Sealed.jpg",
    qualityKey: Quality.SUPERIOR,
    key: "solitude vase, large sealed",
  },
  "stool, carved": {
    name: "Stool, Carved",
    qualityKey: Quality.FINE,
    key: "stool, carved",
  },
  "sugar pumpkin, wax": {
    name: "Sugar Pumpkin, Wax",
    qualityKey: Quality.FINE,
    key: "sugar pumpkin, wax",
  },
  "winter squash, display": {
    name: "Winter Squash, Display",
    qualityKey: Quality.FINE,
    key: "winter squash, display",
  },
  "witchmother's potent brew": {
    name: "Witchmother's Potent Brew",
    iconUrl:
      "https://images.uesp.net/1/1d/ON-icon-food-Witchmother%27s_Potent_Brew.png",
    productTypeKey: ProductType.PROVISION,
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
  "wood elf counter, long leather": {
    name: "Wood Elf Counter, Long Leather",
    qualityKey: Quality.FINE,
    key: "wood elf counter, long leather",
  },
  "wood elf cup, ceramic": {
    name: "Wood Elf Cup, Ceramic",
    iconUrl:
      "https://images.uesp.net/f/f2/ON-item-furnishing-Wood_Elf_Cup%2C_Ceramic.jpg",
    qualityKey: Quality.FINE,
    key: "wood elf cup, ceramic",
  },
  "wood elf divider, narrow": {
    name: "Wood Elf Divider, Narrow",
    qualityKey: Quality.FINE,
    key: "wood elf divider, narrow",
  },
  "wood elf divider, relaxed": {
    name: "Wood Elf Divider, Relaxed",
    qualityKey: Quality.SUPERIOR,
    key: "wood elf divider, relaxed",
  },
  "wood elf divider, stretched": {
    name: "Wood Elf Divider, Stretched",
    qualityKey: Quality.FINE,
    key: "wood elf divider, stretched",
  },
  "wood elf grinding stone": {
    name: "Wood Elf Grinding Stone",
    qualityKey: Quality.FINE,
    key: "wood elf grinding stone",
  },
  "wood elf pitcher, painted": {
    name: "Wood Elf Pitcher, Painted",
    qualityKey: Quality.SUPERIOR,
    key: "wood elf pitcher, painted",
  },
  "wood elf stool, leather": {
    name: "Wood Elf Stool, Leather",
    qualityKey: Quality.FINE,
    key: "wood elf stool, leather",
  },
  "wood elf table, leather": {
    name: "Wood Elf Table, Leather",
    qualityKey: Quality.FINE,
    key: "wood elf table, leather",
  },
  "wood elf vase, chipped": {
    name: "Wood Elf Vase, Chipped",
    qualityKey: Quality.SUPERIOR,
    key: "wood elf vase, chipped",
  },
  "wood elf vase, painted": {
    name: "Wood Elf Vase, Painted",
    qualityKey: Quality.SUPERIOR,
    key: "wood elf vase, painted",
  },
  "wood elf vessel, tiered ceramic": {
    name: "Wood Elf Vessel, Tiered Ceramic",
    qualityKey: Quality.SUPERIOR,
    key: "wood elf vessel, tiered ceramic",
  },
  "wood elf vessel, tiered painted": {
    name: "Wood Elf Vessel, Tiered Painted",
    qualityKey: Quality.SUPERIOR,
    key: "wood elf vessel, tiered painted",
  },
  // ///////////////////////////////////////////////////////////////////////////
};

Product.keys = () => Object.keys(Product.properties);

Product.values = () => Object.values(Product.properties);

// Add ProductType and URLs.
const PRODUCT_TYPE_KEY = ProductType.FURNISHING;
const forEachFunction = (product) => {
  const { name, iconUrl, productTypeKey, ttcUrl, url } = product;

  const newIconUrl = iconUrl || URLGenerator.productIcon(name);
  const newProductTypeKey = productTypeKey || PRODUCT_TYPE_KEY;
  const newUrl = url || URLGenerator.fashion(name);
  const newTtcUrl = ttcUrl || URLGenerator.tamrielTradeCentre(name);

  Product.properties[product.key] = R.mergeRight(product, {
    iconUrl: newIconUrl,
    productTypeKey: newProductTypeKey,
    url: newUrl,
    ttcUrl: newTtcUrl,
  });
};
R.forEach(forEachFunction, Product.values());

Object.freeze(Product);

export default Product;
