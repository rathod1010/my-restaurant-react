export const NumberValidator = (event) => {
   
    let keyCode = event.keyCode ? event.keyCode : event.which;

    if (!(keyCode >= 48 && keyCode <= 57)) {
        
        event.preventDefault();
    }
};

export const emailValidator = (input) => {
    let pattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$/;

    return pattern.test(input)
        ? true
        :  !pattern.test(input)
            ? false
            : true;
};

export const passwordValidator = (input) => {
    
    return input.match(`(?=.?[A-Z])(?=.[a-z])(?=.?[0-9])` && `(?=.?[#?!@$%^&-])` && `.{8,}`) ? true : false;
};