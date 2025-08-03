import fs from "fs";
import DataFrame from "../src/DataFrame.js";

const csv = fs.readFileSync("./sample.csv", "utf-8");
const df = DataFrame.fromCSV(csv);

console.log("HEAD:");
console.table(df.head().data);

console.log("\nSHAPE:");
console.log(df.shape);

console.log("\nCOLUMNS:");
console.log(df.columns);

console.log("\nROW 2:");
console.log(df.row(2));

console.log('\n"score" COLUMN:');
console.log(df.column("score"));

console.log("\nDESCRIBE:");
console.log(df.describe());

console.log("\nTO CSV:");
console.log(df.toCSV());

console.log("\nINFO:");
df.info();

console.log("\nFILTER (score > 50):");
const filtered = df.filter((row) => row.score > 50);
console.table(filtered.data);

console.log("\nSORT BY 'score' (descending):");
const sorted = df.sortBy("score", false);
console.table(sorted.head().data);
