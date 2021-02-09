/* eslint no-console: ["error", { allow: ["log","error"] }] */

const LuaJsonConverter = require("./LuaJsonConverter.js");

const ADD_ONS = "/Users/jmthompson/Documents/Elder Scrolls Online/live/AddOns";
const INPUT_FILE = `${ADD_ONS}/TamrielTradeCentre/ItemLookUpTable_EN.lua`;
const PREFIX = "ItemLookUpTable=";
const SUFFIX = "end";
const OUTPUT_FILE1 = "ItemLookUpTable.json";
const OUTPUT_FILE2 = "../artifact/ItemLookUpTable.js";

const isVerbose = false;

LuaJsonConverter.convert(
  INPUT_FILE,
  PREFIX,
  SUFFIX,
  OUTPUT_FILE1,
  OUTPUT_FILE2,
  isVerbose
);
