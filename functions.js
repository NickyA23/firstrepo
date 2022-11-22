//const holidayDestination = (country, month) => {
//    console.log ("Yay! I'm going on holiday to ${country} in ${month}. I can't wait." )
//}

//holidayDestination ("Spain", "June")



//const inventory = (productCode, departmentName, quantity) => {
//    console.log( '${quantity} of  ${productCode} sold from ${departmentName} department, need to update stock by ${quantity}')
//}

//inventory(412345, "baked goods", 65 )

//const replenishStock = (productCode) => {
//    console.log(`Order product number ${productCode} stock is low!`)
//}

//const reducePrice =(productCode, originalPrice) => {
//    let salePrice = originalPrice /= 2
//    console.log 
//    (`Product number ${productCode} is now £${salePrice} `)
//}

//const checkStock = (productCode, quantity, originalPrice) => {
//    if (quantity <= 10) {
//        replenishStock(productCode)
//    }else if (quantity >100) {
//        reducePrice(productCode, originalPrice)
//    }else {
//        console.log("Don't order stock")
//    }
//}
//checkStock(345678, 200, 100)

//let stringLet = "let string";
///var stringVar ="var string";

//const newString = () => {
//    let stringLet = "new let string";
//    var stringVar = "new var string";

//    console.log(`Inside function: ${stringLet}`);
//   console.log(`Inside function: ${stringVar}`);
//}

//newString();

//console.log(`Outside function: ${stringLet}`);
//console.log(`Outside function: ${stringVar}`);

//function startrLet (){
//    for(let i = 0; i < 5; i++){
//        console.log(i);
//    }
//    console.log(i);
//}

//function startVar (){
//    for(var i = 0; i < 5; i++){
//        console.log(i);
//   }
//    console.log(i);
//}

//console.log("Running with let:");
//startrLet();
//console.log("Running with var:");
//startVar();

const add = (num1) => {
    return (num2) => {
        return num1 + num2;
    }
}
console.log(add(1)(2));