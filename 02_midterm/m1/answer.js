3
// Javascript engine push the object.method function on top of the callback function of the call stack,
// it first run the obeject.method function, when it's done, it pop off the call stack,
// then the callback function is executed.