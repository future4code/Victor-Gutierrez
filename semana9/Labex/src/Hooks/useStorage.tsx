export default function fastStorage() {
    const setItemInLocalStorage = (itemkey: string, item: string) => {
        localStorage.setItem(itemkey, item);
    };

    const retrieveItemFromLocalStorage = (itemkey: string) => {
        return localStorage.getItem(itemkey);
    };

    const removeItemfromLocalStorage = (itemkey: string) => {
        localStorage.removeItem(itemkey);
    };

    const clearLocalStorage = () => {
        localStorage.clear();
    };

    const setItemInSessionStorage = (itemkey: string, item: string) => {
        sessionStorage.setItem(itemkey, item);
    };

    const retrieveItemFromSessionStorage = (itemkey: string) => {
        return sessionStorage.getItem(itemkey);
    };

    const removeItemFromSessionStorage = (itemkey: string) => {
        sessionStorage.removeItem(itemkey);
    };

    const clearSessionStorage = () => {
        sessionStorage.clear();
    };

    return {
        setItemInLocalStorage,
        retrieveItemFromLocalStorage,
        removeItemfromLocalStorage,
        clearLocalStorage,
        setItemInSessionStorage,
        retrieveItemFromSessionStorage,
        removeItemFromSessionStorage,
        clearSessionStorage,
    };
}
