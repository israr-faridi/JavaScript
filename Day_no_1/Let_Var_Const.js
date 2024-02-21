const accountId = 1445533;
let accountEmail="Babo@example.com";
var accountPassword="151000";
accountCity="Karachi";
let accountState;

// accountId=999; // not Allowed

/* 
Prefer not to use var
because of issue in block scope and functional scope
*/
accountEmail="Nana@gmail.com"
accountPassword="6699"
accountCity="Lahore"

console.table([accountEmail,accountPassword,accountCity,accountState])