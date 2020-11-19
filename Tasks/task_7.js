function StandardDeviation(numbersArr) {
  var total = 0;
  for(var key in numbersArr) 
     total += numbersArr[key];
  var meanVal = total / numbersArr.length;
  var SDprep = 0;
  for(var key in numbersArr) 
     SDprep += Math.pow((parseFloat(numbersArr[key]) - meanVal),2);
  var SDresult = Math.sqrt(SDprep/numbersArr.length);
  return SDresult;
  
}
console.log(StandardDeviation([9, 2, 5, 4, 12, 7, 8, 11, 9, 3, 7, 4, 12, 5, 4, 10, 9, 6, 9, 4]))