export default function debounce(f, delay) {
    let timer = null;
    // Returns a function that is called after a 
    // 'delay'. The delay is reset every time we 
    // tryToCall it
    // So the only way the f actually runs is 
    // if we do not tryToCall before the delay runs out
    return function debouncedF(...args) {
        clearTimeout(timer); 
        timer = setTimeout(() => f(...args), delay);
    }
}