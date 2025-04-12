import os from "os";
import { greet } from "./modules/greeting.js";
import { div, multiply, sub, add } from "./modules/math.js";

let x = os.cpus();
let y = os.freemem();
let z = os.totalmem();
let s = os.platform();

console.log(x);
console.log(y);
console.log(z);
console.log(s);

const message = greet();
console.log(message);

console.log(add(2, 5));
console.log(sub(4, 2));
console.log(multiply(3, 7));
console.log(div(9, 3));
