const moment = require("moment");
const { getFilteredObj } = require("./util");

//#region VARIABLES
let rightNow;
let stringInit;
let objectInit;
let arrayInit;
let timestampInit;
let dateInit;
let momentInit;
let parsedZone;
let removedZone;
let isValid;
let inValidAt;
//#endregion

//#region Formats
rightNow = moment();
stringInit = moment("2022-10-10T10:10:10");
objectInit = moment({
  year: 2022,
  month: 11,
  day: 10,
});
arrayInit = moment([2022, 11, 11, 10, 10, 10]);
timestampInit = moment(1665378610000);
dateInit = moment(new Date());
momentInit = moment(moment());
//#endregion

//#region Parse Zone
parsedZone = moment.parseZone("2022-10-10T10:00:00-05:00");
removedZone = moment("2022-10-10T10:00:00-05:00");
//#endregion

//#region Validation
isValid = moment("2022-10-10").isValid();
inValidAt = moment("3000-12-30T23:30:30").invalidAt();
//#endregion

console.table(
  getFilteredObj({
    rightNow: rightNow?.format(),
    stringInit: stringInit?.format(),
    objectInit: objectInit?.format(),
    arrayInit: arrayInit?.format(),
    timestampInit: timestampInit?.format(),
    dateInit: dateInit?.format(),
    momentInit: momentInit?.format(),
    parsedZone: parsedZone?.format(),
    removedZone: removedZone?.format(),
    isValid,
    inValidAt,
  })
);
