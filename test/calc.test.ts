import { add, mul } from "../src/calc";
import fs from "fs";
import path from 'path';

// Function to read the JSON file synchronously
// function readJsonFileSync(filePath: string) {
//   try {
//    console.log("XXXXXXXXX")
//    console.log('Current working directory:', process.cwd());
//    console.log('Current working directory:', path.join(__dirname, filePath));

//    const data = fs.readFileSync(path.join(__dirname, filePath), 'utf8')
//     return JSON.parse(data);
//   } catch (error) {
//     console.error('Error reading JSON file:', error);
//     return null;
//   }
// }

describe("test add function", () => {
  it("should return 15 for add(10,5)", () => {
   // const filePath = './data/sample.json';

  // Synchronously read the JSON file and log the data
 // const jsonDataSync = readJsonFileSync(filePath);
  //console.log('Data read synchronously:', jsonDataSync);
    expect(add(10, 5)).toBe(15);
  });
   
  it("should return 5 for add(2,3)", () => {
    expect(add(2, 3)).toBe(5);
  });
});

describe("test mul function", () => {
  it("should return 15 for mul(3,5)", () => {
    const myMock = jest.fn();
    console.log(myMock());
    expect(mul(3, 5)).toBe(15);
  });
});
