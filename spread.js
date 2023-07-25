const array1=[25, 56, 69, 78 ,99]
const array2=[56,45,86,45,21,47,56]
const mergearray=[...array1,...array2]
console.log("array1 is = " ,array1)
console.log("array2 is = " ,array2)
console.log("combined array is = ", mergearray)
function sum(mergearray) 
{
    let sum = 0;
    for (let i = 0; i < mergearray.length; i++) 
    {
      sum += mergearray[i];
    }
    return sum;
  }
 console.log(sum(array1));
 console.log(sum(array2));
 console.log(sum(mergearray));
  