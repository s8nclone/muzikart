// let fs;

// if (!process.browser) {
//   fs = require('fs');
// }
// // import fs from 'fs'
// import path from 'path'

// export async function getLocalData() {
//   // Get the path of the json file
//   const filePath = path.join(process.cwd(), '../../json/products.json');
//   // Read the json file
//   const jsonData = fs.readFile(filePath);
//   // Parse data as json
//   const objectData = JSON.parse(jsonData);

//   return objectData
// }

import { promises as fsPromises } from 'fs';
// const fs = require('fs');
// import * as fs from 'node:fs/promises';
import path from 'path';

export async function getLocalData() {
  if (!process.browser) {
    // Get the path of the JSON file
    const filePath = path.join(process.cwd(), '../../json/products.json');
    
    try {
      // Read the JSON file asynchronously
      const jsonData = await fsPromises.readFile(filePath, 'utf-8');
      
      // Parse data as JSON
      const objectData = JSON.parse(jsonData);
      
      return objectData;
    } catch (error) {
      // Handle errors, e.g., file not found or invalid JSON
      console.error('Error reading or parsing the file:', error);
      throw error;
    }
  }
  
  return null; // In the browser, return null or handle differently
}
