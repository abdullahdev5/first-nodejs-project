import { EventEmitter } from 'events';

const emitter = new EventEmitter();

const EVENTS = {
    USER_ADDED: 'user-added',
    USER_DELETED: 'user-deleted',
    USER_ERROR: 'user-error'
};

export { emitter, EVENTS };