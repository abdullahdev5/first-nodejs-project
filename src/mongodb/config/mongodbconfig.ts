import { MongoClient, Db } from "mongodb";


const uri = process.env.MONGO_URI || 'mongodb://localhost:27017';
const client = new MongoClient(uri);

let db: Db;


export async function connectDB() {
    if (!db) {
        await client.connect();
        db = client.db('Test');
    }
}

export function getDB(): Db {
    if (!db) throw new Error('DB not Connected!');
    return db;
}

export async function closeDB() {
    await client.close();
    console.log('DB Closed!')
}