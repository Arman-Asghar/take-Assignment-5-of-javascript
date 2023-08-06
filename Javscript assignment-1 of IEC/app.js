// 1. Write a script to greet your website visitor using JS alert box:
// Your code goes here
alert("hello world");



// 2. Write a script to display the following message on your web page:
// Your code goes here
let a="this is my first website";
document.write(a);
console.log(a);



// 4. Generate the following message through the browser’s developer console:
// Your code goes here
console.log("Hello, this is a message generated through the browser's developer console!");



// .......................
// 1. Declaration of variable
// Declare a variable called userName.
// Your code goes here
let a = "username";
console.log(a);
document.write(a);


// 2. Declaration of variable with assigning a name
// Declare a variable called myName and assign it your name.
// Your code goes here
let myname = "Arman Asghar";
console.log(myname);
document.write(myname);



// 3. Write a script to display a message using the alert box
// Declare a variable called message and assign it the string "Hello World".
// Use the alert() method to display the value of the message variable in an alert box.
// Your code goes here
let message = "Hello World";
alert(message);




// 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.
// Create variables to store the following information about a student: stdName, stdAge, certification.
// Display each variable's value in separate alert boxes.
// Your code goes here
// Save student's bio data in JS variables
let studentName = "Arman Asghar";
let studentAge = 24;
let certification = "Bachelor of Science";
alert("Student Name: " + studentName);
alert("Student Age: " + studentAge);
alert("Certification: " + certification);




// 6. Declare a variable called email and assign to it a string that represents your Email Address.
// Use the alert() method to display a message that includes your email address.
// Your code goes here
let email = "armanjutt61@gmail.com";
alert("My email address is: " + email);



// 7. Declare a variable called book and give it the value "A smarter way to learn JavaScript".
// Use the alert() method to display a message that includes the value of the book variable.
// Your code goes here
let book = "A smarter way to learn JavaScript";
alert("The book I am reading is: " + book);


// 8. Write a script to display the following message in the browser using JS.
// Declare a variable called displayBrowse and assign it the string "Yah! I can write HTML content through JavaScript".
// Use document.write() method to display the message in the browser.
// Your code goes here
let displayBrowse = "Yah! I can write HTML content through JavaScript";
document.write(displayBrowse);



// 9. Declare a variable called age and assign it your age.
// Use the alert() method to display a message that includes your age.
// Your code goes here
let age = 24;
alert("My age is: " + age);



// 10. Declare and initialize a variable to keep track of how many times a visitor has visited a web page.
// Use the alert() method to display a message that includes the number of times the visitor has visited the page.
// Your code goes here
let visitCount = localStorage.getItem('visitCount');

if (visitCount === null) {
    visitCount = 1;
    } else {
    visitCount = parseInt(visitCount) + 1;
    }
    localStorage.setItem('visitCount', visitCount);
    alert("You have visited this page " + visitCount + " times.");



// 11. Declare a variable called birthYear and assign it your birth year.
// Use document.write() method to display a message that includes your birth year.
// Your code goes here
let birthYear = 1999;
document.write("My birth year is: " + birthYear);



// 12. A visitor visits an online clothing store www.xyzClothing.com.
// Write a script to store in variables the following information: store, visitorName, productTitle, Quantity.
// Use document.write() method to display a message that includes the information.
// Your code goes here
let store = "www.mianexport.com";
let visitorName = "Arman Asghar";
let productTitle = "Black T-Shirt";
let quantity = 2;

document.write("Welcome to " + store + "<br>");
document.write("Visitor Name: " + visitorName + "<br>");
document.write("Product Title: " + productTitle + "<br>");
document.write("Quantity: " + quantity + "<br>");



// 13. Declare and initialize an empty multidimensional array.
// Your code goes here
let multiDimensionalArray = [];



// 14. Declare and initialize a multidimensional array representing the following matrix:
// Your code goes here
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  

// 15. Write a program to print numeric counting from 1 to 10.
// Use a loop to display the numbers from 1 to 10 using document.write() method.
// Your code goes here
for (let i = 1; i <= 10; i++) {
    document.write(i + "<br>");
}


// 16. Declare different types of variables:
// Declare variables with the following names and empty values: literalArr, objectArr, stringArr, numberArr, boolArr, mixedArr.
// Initialize the stringArr variable as an empty array with one empty string element.
// Initialize the numberArr variable as an empty array.
// Initialize the mixedArr variable as an array containing a string, a number, a boolean, and an undefined value.
// Display each array variable using document.write() method on separate lines.
// Your code goes here

 let literalArr;
 let objectArr;
 let stringArr;
 let numberArr;
 let boolArr;
 let mixedArr;

 stringArr = [''];

 numberArr = [];

 mixedArr = ['Hello', 42, true, undefined];

 document.write("literalArr: " + literalArr + "<br>");
 document.write("objectArr: " + objectArr + "<br>");
 document.write("stringArr: " + stringArr + "<br>");
 document.write("numberArr: " + numberArr + "<br>");
 document.write("boolArr: " + boolArr + "<br>");
 document.write("mixedArr: " + mixedArr + "<br>");



// 17. Write a program to store 3 student names in an array.
// Take another array to store the scores of these three students.
// Calculate the percentage of each student's score and display the result using document.write() method.
// Your code goes here
let studentNames = ["Arman", "Mudassar", "Umar"];

let scores = [85, 92, 78];

let percentages = [];
for (let i = 0; i < scores.length; i++) {
let percentage = (scores[i] / 100) * 100; // Assuming scores are out of 100
percentages.push(percentage);
}

for (let i = 0; i < studentNames.length; i++) {
document.write(studentNames[i] + "'s percentage: " + percentages[i] + "%<br>");
}



// 18. Initialize an array with color names.
// Use document.write() method to display the array elements in your browser.
// Your code goes here
// Initialize an array with color names
let colorNames = ["Red", "Green", "Blue", "Yellow", "Purple"];

for (let i = 0; i < colorNames.length; i++) {
    document.write(colorNames[i] + "<br>");
}



// 19. Add new color names to the beginning and ending of the array using prompt() and unshift() or push() method.
// Add two more color names to the beginning of the array.
// Remove the first and last color names using shift() and pop() method.
// Use prompt() to ask the user to enter a color name and add it at a specific index using splice() method.
// Use prompt() to ask the user to enter a color name and remove it from the array using splice() method.
// Your code goes here




// 20. Write a program to sort the student scores in an array in ascending order using Array’s sort() method.
// Your code goes here
// Array containing student scores
let scores = [85, 92, 78, 95, 88];

scores.sort((78, 95) => 85 - 88);

document.write("Sorted Student Scores: " + scores.join('78, 95'));
