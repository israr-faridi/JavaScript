

//// Immediately Invoked Function Expressions (IIFE)

(function database() {
    // named IIFE
    console.log("Database Conneted.");
})();

((name) => {
    console.log(`Mr ${name}, Welcome to the database.`);
})("Israr")
