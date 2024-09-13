/*if statement*/
//In programming, we can also perform a task based on a condition using an if statement:

let score = 90;
if(score >= 90)
{
 console.log("You passed!");
}
/*else statement*/
/*If we wanted to add some default behavior to the if statement,
 we can add an else statement to run a block of code when the condition evaluates to false. */
 let sale = true;

sale = false;

if(sale) {
  console.log('Time to buy!');
}
else
{
 console.log("Time to wait for a sale.");
}

/*Comparison Operator */
/*Comparison operators compare the value on the left with the value on the right*/
let hungerLevel=7;

if(hungerLevel>7) //this condition is false
{
  console.log("Time to eat!")
}
else
{
  console.log("We can eat later!") //this message is displayed
}
//Logical Operator
/*Working with conditionals means that we will be using booleans, true or false values. 
In JavaScript, there are operators that work with boolean values known as logical operators. */
//When we use the && operator, we are checking that two things are true:
let stopLight="green";

let pedestrians = 0;
if (stopLight === 'green' && pedestrians === 0)
     {
    console.log('Go!');
  } else {
    console.log('Stop');
  }
  //If we only care about either condition being true, we can use the || operator:
  let day="Sunday";
  if (day === 'Saturday' || day === 'Sunday') {
    console.log('Enjoy the weekend!');
  } else {
    console.log('Do some work.');
  }
//The ! not operator reverses, or negates, the value of a boolean:
let excited = true;
console.log(!excited); // Prints false

let sleepy = false;
console.log(!sleepy); // Prints true
/*Truthy and Falsy*/
/*Sometimes, you’ll want to check if a variable exists 
and you won’t necessarily want it to equal a specific value — 
you’ll only check to see if the variable has been assigned a value.*/

let athleteName="Anitha";
if (athleteName) {
  console.log("The athlete's name is " + athleteName);
} else {
  console.log("The athlete's name is not set.");
}
/*So which values are falsy— or evaluate to false when checked as a condition? 
The list of falsy values includes: 0,"",NaN(Not a Number),undefined*/
let numberOfApples = 0;

if (numberOfApples){
   console.log('Let us eat apples!');
} else {
   console.log('No apples left!'); // Prints 'No apples left!' cause condition is falsy
}

//Truthy and Falsy Assignment
/* Say you have a website and want to take a user’s username to make a personalized greeting.
 Sometimes, the user does not have an account, making the username variable falsy. 
The code below checks if username is defined and assigns a default string if it is not:*/ 
let username = '';
let defaultName = username || 'Stranger';

console.log(defaultName); 
//Tenary Opperator
let isNightTime = false;
isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');
//Else If Statements
let stopLight2 = 'yellow';

if (stopLight2 === 'red') {
  console.log('Stop!');
} else if (stopLight2 === 'yellow') {
  console.log('Slow down.');
} else if (stopLight2 === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}

/*Switch statement */
let athleteFinalPosition = 'first place';
switch(athleteFinalPosition)
{
 case 'first place': 
 console.log("You get the gold medal!");
 break;
 case 'second place':
 console.log("You get the silver medal!");
 break;
 case 'third place':
 console.log("You get the bronze medal!")
 break;
 default:
 console.log("No medal awarded.");
 break;
}

