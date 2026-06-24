// a varible is a place that stores values and data typs are  strings or floats or integrs or bollean

box = 10
box2 = "coffee"
box3= 2.1
box4= true

console.log(box,box2,box3,box4)


// a function is a block of code that is meant to do sepcfic job or its reusble function and an array stores diverse values 
// strings and integrs when they are changed inside the function the changes remains inside it and the outer values stays the same
// when an array is being inserted as an arugemnt and changed the inside and the out side values are changed too
function numberstest(num) {
    return num * num
};

console.log(numberstest(10))

function anarray(validnmber) {
    return validnmber[0] = 30
};

varible = [45]

console.log(varible)
console.log(anarray(varible))
console.log(varible)



// if else is a condtion that where (if) is true then it excute the (if) values and stops, (if) was false then goes to second condtion which is (else)


x = 1

if (x === 19) {
    console.log("the x is indeed 10!")

    
} 
else {
    console.log("nah it's not")
}

// for, is an iteration that happens until the condtion is being satisfied, for (initialization; condtion; afterthought ).

for (let x = 0; x <= 5; x++) {

    console.log(x)
}

// scope is in 3 types 



// 1-(global it means outside and its ok to use it anywhere.)
x = 1 


// 2-(inside a function scope it means it can be used only inside it )

function see() {
    x = 1
}


// 3- )module scope it means every js file has its own code and varibles unless you shared it via import and export) 



//Sandbox Drill Write a script that checks a number input and prints whether it is prime or odd.

// make the x list numbers until 10 
// make the x shows the odd numbers
for (let x = 0; x <= 10; x++ ) {
    let odd = x % 2

    if (odd > 0) {

        console.log(x)
    } 
    
}


// sprint gate keeper challenge is on math-game file