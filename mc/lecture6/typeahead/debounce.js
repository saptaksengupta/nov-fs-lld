// call only when the difference bw 
// prev one and current event is 
// greater than the delay! 

// on Every key press I call debounce.

export function debounce(fn, delay){
    let timerId;
    let context = this;
    return function(...args) {
        if (timerId) {
            clearTimeout(timerId);
        }

        timerId = setTimeout(function(){
            fn.call(args[0], ...args);
        }, delay);  // 1s
    }
 }