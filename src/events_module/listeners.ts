import { emitter, EVENTS } from "./events.js";

// USER_ADDED
emitter.on(EVENTS.USER_ADDED, (user) => {
    console.log(`User Added: ${JSON.stringify(user)}`);
});

// USER_DELETED
emitter.on(EVENTS.USER_DELETED, (user) => {
    console.log(`User Deleted: ${JSON.stringify(user)}`);
});

// USER_ERROR
emitter.on(EVENTS.USER_ERROR, (error) => {
    console.error(`User Error: ${error}`);
});