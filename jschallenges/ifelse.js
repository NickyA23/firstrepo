// let food = "ice cream"
// let hunger = "hungry"

// if  (hunger == "full" && food == "ice cream") {
//     console.log( "Of course, who wouldn't")
// }
// else if (hunger == "hungry" && food == "ice cream") {
//     console.log("Yes please I'm starving. could I also have pizza")
// }
// else if (hunger =="hungry" && food == "sprouts") {
//     console.log("Actually, I can wait")
// }
// else{
//     console.log("No thanks, I'm stuffed")
// }

// let hunger = "full";

// if(hunger == "hungry") {
//     console.log("Yes please I'm straving!")
// }
// else if (hunger == "full") {
//     console.log("No thanks, I'm stuffed!")
// }
// else{
//     console.log("Oh go on then, why not!")
// }


// let music ="metal"
// if (music == "classical") {
//     console.log("Oh, how relaxing");
// } 
// else if (music == "disco") {
//     console.log("Where are my dancing shoes!");
// }
// else if (music == "dance") {
//     console.log("where's the party?");
// }
// else {
//     console.log("Turn it down");
// }

// if (4 != "4" ) {
//     console.log(true)
// }
// else{
//     console.log(false)
// }

// let age  ="14"
// if (age > 17) {
//     console.log("Yes I can serve you");
// }
// else {
//     console.log("You aren't old enough")
// }

// let food = "pizza"

// if (food == "ice cream" || food == "pizza") {
//     console.log("Yay let's eat!!!")
// }
// else if (food == "sprouts" || food == "broccoli") {
//     console.log("Ugh, no thanks")
// }
// else{
//     console.log("Okay, go on then why not.")
// }

// let country = "UK"
// let age = "15"

// if (age > "17" && country == "UK") {
//     console.log("You can learn to drive")
// }
// else if (age < "17" && country == "UK") {
//     console.log("You'll have to wait till you're old enough")
// }
// else if ( age > "17" && country == "US") {
//     console.log("You're already old enough in your country")
// }
// else{
//     console.log("Let's go for a drive !")
// }

// let weekday ="tuesday"

// if ( weekday == "saturday" || weekday == "sunday") {
//     console.log("Yay it's the weekend!!")
// }
// else {
//     console.log("Oh no, work again!")
// }

// let food = "pizza"

// switch (food) {
//     case "ice cream":
//     case "pizza":
//         console.log("Yay let's eat!");
//         break
//     case "sprouts":
//     case "broccoli":
//         console.log("Ugh, no thanks!");
//         break
//     default:
//         console.log("Okay,go on then, why not.");
// }

// let topping = "ham and pineapple";

// switch (topping){
//     case "cheese":
//     case "tomato":
//         console.log("This is a basic pizza");
//         break;
//         case "ham and pineapple":
//             case "barbecue":
//                 console.log(`${topping} is just wrong on a pizza!`);
//                 break;
//                 case "chorizo":
//                     case"pepperoni":
//                     console.log("That's my favourite !");    
// }

//     let password = "Toffee12" ;
//     console.log(password.length);
//     if (password.length < 8 ) {
//         console.log("Your password is too short");
//     } 
//     else {
//         console.log(password);
    
//  }


// function palindrome (str) {
//     // Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it
//     var re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;
    
//     var lowRegStr = str.toLowerCase().replace(re, '');
//     str.toLowerCase() = "A man, a plan, a canal. Panama".toLowerCase() = "a man, a plan, a canal. panama"
//     str.replace(/[\W_]/g, '') = "a man, a plan, a canal. panama".replace(/[\W_]/g, '') = "amanaplanacanalpanama"
//     var lowRegStr = "amanaplanacanalpanama";
       
//     // Step 2. Use the same chaining methods with built-in functions from the previous article 'Three Ways to Reverse a String in JavaScript'
//     var reverseStr = lowRegStr.split('').reverse().join(''); 
//     lowRegStr.split('') = "amanaplanacanalpanama".split('') = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
//     ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].reverse() = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
//     ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].join('') = "amanaplanacanalpanama"
//      "amanaplanacanalpanama".split('').reverse().join('') = "amanaplanacanalpanama";
//      var reverseStr = "amanaplanacanalpanama";
     
//     // Step 3. Check if reverseStr is strictly equals to lowRegStr and return a Boolean
//     return reverseStr === lowRegStr;  
    
//   }
//   console.log(palindrome);

function palindrome(str) {
  var re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, '');
  var len = str.length;
  for (var i = 0; i < len/2; i++) {
    if (str[i] !== str[len - 1 - i]) {
        return false;
    }
  }
  return true;
 }
 palindrome("A man, a plan, a canal. Panama");

 console.log(palindrome)