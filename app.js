// Assignment # 21-25
// TASK 1
// var firstName = prompt("Enter your first name");
// var secondName = prompt("Enter your second name")
// var fullName = firstName + secondName
// alert(fullName)

// TASK # 2

// var favriouteMobile = prompt("Enter your faviourate mobile model number");
// document.write("My faviourate phone is : " + favriouteMobile + " " + "Lenght of string : " + favriouteMobile.length)

// TASK # 3

// var StringWord = "Pakistani";
// document.write("String : " + StringWord + "<br>" + "Index of 'N' : " + StringWord.indexOf("n"))

// TASK # 4

// var StringWord2 = "Hello World!";
// document.write("String : " + StringWord2 + "<br>" + "Index of 'l' : " + StringWord2.lastIndexOf("l"))

// // TASK # 5


// var StringWord3 = "Pakistani";
// document.write("String : " + StringWord3 + "<br>" + "at Index  3 : " + StringWord3.slice(3,4))

// TASK # 6

// var firstName2 = prompt("Enter your first name");
// var secondName2 = prompt("Enter your second name");
// var fullName2 = firstName2.concat(secondName2);
// alert(fullName2)

// TASK # 7

// var cityName = "Hyderabad";
// var cityNameReplace = cityName.replace("Hyderabad","Islamabad");
// document.write("City : " + cityName + "<br>" + "After replacement : " + cityNameReplace + "<br>");

// TASK # 8

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// for (i = 0; i < message.length; i++){
//     if (message.slice(i, i + 3) === "and"){
//         document.write(message.slice(0, i) + "&" + message.slice(i + 3) + "<br>")
//     }
// }

// TASK # 9

// var stringValue = "472";
// document.write("Value : " + stringValue + "<br>" + "Type : " + "String" + "<br>")
// var add = Number(stringValue) + 3
// document.write("Value : "  + add  + "<br>" +  "Type : " + "Number")

// TASK # 10
// var inputVariable = prompt("Enter something ");
// var inputVariable2 = inputVariable.toUpperCase();
// document.write("User Input : " + inputVariable + "<br>" + "Upper value : " + inputVariable2);

// TASK # 11

// var inputtitleVariable = prompt("Enter something ");
// var inputtitleVariable2 = inputtitleVariable.toString();
// document.write("User Input : " + inputtitleVariable + "<br>" + "Upper value : " + inputtitleVariable2 + "<br>");
// document.write("I dont know sir how to convert in title case kindly explain")

// TASK # 12

// var num = 35.36 ;
// var round = num + '';
// round = round.replace(".", "");
// round = parseInt(round)
// alert(round)

// TASK # 13

// var userInput = prompt("Enter your name");
// userInput = userInput.toLowerCase();
// for (var i = 0; i < userInput.length; i++){
//   if (userInput[i].charCodeAt() === 33){
//     alert("Enter correct name")
//     break
//   }
//   else if (userInput[i].charCodeAt() === 44){
//     alert("Enter correct name")
//     break
//   }
//   else if (userInput[i].charCodeAt() === 46){
//     alert("Enter correct name")
//     break
//   }
//   else if (userInput[i].charCodeAt() === 64){
//     alert("Enter correct name")
//     break
//   }

// }


// TASK # 14

// var userInput = prompt("Enter item name");
// var userInput2 = userInput.toLowerCase();
// var aArray = ["cake", "apple pie", "cookie", "chips", "patties"];
// for (i = 0; i < aArray.length; i++){
//         if (userInput2 === aArray[0]){
//                 alert(userInput + "is avialable at index" + aArray.indexOf(userInput) + " " + "in our bakery" )
//                 break
//         }
//         if (userInput2 === aArray[1]){
//             alert(userInput + "is avialable at index" + aArray.indexOf(userInput) + " " + "in our bakery" )
//             break
//         }
//         if (userInput2 === aArray[2]){
//             alert(userInput + "is avialable at index" + aArray.indexOf(userInput) + " " + "in our bakery" )
//             break
//         }
//         if (userInput2 === aArray[3]){
//             alert(userInput + "is avialable at index" + aArray.indexOf(userInput) + " " + "in our bakery" )
//             break
//         }
//         if (userInput2 === aArray[4]){
//             alert(userInput + "is avialable at index" + aArray.indexOf(userInput) + " " + "in our bakery" )
//             break
//         }
//         else {
//                 alert("Sorry this is not avaialable")
//                 break
//         }
// }

// TASK # 15

// var password = prompt("Enter password");
// if (password.length === 6){
//   alert(password)
// }


// TASK # 16
// var university = "University of Karachi";
// var universitySplit = university.split('');
// for (i = 0; i < universitySplit.length; i++){
//     document.write(universitySplit[i] + "<br>");
// }


// TASK # 17

// var PakistaniInput = "Pakistan";
// var PakistaniInputSplit = PakistaniInput.split('');
// document.write("User Input : " + PakistaniInput + "<br>" + "Last character of input : " +PakistaniInputSplit[7])

// TASK # 18

// var text = "the quick brown fox jumps over the lazy dog";
// var textSplit = text.search("the")
// document.write(textSplit + "<br>")


// Assignment # 26-30
// TASK # 1
// var decimalInput = +prompt("Enter any decimal number");
// document.write("Number : " + decimalInput + "<br>");
// var roundNumber = Math.round(decimalInput)
// document.write("Round Number : " + roundNumber + "<br>");
// var ceilValue = Math.ceil(decimalInput);
// document.write("Ceil Value : " + ceilValue)


// TASK # 2

// var negativedecimalInput = +prompt("Enter any negative decimal number");
// document.write("Number : " + decimalInput + "<br>");
// var negativeroundNumber = Math.round(decimalInput)
// document.write("Round Number : " + roundNumber + "<br>");
// var floorValue = Math.floor(decimalInput);
// document.write("Floor Value : " + ceilValue)


// TASK # 3

// var value = -4;
// var absoluteValue = Math.abs(value);
// document.write( "The absolute value of -4 is " + absoluteValue)

// var value2 = 5;
// var absoluteValue2 = Math.abs(value2);
// document.write(absoluteValue2)

// TASK # 4

// var randomNumber = Math.random() * 7;
// var floorNum = Math.floor(randomNumber)
// document.write("Random dice value : " + floorNum + "<br>");

// var randomNumber2 = Math.random() * 7;
// var floorNum2 = Math.floor(randomNumber2)
// document.write("Random dice value : " + floorNum2 + "<br>");

// TASK # 5

// var randomNum2 = Math.random() * 3;
// var floorNumber2 = Math.floor(randomNum2);
// var randomNum = Math.random() * 2;
// var floorNumber = Math.floor(randomNum);
// if (floorNumber2 === 2){
//     document.write(floorNumber2 +  "<br>" + "Random Coin value : "  + "Heads" + "<br>")
// }

// if (floorNumber === 1){
//     document.write(floorNumber + "<br>" +  "Random Coin value : "  + "Tails" )
// }


// // TASK # 6

// var random1to100 = Math.random() * 101;
// var floor1to100 = Math.round(random1to100)
// document.write("Random number between 1 and 100 : " + floor1to100 + "<br>")

// TASK # 7

// var inputWeight = +prompt("Enter your Weight in kgs"); 
// var decimal = inputWeight.toFixed(1);
// alert("The weight of user is " +  decimal + " " + "kilograms")

// TASK # 8

// var userInputNumber = +prompt("Enter any number 1 and 10 ")
// if (userInputNumber === 6){
//     alert("Congrats you win todays lucky draw")
// }
// else{
//     alert("Sorry try next time")
// }


// Assignment # 31-34

// TASK # 1
// var currentDate = new Date();
// document.write(currentDate + "<br>");

// TASK # 2
// var  monthNames = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"];
// var currentMonth = new Date();
// alert("Current month is : " + monthNames[currentMonth.getMonth()])

// TASK # 3

// var daysNames = ["Sun", "Mon", "Tue", "Wed","Thu", "Fri", "Sat"];
// var days = new Date();
// alert("Today is " + daysNames[days.getDay()])

// TASK # 4

// var days = new Date();
// var dayConvert = days.getDay()
// if (dayConvert === days.getDay(0)){
//     alert("Today is fun day")
// }
// else if (dayConvert === days.getDay(6)){
//     alert("Today is fun day")
// }
// else{
//     alert("today is " + daysNames[days.getDay()])
// }

// TASK # 5

// var allDays = new Date();
// var convertDate = allDays.getDate();
// if (convertDate < 16){
//     alert("First fifteen days of the month")
// }
// else{
//     alert("The date is last fifteen days of the month")
// }

// TASK # 6

// var currentDate2 = new Date();
// document.write("Current date is : " + currentDate2 + "<br>");
// var milliSeconds = currentDate2.getTime();
// document.write("Elapsed milli seconds since January 1, 1970 : " + milliSeconds + "<br>")
// var minutes = new Date();
// var miliMins = minutes.getTime();
// var minutesResult = (milliMins / 1000) / 60;
// document.write("Elapsed minutes since January 01, 1970 : " + minutesResult) 


// TASK # 7

// var checkamorPm = new Date ();
// var convertamorPm = checkamorPm.getHours();
// if (convertamorPm < 12){
//     alert("It's AM")
// }
// else{
//     alert("It's PM")
// }

// TASK # 8

// var laterDate = new Date("December 31, 2020")
// document.write(laterDate)

// TASK # 9

// var ramdanDate = new Date("Jun 18, 2015");
// var ramdanDaysmilliseconds = ramdanDate.getTime();
// var todaysDate = new Date();
// var todaysDatemilliseconds = todaysDate.getTime();
// var lessmilliseconds = todaysDatemilliseconds - ramdanDaysmilliseconds ;
// var convert =Math.floor(lessmilliseconds / (1000 * 60 * 60 * 24));
// document.write(convert + " " + "Days have passed since 1st ramdan 2015 " + "<br>")

// TASK # 10

// var dec2015 = new Date("Dec 5, 2015");
// document.write("On refrence date " + dec2015 + "<br>");
// var convertDec2015 = dec2015.getTime();
// var jan2015 = new Date("Jan 1, 2015");
// var convertJan2015 = jan2015.getTime();
// var lessbothValues = convertDec2015 - convertJan2015;
// var finalResult = Math.floor(lessbothValues / (1000 * 60));
// document.write(finalResult + " " + "seconds had passes since bigning of 2015" + "<br>")


// TASK # 11

// var dateOf2015 = new Date("Dec 5, 2015 23:09:37");
// document.write(dateOf2015 + "<br>")
// dateOf2015.setHours(22);
// document.write("Before 1 hour time was " + dateOf2015)

// TASK # 12

// var recently = new Date();
// alert("Current date : " + recently);
// recently.setFullYear(1920);
// alert("100 years back it was : " + recently)


// TASK # 13

// var age = new Date(+prompt("Enter your date of birth "));
// var ageMilliseconds = age.getTime();
// alert("Your age is : " + ageMilliseconds)
// var dob = new Date(ageMilliseconds);
// var d = dob.getFullYear()
// alert(d)


// TASK # 14

// document.write("<b> K Electric bill </b><br>");
// var customerName = " <b> Abc Customer </b>";
// document.write("Customer Name : " + customerName + "<br>")
// var monthsName =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var full = new Date();
// document.write("Month : " + "<b>" + monthsName[full.getMonth()] + "</b>  <br>");
// var numberofUnits = 410;
// document.write("Number of units : " + "<b>" + numberofUnits + "</b> <br>")
// var perUnit = 16;
// document.write("Charges per unit : <b> " + perUnit + "</b> <br>" )
// var totalCost = numberofUnits * perUnit;
// document.write("Net amount payable (With in due date) : <b>" + totalCost + "</b> <br>");
// var surCharge = 350;
// document.write("Last payment surcharge : <b>" + surCharge + "</b> <br>");
// document.write("Gross Amount Payable (After due date) : <b>" + Number(totalCost + surCharge) + "</b> <br>")

// Assignment # 35-38

// TASK # 1

// function fTime(){
//     return new Date();
// }
// document.write(fTime())

// TASK # 2

// function fullName(){
//    var firstName = prompt("Enter your first Name");
//    var lastName = prompt("Enter your last name");
//     return firstName + " " + lastName

// }
// alert(fullName())


// TASK # 3

// function addNumbers(){
//    var  a = +prompt("Enter first number");
//    var  b = +prompt("Enter second number");
//     return a + b
// }
// alert(addNumbers())

// TASK # 4 sample 1

// function calculator(firstNumber = 0, arthmeticSymbol , secondNumber = 0){
//     var firstNumber = +prompt("Enter first number");
//     var arthmeticSymbol = prompt("Enter any arthmetic symbol");
//     var secondNumber = +prompt("Enter second number");
//     if (arthmeticSymbol === "+"){
//         return firstNumber + secondNumber
//     }
//     else if( arthmeticSymbol === "-"){
//         return firstNumber - secondNumber
//     }
//     else if(arthmeticSymbol === "*"){
//         return firstNumber * secondNumber
//     }
//     else if(arthmeticSymbol === "/"){
//         return firstNumber / secondNumber
//     }
//     else if(arthmeticSymbol === "%"){
//         return firstNumber % secondNumber
//     }
// }
// document.write(calculator())

// TASK # 4 SAMPLE 2
// function calculator2(a = 0, b = 0, symbol){
//     if (symbol === "+"){
//         return a + b + "<br>"
//     }
    
   
// }
// document.write("I used + symbol for calculation num1 = 2, num2 = 6  " + "<br>")
// document.write(calculator2(a = 2, b = 6, symbol = "+"))

// TASK # 5

// function square(a, b){
//     return a ** b
// }
// alert(square(a = 2, b = 2))

// TASK # 6

// function factorial(n){
//     b = 1
//     if (n === 0 || n === 1){
//         return b
//     }
//     else {
//         return n * factorial(n - 1)
//     }
// }
// var n = 4;
// var c = factorial(n)
// document.write("the factorial value of " + " " + n + " " + "is " + c + "<br>")

// TASK # 7


// function counting(){
//   var i;
//   var iStart = +prompt("Enter first number ");
//   var iStop = +prompt("Enter second number ");
//   for (var i = iStart; i <= iStop; i++){
//     document.write(i + "<br>")
//   }
// }
// counting()

// TASK # 8

// function hypotenuse() {         // outer function  
//     base = +prompt("enter first number");
//     Perpendicular = +prompt("Enter second number ");           
//     function square(num) {     // inner function
//        return num * num; 
//     }
//     return Math.sqrt(square(base) + square(Perpendicular));
// }
// alert(hypotenuse());  

// TASK # 9

// function area(widht, height){
//     var a = widht * height
//     return a
// }
// document.write(area(2, 2) + "<br>")
// document.write( widht = 5, height = 5)


// TASK # 10

// function checkWord(){
//     var word = prompt("Enter your word");
//     var m = "";
//     for (i = word.length - 1; i >= 0;  i--){
//         m += word[i]
       
//     }
//     if (word === m){
//         return document.write(m + " " + "is a  palindrome word " + "<br>")
//     }
//     else{
//         return document.write(word + " " + "not a  palindrome word ")
//     }
// }
// checkWord()

// TASK # 11

// function titleCase(str) {
//     str = str.toLowerCase().split(' ');
//     for (var i = 0; i < str.length; i++) {
//       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//     }
//     document.write("Example strings : the quick brown fox " + "<br>")
//     return str.join(' ');
//   }
//   document.write("EXPECTED OUTPUT" + titleCase("the quick brown fox"));

// TASK # 12

// function longestWord(str2){
//     for (i = 0; i < str2.length; i++){
//         if (str2 (i, i + 11) === str2){
//           str2 = str2.slice(0, i) + "the Second World War" + str2.slice(i + 11);
//         }
      
//     }
    
// }
// console.log(longestWord("Web Development Tutorial"))


// TASK # 13


// function char_count(str, letter){
//  var letter_Count = 0;
//  for (var p = 0; p < str.length; p++){
//     if (str.charAt(p) === letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// document.write(char_count('JSResourceS.com', 'o'));

// TASK # 14
// function calCircumfrance(radius){
//   var circumfrance = 2 * (22/7) * radius;
//   return document.write("The cercumfrance is " + circumfrance.toFixed(3) + "<br>");

// }
// function calArea(radius2){
//   var area = 22/7 * (radius2 * radius2);
//   return document.write("The area is " + area.toFixed(3));
// }
// calCircumfrance(25);
// calArea(25);