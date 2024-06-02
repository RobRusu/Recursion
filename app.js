#!/usr/bin/env node

import { fibs } from "./fibonacci.js";
import { fibsRec } from "./fibonacci.js";
import { mergeSort } from "./mergeSort.js";

console.log(fibs(15));
console.log(fibsRec(15));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
