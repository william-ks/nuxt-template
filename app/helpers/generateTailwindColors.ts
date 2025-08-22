import colors from "tailwindcss/colors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Função omit local
function omit<T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> {
  const result = { ...obj };
  for (const key of keys) {
    delete result[key];
  }
  return result;
}

const colorsToOmit: Array<keyof typeof colors> = [
  "inherit",
  "current",
  "transparent",
  "black",
  "white",
];
const primaryColors: string[] = Object.keys(omit(colors, colorsToOmit));

// Edite aqui para adicionar ou remover cores manualmente
const extraColors: string[] = [
  // exemplo: "red", "blue"
];

const blocklistColors: string[] = [];

[...primaryColors, ...extraColors].forEach((color: string) => {
  blocklistColors.push(`bg-${color}-500`);
  blocklistColors.push(`bg-${color}-400`);
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputPath: string = path.resolve(__dirname, "tailwind-blocklist.json");
fs.writeFileSync(outputPath, JSON.stringify(blocklistColors, null, 2));

console.log("Blocklist gerada em:", outputPath);
console.log(blocklistColors);
