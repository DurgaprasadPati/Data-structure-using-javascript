(function Stack(){
    var stack=stack||[];
    return stack;
}
Stack.prototype.push= function(val){
  //pop implementation 
    stack.push(val);
}
Stack.prototype.pop = function(){
    //pop implementation 
    return stack.pop();
    }
)();
