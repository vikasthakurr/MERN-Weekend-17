// function sum(a, b) {
//   return a + b;
// }

// // console.log(sum(1, 3));
// // export { sum };
// export default { sum };
// const figlet = require("figlet");
import figlet from "figlet";

figlet("Hello MERN-17", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
