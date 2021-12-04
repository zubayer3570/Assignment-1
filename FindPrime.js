function FindPrime(r){
    var array = []
function prime(n){
    for(i=2; i<=n; i++){
        array.push(i)
    }
}
prime(r)
for(x=0; x<array.length; x++){
    element = array[x]
    function primechecker(element){
        for(v=2; v<element; v++){
            var result = element % v
            if(result==0){
                return 0
            }
        }
        return 1
    }
    var ultimate = primechecker(element)
    if(primechecker(element)==1){
        console.log(element)
    }
}

}
FindPrime(100)