
function isLeapYear(year) {
//     const isLeapYear = new Date(year, month, day);
// isLeapYear.setFullYear(isLeapYear.getFullYear() + 1);
    if (year % 4 == 0 && year % 100 != 0) {
    return true;
    } else if (year % 400 == 0) {
    return true;
    };
}; 
// Should I nest this within get day of week function?
function exceptionYear(year, totalCalc, month) {
    const firstTwoDigitYear = year % 100;

    if(isLeapYear(year) && month == "january" || isLeapYear(year) && month == "february") {
        totalCalc -= 1;
    };
    if (firstTwoDigitYear == 16 || firstTwoDigitYear == 20) {
        totalCalc += 6; // totalCalc = totalCalc + 6
    } else if (firstTwoDigitYear == 17 || firstTwoDigitYear == 21) {
        totalCalc += 4;
    } else if (firstTwoDigitYear == 18) {
        totalCalc += 2;
    };

    return totalCalc;
};

function getDayOfWeek(year, month, day) {
    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    const tempYear = Math.floor((year % 100) / 12);
    const rem = Math.floor((year % 100) % 12);
    const fourInRem = rem % 4;
    const dayOfMonth = day;
    const monthCode = {
        "january": 1,
        "february": 4,
        "march": 4,
        "april": 0,
        "may": 2,
        "june": 5,
        "july": 0,
        "august": 3,
        "september": 6,
        "october": 1,
        "november": 4,
        "december": 6,
    };
   
    let allNum = tempYear + rem + fourInRem + dayOfMonth + monthCode[month];
    let newCalc = exceptionYear(year, allNum, month)
    
    let finalDayOfWeek = daysOfWeek[(newCalc % 7)];

    return `${month} ${day}, ${year} is/was a ${finalDayOfWeek}.`;
};

//make calender
const makeCalender = () => {
    const year = 2022;
    const monthNames = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
    
    for (month of monthNames) {
        
        if (month == "january" || month == "march" || month == "may" || month == "july" || month == "august" || month == "october" || month == "december") {
            for (day = 1; day <= 31; day++) {
                console.log(getDayOfWeek(year, month, day));
            };
        } else if (month == "april" || month == "june" || month == "september" || month == "november") {
            for (day = 1; day <= 30; day++) {
                console.log(getDayOfWeek(year, month, day));
            };
        } else if (month == "february") {
            for (day = 1; day <= 28; day++) {
                console.log(getDayOfWeek(year, month, day));
            };
        };
    };
};

function capitalizeInput(month) {
        const monthInput = month;
        return monthInput[0].toUpperCase() + monthInput.substring(1);
};

module.exports = { exceptionYear, isLeapYear, getDayOfWeek, makeCalender, capitalizeInput };
