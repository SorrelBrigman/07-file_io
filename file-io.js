#!/usr/bin/env node

const { readFileSync } = require("fs");

let arg  = process.argv[2];

if(arg) {
  try{
    let data = readFileSync(arg);
    process.stdout.write(`${data}`);
  } catch(e){
    console.error();
  }
}
