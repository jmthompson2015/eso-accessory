/* eslint no-console: ["error", { allow: ["log","error"] }] */

const LuaJsonConverter = require("./LuaJsonConverter.js");

const ADD_ONS = "/Users/jmthompson/Documents/Elder Scrolls Online/live/AddOns";
const INPUT_FILE = `${ADD_ONS}/TamrielTradeCentre/PriceTable.lua`;
const PREFIX = "PriceTable=";
const SUFFIX = "end";
const OUTPUT_FILE1 = "PriceTable.json";
const OUTPUT_FILE2 = "../artifact/PriceTable.js";

const isVerbose = false;

LuaJsonConverter.convert(
  INPUT_FILE,
  PREFIX,
  SUFFIX,
  OUTPUT_FILE1,
  OUTPUT_FILE2,
  isVerbose
);
