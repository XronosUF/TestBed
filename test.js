x = Math.random();
console.log(x);
console.log("This is a test!");
define(['parameters'], function(parameters) {
  console.log( "x = ", parameters.x );
  console.log( "y = ", parameters.y );
});
parameters.()
