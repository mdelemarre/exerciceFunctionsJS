 function spy(f){
    let call = [];
    return function wrapper(...args){
        call.push(args);
        console.log(call);
        return f(...args);
    }
 }
 function divide(a, b){
    return (a/b);
 }

divide = spy(divide);
console.dir(divide(10,2));
console.dir(divide(20,10));
console.dir(divide(500,10));
