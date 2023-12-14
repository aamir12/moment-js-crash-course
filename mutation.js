const moment = require('moment');

const date = moment('2022-12-07T01:32:35');

// Mutates the original moment object

/*
Keys
second
minute
hour
day
week
month
quarter
year
*/

//just need to replace 'add' with above keys
//#region Adding
//date.add(10, 'year');
//#endregion

//#region Subtracting
//date.subtract(1, 'day');
//#endregion

//#region Start of
//date.startOf('day'); //start of day 12:00 am
//date.startOf('month'); //start from first day of month;
//date.startOf('hour'); // it will remove hour and seconds
//#endregion

//#region End of
// date.endOf('day');
//date.endOf('month');
//#endregion

const birthday = moment('1992-05-16');
const today = moment();
const year = today.diff(birthday, 'year');
console.log(year);

console.log(date.format());
console.log(today.quarter());
console.log(today.year());
console.log(today.week());
