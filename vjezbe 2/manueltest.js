//import sum from "./index";
const { sum, multi } = require("./index");
const rez = sum(3, 3);

if (rez != 5) {
  console.log("2+3 treba biti 5, a rez je:", rez);
  //process.exit(1);
}

const rez1 = multi(2, 3);

if (rez != 5) {
  console.log("2*3 treba biti 6, a rez je:", rez1);
  //process.exit(1);
}
