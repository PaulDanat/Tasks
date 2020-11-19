var total = 0;

for(var i = 0; i < array.length; i++){
   total += array[i]; // this is the calculation for summing up all the values
}
var mean = total / array.length;

for(var i = 0; i < array.length; i++){
    array[i] = Math.pow((array[i]-mean),2)
 }
 