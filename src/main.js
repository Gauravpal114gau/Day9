import { readFileSync, writeFileSync } from "node: fs";

let filePath = "C:\Users\g1aur\OneDrive\Desktop\MArch2023 HTML\Day9\src\output.txt";

let data = `I am a good boy I am from kanpur`;

writeFileSync(filePath, data);
console.log("write success");


