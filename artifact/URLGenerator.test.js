/* eslint no-console: ["error", { allow: ["log", "warn"] }] */

import Product from "./Product.js";
import Resource from "./Resource.js";
import URLGenerator from "./URLGenerator.js";

QUnit.module("URLGenerator");

QUnit.test("fashion() Alinor Amphora, Delicate", (assert) => {
  // Setup.
  const product = Product.properties[Product.ALINOR_AMPHORA_DELICATE];

  // Run.
  const result = URLGenerator.fashion(product.name);

  // Verify.
  assert.ok(result);
  assert.equal(result, "https://eso.mmo-fashion.com/High-Elf-Amphora-Delicate");
});

QUnit.test("fashion() Dres Lantern, Stationary", (assert) => {
  // Setup.
  const product = Product.properties[Product.DRES_LANTERN_STATIONARY];

  // Run.
  const result = URLGenerator.fashion(product.name);

  // Verify.
  assert.ok(result);
  assert.equal(result, "https://eso.mmo-fashion.com/Dres-Lantern-Stationary");
});

QUnit.test("fashion() null", (assert) => {
  // Run.
  const result = URLGenerator.fashion(null);

  // Verify.
  assert.equal(result, null);
});

QUnit.test("housing() Dres Lantern, Stationary", (assert) => {
  // Setup.
  const product = Product.properties[Product.DRES_LANTERN_STATIONARY];

  // Run.
  const result = URLGenerator.housing(product.name);

  // Verify.
  assert.ok(result);
  assert.equal(
    result,
    "https://eso-housing.com/furniture/Dres-Lantern-Stationary"
  );
});

QUnit.test("housing() null", (assert) => {
  // Run.
  const result = URLGenerator.housing(null);

  // Verify.
  assert.equal(result, null);
});

QUnit.test("productIcon() Alinor Amphora, Delicate", (assert) => {
  // Setup.
  const product = Product.properties[Product.ALINOR_AMPHORA_DELICATE];

  // Run.
  const result = URLGenerator.productIcon(product.name);

  // Verify.
  assert.ok(result);
  assert.equal(
    result,
    "https://elderscrollsonline.wiki.fextralife.com/file/Elder-Scrolls-Online/alinor_amphora_delicate.jpg"
  );
});

QUnit.test("productIcon() Alinor Amphora, Embossed", (assert) => {
  // Setup.
  const product = Product.properties[Product.ALINOR_AMPHORA_EMBOSSED];

  // Run.
  const result = URLGenerator.productIcon(product.name);

  // Verify.
  assert.ok(result);
  assert.equal(
    result,
    "https://elderscrollsonline.wiki.fextralife.com/file/Elder-Scrolls-Online/alinor_amphora_embossed.jpg"
  );
});

QUnit.test("productIcon() null", (assert) => {
  // Run.
  const result = URLGenerator.productIcon(null);

  // Verify.
  assert.equal(result, null);
});

QUnit.test("resourceIcon() White Cap", (assert) => {
  // Setup.
  const product = Resource.properties[Resource.WHITE_CAP];

  // Run.
  const result = URLGenerator.resourceIcon(product.name);

  // Verify.
  assert.ok(result);
  assert.equal(
    result,
    "https://elderscrollsonline.wiki.fextralife.com/file/Elder-Scrolls-Online/White%20Cap.png"
  );
});

QUnit.test("resourceIcon() null", (assert) => {
  // Run.
  const result = URLGenerator.resourceIcon(null);

  // Verify.
  assert.equal(result, null);
});

QUnit.test("tamrielTradeCentre() Dres Lantern, Stationary", (assert) => {
  // Setup.
  const product = Product.properties[Product.DRES_LANTERN_STATIONARY];

  // Run.
  const result = URLGenerator.tamrielTradeCentre(product.name);

  // Verify.
  assert.ok(result);
  assert.equal(
    result,
    // "https://us.tamrieltradecentre.com/pc/Trade/SearchResult?SearchType=Sell&ItemID=19747&ItemNamePattern=Dres+Lantern%2C+Stationary&ItemCategory1ID=&ItemTraitID=&ItemQualityID=&IsChampionPoint=false&LevelMin=&LevelMax=&MasterWritVoucherMin=&MasterWritVoucherMax=&AmountMin=&AmountMax=&PriceMin=&PriceMax=&SortBy=Price&Order=asc"
    "https://us.tamrieltradecentre.com/pc/Trade/SearchResult?SearchType=Sell&ItemID=19747&SortBy=Price&Order=asc"
  );
});

QUnit.test("tamrielTradeCentre() null", (assert) => {
  // Run.
  const result = URLGenerator.tamrielTradeCentre(null);

  // Verify.
  assert.equal(result, null);
});

const URLGeneratorTest = {};
export default URLGeneratorTest;
