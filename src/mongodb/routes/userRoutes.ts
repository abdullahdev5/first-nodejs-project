import { Router, Request, Response } from "express";
import { createUser, getUsers, getUserByID, deleteUser } from "../models/user.js";
import { User } from "../models/user.js";


const router = Router();


router.post('/', async (req: Request<{}, {}, User>, res: Response) => {
    const user: User = req.body;
    if (!user) {
        return res.status(404).send('User not found!');
    }
    console.log(`User (createUser): ${JSON.stringify(user, null, 2)}`);

    try {
        await createUser(user);
        console.log('User Created Successfully');
        return res.status(201).send('User created Successfully');
    } catch (e: any) {
        console.error(e);
        return res.status(500).send(`Error: ${e}`);
    }
});


router.get('{/:id}', async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, email } = req.query;
    try {
        if (id) {
            const user = await getUserByID(id);
            console.log(`User (getUserByID): ${JSON.stringify(user, null, 2)}`);
            if (!user) {
                return res.status(404).send(`User not found with ${id} id!`);
            }
            return res.json(user);
        }

        const users = await getUsers(name as string, email as string);
        console.log(`Users (getAllUsers): ${JSON.stringify(users, null, 2)}`);

        return res.json(users);
    } catch (e) {
        console.error(e);
        return res.status(500).send(`Error: ${e}`);
    }
});

router.delete('{/:id}', async (req: Request, res: Response) => {
    const { id } = req.params;
    if (!id) {
        return res.status(404).send('id is required!');
    }
    console.log(`id (deleteUser): ${id}`);

    try {
        await deleteUser(id);
        console.log('User Deleted Successfully');

        return res.send(`User Deleted Successfully with ${id} id`);
    } catch (e) {
        console.error(e);
        res.status(500).send(`Error: ${e}`);
    }
});

export default router;