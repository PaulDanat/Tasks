function change(str) {
    var re = / /gi;
         
         var newstr = str.replace(re, "%20");        
         console.log(newstr ); 
}

var str = "Apples are round, and apples are juicy .";
console.log(change(str));