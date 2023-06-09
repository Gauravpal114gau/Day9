import { readFile } from "node:/promises";

 filePath = "C:\Users\g1aur\OneDrive\Desktop\MArch2023 HTML\Day9\package.json";
 async function main() {
    let filePath = "C:\Users\g1aur\OneDrive\Desktop\MArch2023 HTML\Day9\package.json";

    let fileData = await readFile( filePath , {encoding: "utf-8"});
     console.log(fileData);
}
    
main();






