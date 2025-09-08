function receivesAFunction(callback) {
    callback(spy);
}
function spy() {
    return "spy";
}

function returnsANamedFunction() {
return returnsANamedFunction;
}

function returnsAnAnonymousFunction() {
  return function() {};  
}