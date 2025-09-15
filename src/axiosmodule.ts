// axios is used to Fetch Data, POST, Delete etc from the Internet

import axios from 'axios';
import fs from 'fs';
import {fileURLToPath} from 'url';
import {dirname, resolve} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function getData() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        console.log(`Response Status Code: ${response.status}`)
        console.log(`Response Data: ${JSON.stringify(response.data)}`)
    } catch (e) {
        console.error(`Error: ${e}`)
    }
}

export async function downloadImage() {
    try {
        const downloadedImageFilePath = resolve(__dirname, 'files', 'donwloaded_image.jpg');

        const response = await axios.get(
            'https://i.ytimg.com/vi/Oe421EPjeBE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBRRkj08EUKhkhHtsUAIuDPZ248Tw',
            {responseType: "arraybuffer"}
        );

        console.log(`Response Data: ${JSON.stringify(response.data)}`)

        fs.writeFileSync(downloadedImageFilePath, response.data);

        console.log(`Downloaded Image File is Created: ${downloadedImageFilePath}`)

    } catch (e) {
        console.error(`Error: ${e}`)
    }
}