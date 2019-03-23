var fn = function(x) {
  var z = 4;
  return function(y) {
    return x + y + z;
  }
}

result = fn(5)(7); // return 5 + 7 + 4

var fn2 = function(x) {
  var y = 4;
  return function(y) {
    return x + y;
  }
}

result2 = fn2(5)(7); // retrun 5 + 7

var Parent = function() {};
Parent.prototype.myFunction = function() {
  alert("parent");
}

var Child = function() {};
Child.prototype.myFunction = function() {
  alert('Child');
}
Child.prototype = new Parent();

var child = new Child();
child.myFunction();
console.log("123")
