import { writeFile } from "node:/promises";

  
 async function main() {
    let filePath =  ;

    let fileData = await readFile( filePath , {encoding: "utf-8"});
     console.log(fileData);
}
    
main();






