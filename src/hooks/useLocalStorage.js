import {useState} from 'react';

export const useLocalStorage = (key, initialValue) => {
    // set up state property called storedValue
    const [storedValue, setStoredValue] = useState(() => {
        // To retrieve an item from localStorage by key
        const item = window.localStorage.getItem(key);
        // Parse and return stored json or, if undefined (means that item doesn't exist), return initialValue
        return item ? JSON.parse(item) : initialValue;
    });
    // a function called setValue that takes a value parameter
    const setValue = value => {
        // update the state of storedValue with value
        setStoredValue(value);
        // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(value));
    };

    return [storedValue, setStoredValue];
}