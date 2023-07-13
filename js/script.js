//task 1
let arrOne = [];

for (let i = 20; i <= 30; i = i + 0.5){
    arrOne.push(i);
}

alert(`********** Task 1 **********
${arrOne.join(` `)}`);

//task 2
const dollar = 27;
let arrTwo=[];

for (let i = 10; i <= 100; i = i + 10){
    arrTwo.push(`${i} dollars is ${i*dollar} hryvnias`);
}

alert(`********** Task 2 **********
${arrTwo.join(`
`)}`);

//task 3
let arrThree = [];
const numberThree = prompt(`********** Task 3 **********
Enter any integer:`);

if (isNaN(Number(numberThree))) {
    alert(`Error. It's not a number.`);
}
else if (numberThree == ``) {
    alert(`Error. You have not entered any data.`);
}
else if (numberThree == null) {
    alert(`You cliched "Cancel".`)
}
else {
    for (let i = 1; i <= 100; i++) {
        if (i ** 2 < Number(numberThree)) {
            arrThree.push(i);
        }
    }
    alert(`********** Task 3 **********
All integers from 1 to 100 whose square does not exceed the number ${numberThree}: ${arrThree}.`);
}

//task 4
let arrFour = [];
const numberFour = prompt(`********** Task 4 **********
Enter any integer:`);

if (isNaN(Number(numberFour))) {
    alert(`Error. It's not a number.`);
}
else if (numberFour == ``) {
    alert(`Error. You have not entered any data.`);
}
else if (numberFour == null) {
    alert(`You cliched "Cancel".`)
}
else {
    for (let i = Number(numberFour); i >= 0; i--) {
        if (Number(numberFour) % i == 0) {
            arrFour.push(i);
        }
    }

    if (arrFour.length > 2) {
        alert(`********** Task 4 **********
    The number ${numberFour} is NOT prime. Its divisors: ${arrFour}.`);
    }
    else {
        alert(`********** Task 4 **********
    The number ${numberFour} is prime.`);
    }
}

//task 5
const numberFive = prompt(`********** Task 5 **********
Enter any number:`);
let isIntrodToDegree = false;
let degree;

if (isNaN(Number(numberFive))) {
    alert(`Error. It's not a number.`);
}
else if (numberFive == ``) {
    alert(`Error. You have not entered any data.`);
}
else if (numberFive == null) {
    alert(`You cliched "Cancel".`)
}
else {
    for (let i = 0; Math.pow(3, i) <= Number(numberFive); i++){
        if (Math.pow(3, i) === Number(numberFive)) {
            isIntrodToDegree = true;
            degree = i;
        }
    }
    if (isIntrodToDegree) {
        alert(`********** Task 5 **********
        The number ${numberFive} can be obtained by raising the number 3 to the power of ${degree}.`);
    }
    else {
        alert(`********** Task 5 **********
    The number ${numberFive} cannot be obtained by reducing the number 3 to a certain power.`);
    }
}
