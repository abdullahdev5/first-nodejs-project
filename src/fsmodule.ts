// fs = File System

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filesDir = path.join(__dirname, 'files');
const filePath = path.join(filesDir, 'file.txt');

console.log(`Files Directory: ${filesDir}`)
console.log(`File Path: ${filePath}`)

if (!fs.existsSync(filesDir)) {
    fs.mkdirSync(filesDir);
    console.log(`Directory is Created: ${filesDir}`)
}

if (fs.existsSync(filesDir)) {
    fs.writeFileSync(filePath, 'This is .txt File Made with NodeJs');
    console.log(`File is Created: ${filePath}`)
}

if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath);
    console.log(`${data.toString()}`)
}
