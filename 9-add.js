#!/usr/bin/node

const args = process.argv.slice(2);

function add(a, b) {
  return a + b;
}

const first = Number(args[0]);
const second = Number(args[1]);

console.log(add(first, second));
