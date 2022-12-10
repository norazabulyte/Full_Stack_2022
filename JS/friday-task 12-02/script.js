function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//---------- 1 ------->>>>>>>

const price = 1;
const candle = rand(5, 3000);
const sale = 3;
const sale1 = 4;

let discount = (price * candle) * sale / 100;
let discount2 = (price * candle) * sale1 / 100;

if (candle < 1000) {
    console.log('Žvakių kaina:', price * candle);
    console.log('Žvakių kiekis :', candle);
}

if (candle > 1000 && candle < 1999) {
    console.log('Žvakių kaina:', (price * candle) - discount);
    console.log('Žvakių kiekis :', candle);
}

if (candle > 2000) {
    console.log('Žvakių kaina:', (price * candle) - discount2);
    console.log('Žvakių kiekis :', candle);
}
//<<<<-----------------------



//---------- 2 ------->>>>>>>

const first = rand(0, 100);
const second = rand(0, 100);
const third = rand(0, 100);

let vidurkis = (first + second + third) / 3

if (vidurkis < 90 && vidurkis > 10) {
    console.log('Vidurkis:', Math.round(vidurkis))
}

else console.log('Vidurkis didesnis už 90 ir mažesnis nei 10:', Math.round(vidurkis))



//<<<<-----------------------


//---------- 3 ------->>>>>>>
let sec;
let min;
let hours;

hours = rand(0, 23);
min = rand(0, 59);
sec = rand(0, 59);

clock = hours + ':' + min + ':' + sec;
console.log(clock);


    //<<<<-----------------------



