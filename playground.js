var Object1 = {
  test: "Xinrui Ma"
}

var object2 = Object1;
object2.test = "override";
var object3 = {
  test: object2.test
}
object3.test = "Balalal";
console.log(object3.test); // Console.log(Balalal)
console.log(object2.test); // Console.log(override)
console.log(Object1.test); // Console.log(override);