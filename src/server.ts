/* Learning Axios Module */
/*
import { downloadImage } from './axiosmodule.js';

getData();
downloadImage();
*/


/* Learning Express & Events Module */

interface User {
    id: string | number,
    name: string
}

import express, { Request, Response } from 'express';

import { emitter, EVENTS } from './events_module/events.js';
import './events_module/listeners.js';

const app = express();

app.use(express.json()); // this is important for if you want to parse the request body to json

const port = process.env.PORT || 3000;

let users: User[] = [];

app.get('/', (req: Request, res: Response) => {
    const name = req.query.name as string;
    if (name) {
        res.send(`Hello, ${name}`);
    }
    
    res.send('This is My Localhost Nodejs Server');
});

app.get('/users{/:id}', (req: Request, res: Response) => {

    const { id } = req.params;
    if (id) {
        let userById = users.find(user => user.id == id);
        if (userById) {
            return res.json(userById);
        } else {
            return res.json({success: false, message: `can\'t find User with ${id} ID`});
        }
    }
    console.log(`Users: ${JSON.stringify(users)}`);
    return res.json(users);
});

app.post('/users', (req: Request, res: Response) => {

    const user = req.body as User;

    if (user) {
        try {
            const addedUserIndex: number = users.push(user);
            const addedUser = users.at(addedUserIndex - 1);

            // Emitting the user-created Event, just for Learning events
            emitter.emit(EVENTS.USER_ADDED, addedUser);

            return res.json({
                success: true,
                message: 'User addedd Successfully!',
                user: addedUser,
                statusCode: 200
            });
        } catch (e) {
            // Emitting the user-error Event, just for Learning events
            emitter.emit(EVENTS.USER_ERROR, e);

            return res.status(500).json({
                success: false,
                message: `Failed to add the User: ${e}`,
                statusCode: 500
            });
        }
    } else {
        // Emitting the user-error Event, just for Learning events
        emitter.emit(EVENTS.USER_ERROR, 'User not found!');

        return res.status(404).json({
            success: false,
            message: `User not found!`,
            statusCode: 404,
        });
    }
});

app.delete('/users{/:id}', (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        if (!id) {
            // Emitting the user-error Event, just for Learning events
            emitter.emit(EVENTS.USER_ERROR, 'User ID is required!');

            return res.status(400).json({
                success: false,
                message: 'User ID is required!',
                statusCode: 400
            });
        }

        const userIndex = users.findIndex(user => user.id == id);

        if (userIndex === -1) {
            // Emitting the user-error Event, just for Learning events
            emitter.emit(EVENTS.USER_ERROR, `User with id ${id} not found!`);

            return res.status(404).json({
                success: false,
                message: `User with id ${id} not found!`,
                statusCode: 404,
            });
        }

        const [deletedUser] = users.splice(userIndex, 1);
        if (deletedUser) {

            // Emitting the user-deleted Event, just for Learning events
            emitter.emit(EVENTS.USER_DELETED, deletedUser);

            return res.json({
                success: true,
                message: `User Deleted with ${id} ID`,
                user: deletedUser,
                statusCode: 200,
            })
        } else {
            // Emitting the user-error Event, just for Learning events
            emitter.emit(EVENTS.USER_ERROR, `User not found with ${id} ID`);

            return res.status(404).json({success: false, message: `User not found with ${id} ID`});
        }
        
    } catch (e) {
        // Emitting the user-error Event, just for Learning events
        emitter.emit(EVENTS.USER_ERROR, e);

        return res.status(500).json({success: false, message: e, statusCode: 500});
    }
})


app.listen(port, () => {
    console.log(`NodeJs Server is Running on http://localhost:${port}`);
});