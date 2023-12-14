const moment = require('moment');
const { getFilteredObj } = require('./util');

const date1 = moment('2022-10-10T10:00:00');
const date2 = moment('2022-10-10T11:00:00');

//#region VARS_DEFINITION
let isBefore;
let isSameOrBefore;
let isSame;
let isSameOrAfter;
let isAfter;
//#endregion

isBefore = date1.isBefore(date2); //it will compare entire things
isBefore = date1.isBefore(date2, 'hour');
// isBefore = date1.isBefore(date2, 'day');

//isAfter opposite of isBefore
isSame = date1.isSame(date2); //we can pass second parameter
isSameOrAfter = date2.isSameOrAfter(date1);

// A [ indicates inclusion of a value. A ( indicates exclusion. If the inclusivity parameter is used, both indicators must be passed.
// moment('2016-10-30').isBetween('2016-10-30', '2016-12-30', undefined, '()'); //false
// moment('2016-10-30').isBetween('2016-10-30', '2016-12-30', undefined, '[)'); //true
// moment('2016-10-30').isBetween('2016-01-01', '2016-10-30', undefined, '()'); //false
// moment('2016-10-30').isBetween('2016-01-01', '2016-10-30', undefined, '(]'); //true
// moment('2016-10-30').isBetween('2016-10-30', '2016-10-30', undefined, '[]'); //true

function getEarliestStartDate(dates) {
  let moments = dates.map((x) => moment(x)),
    minDate = moment.min(moments);
  return minDate.format('MM-DD-YYYY');
}

function getLatestEndDate(dates) {
  let moments = dates.map((x) => moment(x)),
    maxDate = moment.max(moments);
  return maxDate.format('MM-DD-YYYY');
}

//valid format
// ‘Mm-dd-yyyy’
// ‘Yyyy-mm-dd’

// //invalid format
// ‘Dd-mm-yyyy’
// ‘Yyyy-dd-mm’
// ‘Dd-yyyy-mm’
// ’mm-yyyy-dd’

console.table(
  getFilteredObj({
    isBefore,
    isSameOrBefore,
    isSame,
    isSameOrAfter,
    isAfter,
  })
);
