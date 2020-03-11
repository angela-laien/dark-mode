import {useLocalStorage} from './useLocalStorage';
import {useEffect} from 'react';

export const useDarkMode = (key, initialValue) => {
    // Call useLocalStorage and pass in the key I want to use to store whether or not dark mode is enabled. This hook returns an array with a value and a setter in an array.
    const [darkValue, setDarkValue] = useLocalStorage(key, initialValue)
    // Add the class to the body. Use the effect hook to manipulate the DOM directly.
    useEffect(() => {
        // check to see if the value from useLocalStorage is true or false.
        if (darkValue === true) {
            // If it's true, add the class dark-mode to the body element.
            document.body.classList.add('dark-mode');
        } else {
            // If it's false, remove the class from the body element. 
            document.body.classList.remove('dark-mode')
        }
    }, [darkValue]); // add the value the hook depends on in the dependency array so this effect won't run every time anything in the component changes.

    return [darkValue, setDarkValue] // return something out of here so we can use this in our app
} 