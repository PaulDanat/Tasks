function EvenOddSum(arr) { 
    { 
         
        var even = 0, odd = 0; 
  
        for (var i = 0; i < arr.length; i++) { 
            if (arr[i] % 2 == 0) 
                even += arr[i]; 
            else
                odd += arr[i]; 
        } 
  
        console.log("Sum of even numbers: " + even); 
        console.log("Sum of odd numbers: " + odd); 
    } 
} 

var arr = [ 1, 2, 3, 4, 5, 6 ];
console.log(EvenOddSum(arr));