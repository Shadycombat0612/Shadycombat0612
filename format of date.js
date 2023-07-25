const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const formattedDate = `
${day}-${month}-${year},
${day}/${month}/${year},
${month}-${day}-${year},
${month}/${day}/${year}.`
console.log("different formats of representing dates = " , formattedDate)