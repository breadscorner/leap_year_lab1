// step 2: import function

const getDayOfWeek = require("./lab-two").getDayOfWeek;
const makeCalender = require("./lab-two").makeCalender;
const capitalizeInput = require("./lab-two").capitalizeInput;
const readline = require("readline-sync");

const year = readline.questionInt("Enter a year: ");
const month = capitalizeInput(readline.question("Enter a month: "));
const day = readline.questionInt("Enter a day: ");

const getDayOfWeekForUserDate = (year, month, day) => {
    console.log(getDayOfWeek(year, month, day));
};

getDayOfWeekForUserDate(year, month, day);
makeCalender();