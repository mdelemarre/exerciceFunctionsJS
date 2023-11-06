// exercice 01

function reverseChain(chain){
    return chain.split('').reverse().join('');
}

console.log(reverseChain('maison'));


// exercice 02

function dublicateChar(chain){
    let arrayChar = chain.split('');

    arrayChar.forEach(function (char, i){
        char = char.repeat(2);
        arrayChar[i] = char;
    });
    return arrayChar.join('');
}

console.log(dublicateChar('maison'));

// exercice 03
function atLeastTwo(array, callback){
    let countTrue = callback(array).filter(x => x == true);
    if(countTrue.length >= 2) return true;
    else return false;
}

function isInteger(array){
    array.forEach(function (item, i){
        array[i] = Number.isInteger(item);
    });

    //console.log(array);
    return array;
}

let testArray = ["hello", 0, "hhu", 1, 18];
console.log(atLeastTwo(testArray, isInteger));

testArray =  ["hello", "0", "hhu", 1, "false"];
console.log(atLeastTwo(testArray, isInteger));
