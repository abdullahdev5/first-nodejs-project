import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(`Current File Path: ${__filename}`)
console.log(`Current File Directory Path: ${__dirname}`)

console.log(`Current File Extension: ${path.extname(__filename)}`)
console.log(`Custom File Extension: ${path.extname('file.txt')}`)
console.log(`Is Path is Absolute?: ${path.isAbsolute('/osmodule.js')}`)