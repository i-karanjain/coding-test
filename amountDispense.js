'use strict';
const { count } = require("console");
const process = require("process");
var readLine = require("readline");

var amountEntered;
const typeOfNotes = [2000,500,200,100];

const rl = readLine.createInterface({input: process.stdin, output: process.stdout});

const askForAmount = () => {
  return new Promise((resolve, reject) => {
    rl.question('Please enter the amount (multiple of 100)= ', (answer) => {
      if (answer%100 != 0) {
        console.log(`Please enter the amount which is multiple of 100`);
        process.exit()
      }

      amountEntered = answer;
      resolve();
    })
  })
}

const processAmountAndShowValues = () => {
  return new Promise((resolve, reject) => {
    console.log("Notes you are getting");

    typeOfNotes.map(sT => {
      let countPerNoteType = Math.floor(amountEntered/sT);
      
      if (countPerNoteType > 0) {
        console.log(sT+" - "+countPerNoteType);
      }  

      amountEntered = amountEntered%sT;
    });
    
    resolve();
  })
}; 

const main = async () => {
  await askForAmount();
  await processAmountAndShowValues();
  rl.close()
}

main()