/* eslint no-console: ["error", { allow: ["log","error"] }] */

const FileLoader = require("./FileLoader.js");
const FileWriter = require("./FileWriter.js");
const R = require("../node_modules/ramda/dist/ramda.js");

const INPUT_FILE = `product-input.txt`;
const OUTPUT_FILE1 = `Product.js`;
const OUTPUT_FILE2 = `Recipe.js`;
const PRODUCT_PREFIX =
  'import Quality from "../artifact/Quality.js";\n\nconst Product = {\n';
const PRODUCT_MIDFIX = "};\n\nProduct.properties = {\n";
const PRODUCT_SUFFIX = "};\n\nexport default Product;";
const RECIPE_PREFIX =
  'import Product from "./Product.js";\n\nconst Recipe = {\n';
const RECIPE_MIDFIX = "};\n\nRecipe.properties = {\n";
const RECIPE_SUFFIX = "};\n\nexport default Recipe;";

const enumKey = (string) =>
  string.replace(/[,':]/g, "").replace(/ /g, "_").toUpperCase();

const createProductString = (productKey, productName, qualityEnum) => {
  let answer = `"${productKey}": {\n`;
  answer += `name: "${productName}",\n`;
  answer += `qualityKey: Quality.${qualityEnum},\n`;
  answer += `key: "${productKey}",\n`;
  answer += `},\n`;

  return answer;
};

const createRecipeString = (recipeKey, recipeName, productEnum) => {
  let answer = `"${recipeKey}": {\n`;
  answer += `name: "${recipeName}",\n`;
  answer += `inputs: [],\n`;
  answer += `output: productIngredient(Product.${productEnum}),\n`;
  answer += `key: "${recipeKey}",\n`;
  answer += `},\n`;

  return answer;
};

const itemsToString = (prefix, enums, midfix, items, suffix) => {
  enums.sort();
  const enums2 = enums.join("");
  items.sort();
  const items2 = items.join("");
  const itemAnswer = `${prefix}${enums2}${midfix}${items2}${suffix}`;

  return itemAnswer;
};

const fetch = (inputFile) =>
  new Promise((resolve) => {
    const receiveData = (textDocument) => {
      const lines0 = textDocument.trim().split("\n");
      const lines1 = R.map((line) => line.trim(), lines0);
      const lines = R.filter((line) => line.length > 0, lines1);
      console.log(`lines.length = ${lines.length}`);

      const mapFunction = (line) => {
        let myProductEnum = "";
        let productString = "";
        let recipeEnum = "";
        let recipeString = "";
        const parts0 = line.split(":");

        if (parts0.length > 0) {
          const parts = R.map((p) => p.trim(), parts0);
          const prefix = parts.length === 3 ? R.head(parts) : undefined;
          const productName = parts.length === 3 ? parts[1] : R.head(parts);
          const qualityKey = R.last(parts);

          const productEnum = enumKey(productName);
          const productKey = productName.toLowerCase();
          const qualityEnum = qualityKey.toUpperCase();
          myProductEnum = `${productEnum}: "${productKey}",\n`;
          productString = createProductString(
            productKey,
            productName,
            qualityEnum
          );

          if (prefix) {
            const recipeName = `${prefix}: ${productName}`;
            const recipeKey = `${prefix.toLowerCase()}: ${productKey}`;
            recipeEnum = `${enumKey(recipeName)}: "${recipeKey}",\n`;
            recipeString = createRecipeString(
              recipeKey,
              recipeName,
              productEnum
            );
          }
        }

        return {
          productEnum: myProductEnum,
          productString,
          recipeEnum,
          recipeString,
        };
      };

      const productRecipes = R.map(mapFunction, lines);
      const productEnums0 = R.map(R.prop("productEnum"), productRecipes);
      const productEnums = R.filter((e) => e.length > 0, productEnums0);
      const products = R.map(R.prop("productString"), productRecipes);
      const recipeEnums0 = R.map(R.prop("recipeEnum"), productRecipes);
      const recipeEnums = R.filter((e) => e.length > 0, recipeEnums0);
      const recipes = R.map(R.prop("recipeString"), productRecipes);
      const productAnswer = itemsToString(
        PRODUCT_PREFIX,
        productEnums,
        PRODUCT_MIDFIX,
        products,
        PRODUCT_SUFFIX
      );
      const recipeAnswer = itemsToString(
        RECIPE_PREFIX,
        recipeEnums,
        RECIPE_MIDFIX,
        recipes,
        RECIPE_SUFFIX
      );

      resolve({ productAnswer, recipeAnswer });
    };

    const options = {};
    FileLoader.loadLocalFile(inputFile, options, 3).then(receiveData);
  });

const generate = () => {
  const start = Date.now();
  fetch(INPUT_FILE).then((content) => {
    const { productAnswer, recipeAnswer } = content;
    FileWriter.writeFile(OUTPUT_FILE1, productAnswer);
    FileWriter.writeFile(OUTPUT_FILE2, recipeAnswer);
    const end = Date.now();
    console.log(`elapsed: ${end - start} ms`);
  });
};

generate();
