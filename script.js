let id = 0;
let firstName = "Jonny";
let lastName = "BeGood";
let firstName2 = "Bob";
let lastName2 = "Saget";

// CREATE A FUNCTION THAT CREATES A NEW ID AND PLACES FIRST NAME AND LAST NAME TOGETHER
// PA - parameters at the declaration; arguments at the invocation
function createID(firstName, lastName){
    console.log("with concatenation" + firstName + " " + lastName);
    console.log(`with template literals: ${firstName} ${lastName}`)
    console.log(++id);
}

createID(firstName, lastName);
//createID(firstName, lastName);