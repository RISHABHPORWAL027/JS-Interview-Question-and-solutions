/* 1) Clouser example */ 
/* 
Callbacks and closures are used frequently in JavaScript. Callbacks are functions that are 
passed into another function as an argument. Closures are functions that are nested in 
other functions, */
/* 

You have a closure when a function reads or modifies the value of a variable defined outside its context. You use the value of the variable value that was defined outside of the function itself. */


function multiply(a)
{
		return function(b){
    	return function(c){
      	return (a*b*c)
      } 	
   }
}
console.log(multiply(2)(3)(4))


