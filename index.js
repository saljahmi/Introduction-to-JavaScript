/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)


let votingAge=18;
const age=20;
if (age > votingAge) {console.log(true)};

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let name = "Somayah";
let bday = 3.13;
if (bday != 10.27 ) {name = "Someone Else"};
console.log(name);


//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let year = "1999";
console.log(Number(year) + 1);

//Task d: Write a function to multiply a*b 

function multiply(a,b){
    return a*b;
}

console.log(multiply(5,9));


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function dogYears(age){
    return age*7;
}

console.log(dogYears(25));


/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

function dogFeeder(weight, age){
    if (age >= 1){
        if(weight <=5 ){
            return weight*0.05;
        }
        else if(weight <=10){
            return weight*0.04;
        }
        else if(weight <=15){
            return 0.03*weight;
        }
        else {
            return weight*0.02;
        }
    }
    else {
        if (age <= 1/3 && age > 1/6) {
            return weight * 0.1;
        }
        else if(age <= 7/12){
            return weight*0.05;
        }
        else if(age < 1 && age > 7/12){
            return weight*0.04;
        }
    } 
}

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
console.log(dogFeeder(15,1));


/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 


// scissors = 0, rock = 1, paper = 2
function game(hand){
    if (Math.floor(Math.random() * 3 ) === 0 && hand === "scissors"){
        return "You tied!";
    }
    else if (Math.floor(Math.random() * 3) === 0 && hand === "rock"){
        return "You won!";
    }
    else if(Math.floor(Math.random() * 3) === 0 && hand === "paper"){
        return "You lost!";
    }
    else if (Math.floor(Math.random() * 3) === 1 && hand === "rock"){
        return "You tied!";
    }
    else if (Math.floor(Math.random() * 3) === 1 && hand === "paper"){
        return "You won!";
    }
    else if(Math.floor(Math.random() * 3) === 1 && hand === "scissors"){
        return "You lost!";
    }
    else if (Math.floor(Math.random() * 3) === 2 && hand === "paper"){
        return "You tied!";
    }
    else if (Math.floor(Math.random() * 3) === 2 && hand === "scissors"){
        return "You won!";
    }
    else if(Math.floor(Math.random() * 3) === 2 && hand === "rock"){
        return "You lost!";
    }
}

//for(i=0; i<20; i++){
//    console.log(game("rock"));
//}

for(i=0; i<20; i++){
   console.log( Math.floor( Math.random() * 3));
} 

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function customaryConverter(km){
    return 0.621371 * km;
}

console.log(customaryConverter(4));

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function  metricConverter(feet){
    return feet*30.48;
}

console.log(metricConverter(3));



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function annoyingSong(bottles){
    let c = bottles;
    for (let i = 0; i < bottles; i++) {
        console.log( c, "bottles of soda on the wall, " , c , "bottles of soda, take one down pass it around, " , (c-1) , "bottles of soda on the wall");
        c--;
    }
    return;
}

annoyingSong(10);


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F

function gradeCalculator(number){
    if(number<60){
        return "F";
    }
    else if(number < 70){
        return "D";
    }
    else if(number < 80){
        return "C";
    }
    else if(number < 90){
        return "B";
    }
    else {
        return "A";
    }
}

console.log(gradeCalculator(73.5));

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





