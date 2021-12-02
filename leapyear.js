function leapyear(year){
    let result = (year%4);
    if (result==0){
        console.log("This year is a Leap Year");
    }
    else{
        console.log("this is not a leap year")
    }
}
leapyear(2024);