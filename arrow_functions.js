let sum_og = function(a,b) {return a+b}

let su_arrow_function = (a,b) => a+b;

const boolean = true;

let myFunct = boolean ? 
    () => {console.log('True')}:
    () => {console.log('False')}

    console.log('boolean, muFunct()', boolean, myFunct());