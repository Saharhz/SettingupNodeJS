import os from "os";
import { greet } from "./modules/greeting.js";
// const { greet } = require("./modules/greeting.js");

// let x = os.cpus();
// let y = os.freemem();
// let z = os.totalmem();
// let s = os.platform();

// console.log(x);
// console.log(y);
// console.log(z);
// console.log(s);

const message = greet();
console.log(message);
