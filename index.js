/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge = 18 ;
let age = 20;
if (age > votingAge){
    console.log(true);
}



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)


let oneFirst = 18;
let twoSec = 20;
    if (twoSec > oneFirst){
    console.log("oneFirst= ",oneFirst=twoSec);
    }


//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method





//Task d: Write a function to multiply a*b 

function Multi (a, b){
    return a *b;
}
console.log (Multi(8, 9));



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
let myAge ;
let dogAge = 7 ; 
function myDog (myAge){
    return "My age in dog's age is" + " " + myAge * dogAge ; 
}
console.log(myDog(24));
// // /************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

function dogFood (dogWeight, AgeinM){
    if(dogWeight <= 5 && AgeinM >= 12 ){
        return (dogWeight * 0.05 );
    }else if(dogWeight === 6 || dogWeight <=10 && AgeinM >= 12){ return (dogWeight * 0.04)
    }else if (dogWeight === 11 || dogWeight <= 15 && AgeinM>=12){
        return (dogWeight *0.03)
    }else if(dogWeight >15 && AgeinM >=12) {
        return (dogWeight *0.02)
    }else if (dogWeight && AgeinM === 2 || AgeinM <=4){
        return (dogWeight * 0.1)
    }else if (dogWeight && AgeinM === 4 || AgeinM <=7){
        return (dogWeight * 0.05)
    }else if (dogWeight && AgeinM ===7 || AgeinM <=12){
        return (dogWeight * 0.04)
    }
} console.log ((dogFood (15, 12)));

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  




/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 
function myHand(myOwn){
    let comHand= Math.floor((Math.random() * 3)+1);
    if (comHand === 2 && myOwn){
        return "I win";
    }else if (comHand===1 && myOwn){
        return "I lost";
    }else if (comHand===0 && myOwn){
        return "Tie"
    }
} console.log(myHand(2))

  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
function MiConvert (km){
    return Math.abs(km * 0.621271)
}
console.log(MiConvert(5))



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function CmConve(foot){
    return Math.abs(foot * 30.48)
}

console.log(CmConve(9))

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  




/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
function myGrade(grade)  {
    if (grade >= 90){
        return 'Your grade is A'
    }else if (80<= grade && grade < 90 ){
        return "Your grade is B"
    }else if (70 <=  grade && grade <80){
        return "Your grade is C"
    }else if (60 <= grade && grade < 70){
        return "Your grade is D"
    }else if (grade < 60 ){
        return "Your grade is F"
    }
}

  console.log(myGrade(92))
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object 