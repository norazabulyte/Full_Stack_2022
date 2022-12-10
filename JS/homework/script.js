console.log('Namų darbai 11-30')

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const nameac = 'Tom';
const surname = 'Hanks';
if (nameac.length < surname.length) {
    console.log(nameac)
}

const myname = 'Nora';
const mysurname = 'Zabulytė';
const year = '1998';
const thisyear = '2022';
const myage = (thisyear - year)

console.log('Aš esu ' + myname + ' ' + mysurname + '. Man yra', myage, 'metai.')


const string = ('Once upon a time in hollywood');
newString = string.replaceAll('o', '*',).replaceAll('O', '*')
console.log(newString);


const actorname = 'Tom';
const actorname2 = 'Hanks';
const actorname3 = actorname[0] + actorname[1] + actorname[2] + actorname2[2] + actorname2[3] + actorname2[4];
console.log(actorname3);

const random1 = rand(0, 2);
const random2 = rand(0, 2);
const random3 = rand(0, 2);
const random4 = rand(0, 2);

let nuliai = 0;
let vienetai = 0;
let dvejetai = 0;

if (random1 === 0) {

    nuliai++;
}
if (random2 === 0) {

    nuliai++;
}
if (random3 === 0) {

    nuliai++;
}
if (random4 === 0) {

    nuliai++;
}

if (random1 === 1) {

    vienetai++;
}
if (random2 === 1) {

    vienetai++;
}
if (random3 === 1) {

    vienetai++;
}
if (random4 === 1) {

    vienetai++;
}

if (random1 === 2) {

    dvejetai++;
}
if (random2 === 2) {

    dvejetai++;
}
if (random3 === 2) {

    dvejetai++;
}
if (random4 === 2) {

    dvejetai++;
}
console.log('Gauti skaiciai:', random1, random2, random3, random4);
console.log('Gauti rezultatai:', nuliai, vienetai, dvejetai);


// --------------------------------------

console.log('Namų darbai 12-01')


const number1 = rand(0, 4);
const number2 = rand(0, 4);

let division = number1 / number2;

if (number1 >= number2) {
    console.log('Rezultatas:', division.toFixed(2))
}
else (
    console.log('Rezultatas:', division.toFixed(2)))




const actor1 = 'Tom';
const actor2 = 'Hanks';
let actor3 = actor1.substring(0,1) + actor2.substring(0,1)

console.log(actor3)


const skaicius1 = rand(0, 25);
const skaicius2 = rand(0, 25);
const skaicius3 = rand(0, 25);

console.log(skaicius1, skaicius2,skaicius3)

let didziausias = Math.max(skaicius1, skaicius2, skaicius3);
let maziausias = Math.max(skaicius1, skaicius2, skaicius3);

if(skaicius1!==maziausias && skaicius1!==didziausias)
        average=skaicius1;
    else if(skaicius2!==maziausias && skaicius2!==didziausias)
        average=skaicius2
    else
        average=skaicius3

        console.log('Vidurinė reikšmė:', average);



let abc="abcdefghijklmnopqrstuvwxyz"
let size=abc.length-3;

let rnumber=rand(0,size);
let rnumber2=rand(0,size);
let rnumber3=rand(0,size);

let newString1=abc.charAt(rnumber)+abc.charAt(rnumber2)+abc.charAt(rnumber3);
console.log(newString1);
