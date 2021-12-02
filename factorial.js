function factorial(input){
    result = 1
    for(input; input>0; input--){
        result = result*input
    }
    console.log(result)
}
factorial(5)

function factorial(input1){
    result = 1
    for(var i=1; i <= input1; i++){
        result = result*i
    }
    console.log(result)
}
factorial(5)

function factorial(input){
    var result = 1 
    while(input>0){
        result = result*input;
        input--;
    }
    console.log(result)
}
factorial(0)

function factiorial(input){
    if(input == 0){
        return 1;
    }
    else{
        return input*factorial(input - 1);
    }
}
var result = factorial(5)
console.log(result)