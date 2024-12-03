//your JS code here. If required.
function daysOfAYear(year) {
 const leapyear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  
  // Return 366 for leap years, else 365
  return leapyear ? 366 : 365;
}
console.log(daysOfAYear(2022));
console.log(daysOfAYear(2024));
console.log(daysOfAYear(1900));
console.log(daysOfAYear(2000));