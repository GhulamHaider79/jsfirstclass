// Chapter 1 "ALERTS"

// Question 1 Write a script to greet your website visitor using JS alert box.

alert("helo smit");

// Question 2 Write a script to display following message on your web page:

alert("Err! please enter a valid password ");

// Question 3 Write a script to display following message on your web page: (Hint : Use line break)

alert("Welcome to JS land... \n Happy Coding! ");

// Question 4. Write a script to display following messages in sequence:

alert("Welcome to JS");

alert("Prevent this page from creating additional dailoge.");

//Question 5. Generate the following message through browser’s developer console:

console.log("Hello... I can run JS through my web browser's console");


// chapter 2  "VARIABLES FOR STRINGS"

// Question 1. Declare a variable called username.

var username =("Haider");
alert(username);

// Question 2. Declare a variable called myName & assign to it a string that represents your Full Name.

var myName = ("Ghulam Haider");
alert(myName);

// Question 3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.

var message = (" Hello World");
alert(message);

// Question 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.

var name = ("johne Doe");
var age = ("16 years");
var certificate = ("web & app developer")

alert(name);
alert(age);
alert(certificate);

// Question 5. Write a script to display the following alert using one JS variable:

var food = ("PIZZA \n PIZZ \n PIZ \n PI \n P");
alert(food);

//Question 6. Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)

var email = ("My Email is");
var myEmail = ("Ghulamhaider11201@gmail.com");
var fullEmail = email + (" " + myEmail);
alert(fullEmail);


//Question 7. Declare a variable called book & give it the value
// “A smarter way to learn JavaScript”. Display the following message in an alert box:

var book = ("“A smarter way to learn JavaScript”");
var mybook = (" I am trying to learn from book ");

var book1st = mybook + ("" + book);
alert(book1st)

//Question 8 Write a script to display this in browser through JS

document.getElementById("pera").innerHTML = "Yah! I can write HTML content through javascript" ;



// Question 9. Store following string in a variable and show in alert and browser through JS

var pattern = ("“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”");

alert(pattern);



// chapter 3 "VARIABLES FOR NUMBERS"


//Question 1. Declare a variable called age & assign to it your age. Show your age in an alert box.

var myAge = ("I am 38 year old");

alert(myAge);

//Question 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You have visited this site N times”.

var count =(15)
alert("you have visited this sites"  +"" + count + ""+ "times");

// Question Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:

var yearOfBirth = ("My birth year is 1986 </br> data type of my ddeclard variable is number ");
document.write(yearOfBirth);


// Question 4. A visitor visits an online clothing store
//www.xyzClothing.com . Write a script to store in variables the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.


var customerName = (" John Doe")
var order = ("ordered 5 T-shirts on XYZ Clothing store")

var customerData = (customerName+ "" + "" + order)
document.write(customerData)


