const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const currentDate = new Date();
const today= currentDate.getDay();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; 
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();
const format = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`
console.log("day of the week is =  ", daysOfWeek[today]);
console.log("current date and time =  ", format);
const complete=currentDate.toLocaleTimeString();
console.log("current date  =  ", complete);

