import fs, { appendFileSync, writeFileSync } from "fs";

//write or create
// fs.writeFileSync("./vikas.txt","this is file created by node js")
// fs.writeFile("./vikas.pdf", "this is the end", (err, data) => {
//   if (err) {
//     console.log("something went wrong", err);
//   } else {
//     console.log("file created");
//   }
// });

// fs.appendFileSync("./vikas.txt", "\n new content");

// const data = fs.readFileSync("./vikas.txt", "utf-8");
// console.log(data);

// fs.readFile("./vikas.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log("error reading file", err);
//   } else {
//     console.log(data);
//   }
// });

fs.unlinkSync("./vikas.pdf");
