let msg = "  hello  ";
let msg1 = " he llo ";

//password  ---> trim method
let password = prompt("set your password");
let newpassword = password.trim();
console.log(newpassword);

// 2. ToUppercase method ; 3. ToLowerCase method
let name="Apna College";

let msg2 = "error"

//3. indexof Method
let str = "IloveCoding";
str.indexOf("love");

// 4. Method Chaining
let msg3 = "  hello  ";
// let newmsg = msg3.trim();
// console.log("after trim: ", newmsg);
// newmsg = newmsg.toUpperCase();
// console.log("after uppercase : ", newmsg);
let newmsg = msg.trim().toUpperCase();
console.log(newmsg);

//5. Slice: 
let idea = "apna tech future";
console.log(idea.slice(0,4));
console.log(idea.slice(0,msg.length-1));
console.log(idea.slice(-2));
console.log(idea.slice(-3));