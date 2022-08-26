
// types of errors
// reference error


const f = "hello"
const h = "world"
console.log(n)


/*A ReferenceError is thrown when 
one refers to a variable that is not declared and/or initialized within the current scope.
 In our case, the error message explains that the error has occurred because n is not defined. */


 a = 5;
 b = 10;

function add() {
  return n;
}

function print() {
  add();
}

print();

/*Our function print() should call on add(), which returns a variable named n,
 which currently has not been declared. The corresponding error is as follows: */

 //strack trace//
 /*The stack trace tells us that:

c is not defined in scope of add(), which is declared on line 5
add() was called by print(), which was declared on line 9
print() itself was called on line 12.
Thus the stack trace lets you trace the evolution of an error back to its origin,
 which here is the declaration of add(). */

 // Common types of errors //
 // syntax error //

 
 function helloWorld() {
    console.log "Hello World!"
  }


 /*
A syntax error occurs when the code you are trying to run is not written correctly,
 i.e., in accordance with the grammatical rules of JavaScript. For example this: */


 const str1 = "Hello";
const str2 = "World!";
const message = str1.push(str2);


/*Here, we get a TypeError with a message stating that str1.push is not a function.
 This is a common error message that confuses learners,
because we know that .push() is certainly a function!
You’ve probably used it to add items to arrays before,
but that’s the key- .push() is not a String method, it’s an Array method.
Hence, it is “not a function” that you can find as a String method. 
If we change .push() to .concat(), a proper String method, our code runs as intended!
A good note to keep in mind when faced with a TypeError is to consider the data type you are trying to run a method or operation against.
 You’ll likely find that it is not what you think,
 or the operation or method is not compatible with that type. */
