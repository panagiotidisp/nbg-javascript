// function log(message) {
//     console.log(message)
// }

//  function log(message) {
//     console.log(message)
// }

const log = message => console.log(message);

const error = new Error("This is an error object");
log(error.name)
log(error.message)
log(error.stack)

// // RangeError - Number of decimal digits
// let num = 7.9222;
// num = num.toFixed(1); // start adding zeros 
// log(num); 

//  // ReferenceError -- not defined, cannot access
// let a = a + b;

// // syntax error -- redeclaration
// let collect = []
// let collect = {}

// // Type Error
// let collect = {}
// collect.doSomething();

// URIError
// decodeURIComponent("%"); 


// // try ... catch
// try {
//     a++;
// } catch {
//     log("Something is wrong...")
// }

// try {
//     a++;
// } catch (error){
//     log(error)
//     log(error.name)
//     log(error.message)
// }


// // try ... catch... finally 
// try {
//     a++;
// } catch (error) {
//     log(error.message)
// } finally {
//     log("housekeeping...");
// }
