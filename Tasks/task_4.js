function validate(psw){
    var allLetters = /^[a-zA-Z]+$/;
    var strnum = /[a-zA-Z]+[0-9]/;
    var number = /^[0-9]*[.]?[0-9]*$/;
    var special = /[a-zA-Z]+[(@!#\$%\^\&*\)\(+=._-]{1,}/;
    if (allLetters.test(psw)) {
        console.log("0");
    }
    else if(number.test(psw)) {
        console.log("1");
    }
    else if(strnum.test(psw)){
        console.log("2");
    }
    else if(special.test(psw)){
        console.log("3");
    }
    else 
        console.log("invalid password");   
}
console.log(validate("21"));