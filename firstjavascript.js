console.log(25);

var bananaprices = 12;
console.log(bananaprices);

var string = "hello java scripts";
console.log(typeof string);

var string = "hello java scripts";
console.log(string);

var heisrich = true;
var heisbrilliant = false;

console.log(heisbrilliant);

console.log(string.indexOf("java"));

console.log(string.split("j"));

var hello = [15, 13, 18, 21, 29, 63];
console.log(hello[2])

console.log(hello.indexOf(21))

hello.push(37)
console.log(hello)

hello.shift();
console.log(hello)

hello.unshift(66)
console.log(hello)

hello.pop()
console.log(hello)

bello = hello.slice(1, 6)
console.log(bello)

var numbers = 50;
switch (numbers){
    case 50 :
        console.log("learning javascript")
        break;
    case 40 :
        console.log("learning full stack web development")
}
function math(num1, num2){
        result = num1 + num2;
        return result;
}
console.log(math(1,2))

var student = {id:500, phone:17153, address:14};
var student2 = {id:450, phone:1366, address:15};
var phoneNo = student.phone;
console.log(phoneNo);
console.log(student[phoneNo]);