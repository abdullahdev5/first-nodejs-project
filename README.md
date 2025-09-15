# 🚀 My First Node.js Project

This is my **first Node.js project**, where I explored the basics of JavaScript, Node.js modules, and how to extend Node.js with TypeScript.  
I practiced using built-in Node.js modules, third-party libraries, and tools to make development easier.  

---

## 📘 What I Learned
- Basics of **JavaScript** in Node.js  
- **Core Node.js modules**:  
  - `os` (Operating System information)  
  - `path` (Working with file paths)  
  - `fs` (File System operations)  
  - `events` (Event-driven programming)  
- **Third-party modules**:  
  - `axios` (HTTP requests)  
  - `express` (Web server framework)  
- Adding **TypeScript** in Node.js  
- Running `.ts` files directly with **tsx**  
- Using **nodemon** to auto-restart server when files change  
- Difference between **CommonJS** and **ESM** (I chose **ESM**)  

---

## 📂 Modules and Default Code Examples

### 1. OS Module
```ts
// osmodule.ts
import os from "os";

console.log("Platform:", os.platform());
console.log("CPU Architecture:", os.arch());
console.log("Free Memory:", os.freemem());
console.log("Total Memory:", os.totalmem());

```

### 2. Path Module
```ts
// pathmodule.ts
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(`Current File Path: ${__filename}`)
console.log(`Current File Directory Path: ${__dirname}`)

console.log(`Current File Extension: ${path.extname(__filename)}`)
console.log(`Custom File Extension: ${path.extname('file.txt')}`)
console.log(`Is Path is Absolute?: ${path.isAbsolute('/osmodule.js')}`)

```

### 3. FS Module
```ts
// fsmodule.ts
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

```

### 4. Events Module
```ts
// events_module.ts
import EventEmitter from "events";

const emitter = new EventEmitter();

emitter.on("greet", (name) => {
  console.log(`Hello, ${name}!`);
});

emitter.emit("greet", "World"); // This will print: ('Hello, World')

```

### 5. Axios Module
```ts
// axiosmodule.ts
import axios from "axios";

const fetchData = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
  console.log(res.data);
};

fetchData();

```

### 6. Express Module
```ts
// axiosmodule.ts
import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Express + Node.js!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

```

---

## Adding TypeScript to Node.js Project

### Step 1: Install TypeScript

```
npm install -D typescript tsx @types/node
```

### Step 2: Initialize TypeScript

```
npx tsc --init
```
This creates a ```tsconfig.json``` file.

### Step 3: Example ```.ts``` file

```
// index.ts
const greet = (name: string): string => {
  return `Hello, ${name}!`;
};

console.log(greet("TypeScript + Node.js"));
```

### Step 4: Run ```.ts``` file directly with tsx

```
npx tsx index.ts
```

### Note:
Make sure to follow my ```tsconfig.json``` file otherwise you will get errors

---

## Using Nodemon
To restart server automatically on file changes:
```
npm install --save-dev nodemon
```
Add script in package.json:
```
{
  "scripts": {
    "dev": "nodemon --exec tsx src/index.ts"
  }
}
```
Run with:
```
npm run dev
```

---

## CommonJS vs ESM
### CommonJS (default in older Node.js)
```
// commonjsExample.js
const fs = require("fs");
module.exports = { message: "Hello CommonJS" };
```
### ESM (ECMAScript Modules, modern standard)
```
// esmExample.js
import fs from "fs";
export const message = "Hello ESM";
```
I chose ESM because it’s the modern JavaScript standard and works naturally with TypeScript.

---

## Conclusion

- This project helped me:
- Get started with Node.js basics
- Work with core modules (os, path, fs, events)
- Use third-party modules (axios, express)
- Configure TypeScript and run .ts files with tsx
- Use nodemon for auto-reloading
- Understand the difference between CommonJS and ESM

This is just the beginning of my Node.js journey!

---

## Clone This Project

To clone this project and try it yourself
```
git clone https://github.com/abdullahdev5/first-nodejs-project.git
```
