import { ObjectId } from "mongodb";
import { COLLECTIONS } from "../constants/constants.js";
import { getDB, closeDB } from "../config/mongodbconfig.js";


export interface User {
    _id?: ObjectId,
    name: string,
    email: string,
    createdAt?: Date,
}

const userCollection = () => getDB().collection<User>(COLLECTIONS.USERS);


async function createUser(user: User) {
    const newUser: User = {
        name: user.name,
        email: user.email,
        createdAt: new Date()
    }

    await userCollection().insertOne(newUser)
}


async function getAllUsers(): Promise<Array<Object>> {
    return await userCollection().find().toArray();
}

async function getUserByID(id: string): Promise<Object | null> {
    return await userCollection().findOne({ _id: new ObjectId(id) });
}

async function deleteUser(id: string) {
    await userCollection().deleteOne({ _id: new ObjectId(id) });
}


export { createUser, getAllUsers, getUserByID, deleteUser };