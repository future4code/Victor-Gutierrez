import fastStorage from './useStorage';

const {
    retrieveItemFromLocalStorage,
    retrieveItemFromSessionStorage,
} = fastStorage();

export function runClientAuthCheck() {
    if (
        String(retrieveItemFromLocalStorage('virtualUserToken')) ===
        '123123123123'
    ) {
        return true;
    } else {
        return false;
    }
}

export function runAdminAuthCheck() {
    if (
        retrieveItemFromSessionStorage('adminToken') !== null &&
        retrieveItemFromSessionStorage('adminToken') !== undefined
    ) {
        return true;
    } else {
        return false;
    }
}
