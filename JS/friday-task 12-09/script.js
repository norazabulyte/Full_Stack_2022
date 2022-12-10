function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


console.log('1 užduotis')

let array = [];
let letterArray = [];
let letterA = 0;
let letterB = 0;
let letterC = 0;
let letterD = 0;


for (let i = 0; i < 200; i++) {
    i++
    array.push(rand(0, 3))
    letterA++
}
for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
        letterArray.push('A')
        letterA++
    }
    if (array[i] === 1) {
        letterArray.push('B')
        letterB++
    }
    if (array[i] === 2) {
        letterArray.push('C')
        letterC++

    }
    if (array[i] === 3) {
        letterArray.push('D')
        letterD++
    }
}

console.log('Raidžių masyvas: ', letterArray)
console.log('Masyve yra raidžių A:', letterA)
console.log('Masyve yra raidžių B:', letterB)
console.log('Masyve yra raidžių C:', letterC)
console.log('Masyve yra raidžių D:', letterD)


console.log('2 užduotis')

console.log(letterArray.sort())

console.log('3 užduotis')


const string = 'ABCD';
const firstArray = [];
const secondArray = [];
const thirdArray = [];

for (let i = 0; i < 200; i++) {
    let letter = string[rand(0, string.length - 1)];
    firstArray.push(letter);

    letter = string[rand(0, string.length - 1)];
    secondArray.push(letter);

    letter = string[rand(0, string.length - 1)];
    thirdArray.push(letter);
}


const masyvas = [];

for (let i = 0; i < firstArray.length; i++) {
    masyvas.push(firstArray[i] + secondArray[i] + thirdArray[i]);
}

console.log(masyvas);

console.log('4 užduotis')

let array1 = []
let array2 = []

for (let i = 0; i < 100; i++) {
    let number = rand(100, 999);
    let neunikalus = array1.includes(number);
    if (neunikalus === false) {
        array1.push(number)
    }

}


for (let i = 0; i < 100; i++) {
    let number = rand(100, 999);
    let neunikalus = array2.includes(number);
    if (neunikalus === false) {
        array2.push(number)
    }
}


console.log('Pirmas masyvas su unikaliomis reikšmėmis: ', array1)
console.log('Antras masyvas su unikaliomis reikšmėmis: ', array2)

console.log('5 užduotis')

let array3 = [];

for (let i = 0; i < array1.length; i++) {
    let number = array1[i];
    let neunikalus = array2.includes(number)
    if (neunikalus === false) {
        array3.push(number)
    }
}

console.log('Reišmės, kurios yra pirmame masyve, bet nėra antrame:', array3)

console.log('5 užduotis')

let array4 = [];

for (let i = 0; i < array1.length; i++) {
    let number = array1[i];
    let neunikalus = array2.includes(number)
    if (neunikalus === true) {
        array4.push(number)
    }
}

console.log('Reišmės, kurios kartojasi abiejuose masyvuose:', array4)
