const { getFilteredObj } = require('./util');

const moment = require('moment');

const date = moment('2022-06-07T14:09:04');

//#region VARS_DEFINITION
const formatExample = date.format(
  '[On the] Do [of] MMMM, YYYY [at] hh:mm a, [I graduated from college]'
);

let year;
let fullYear;

let month;
let paddedMonth;
let monthOrdinal;
let shortMonthName;
let fullMonthName;

let dayOfMonth;
let dayOfMonthOrdinal;
let paddedDayOfMonth;

let dayOfWeek;
let dayOfWeekOrdinal;
let twoLetterDayOfWeek;
let threeLetterDayOfWeek;
let fullDayOfWeek;

let hour24;
let paddedHour24;
let hour;
let paddedHour;

let minute;
let paddedMinute;

let second;
let paddedSecond;

let AMPM;
let ampm;

let escaped;
let withoutEscaping;

let combinedSentence;
//#endregion

//#region Year
year = date.format('YY');
fullYear = date.format('YYYY');
//#endregion

//#region Month
month = date.format('M');
paddedMonth = date.format('MM');
monthOrdinal = date.format('Mo');
shortMonthName = date.format('MMM');
fullMonthName = date.format('MMMM');
//#endregion

//#region Day of Month
dayOfMonth = date.format('D');
paddedDayOfMonth = date.format('DD');
dayOfMonthOrdinal = date.format('Do');
//#endregion

//#region Day of Week
dayOfWeek = date.format('d');
dayOfWeekOrdinal = date.format('do');
twoLetterDayOfWeek = date.format('dd');
threeLetterDayOfWeek = date.format('ddd');
fullDayOfWeek = date.format('dddd');
//#endregion

//#region 24 Hour
hour24 = date.format('H');
paddedHour24 = date.format('HH');
//#endregion

//#region Hour
hour = date.format('h');
paddedHour = date.format('hh');
//#endregion

//#region Minute
minute = date.format('m');
paddedMinute = date.format('mm');
//#endregion

//#region Second
second = date.format('s');
paddedSecond = date.format('ss');
//#endregion

//#region AM/PM
ampm = date.format('a');
AMPM = date.format('A');
//#endregion

//#region Escaping formats
escaped = date.format('[Birthday]');
withoutEscaping = date.format('Birthday');
//#endregion

//#region Combining Formats
// On the 7th of June, 2022 at 01:06 am, I graudated from college
combinedSentence = date.format(
  '[On the] Do [of] MMMM, YYYY [at] HH:MM a , [I graduated from college]'
);
//#endregion

console.log(formatExample);

console.table(
  getFilteredObj({
    year,
    fullYear,

    month,
    paddedMonth,
    monthOrdinal,
    shortMonthName,
    fullMonthName,

    dayOfMonth,
    paddedDayOfMonth,
    dayOfMonthOrdinal,

    dayOfWeek,
    dayOfWeekOrdinal,
    twoLetterDayOfWeek,
    threeLetterDayOfWeek,
    fullDayOfWeek,

    hour24,
    paddedHour24,
    hour,
    paddedHour,

    minute,
    paddedMinute,

    second,
    paddedSecond,

    AMPM,
    ampm,

    escaped,
    withoutEscaping,

    combinedSentence,
  })
);
