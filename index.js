function XO(str) {
    //code here
str = str.toLowerCase();
  let result = false;
  let InpX = str.match(/x/g);
  let InpO = str.match(/o/g);
  console.log('No of x in Input: ' + InpX);
  console.log('No of o in Input: ' + InpO);
if(InpX !== null && InpO !== null) {
    if(InpX.length === InpO.length) {
    result = true;
  } else {
    result = false;
  } 
}
 else {
   if(InpX === null && InpO === null) {
     result = true;
   } else {
     result = false;
   }
 }
  return result;
}

console.log(countSameNoOfXO("phgjox"));
console.log(countSameNoOfXO("phgjoxX"));