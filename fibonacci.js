
function fibonacci(n){
    var fibo = [0, 1]
for(i=2; i<=100; i++){
    fibo[i] = fibo[i-1] + fibo[i-2]
}
var n = fibo[n]
console.log(n)
}
fibonacci(100)