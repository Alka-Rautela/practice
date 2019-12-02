function addSomething (x, y) {
	result = x + y;
	return result;


}
//document.write("We are now using a js file.");
var Theresult = addSomething (400, 5);
document.write(Theresult)

var orc = {
	hair: "Green",
	age: 26,
	stomachFull: true,
	eat: function(){
		document.write("YUMMY!");
	}
};
orc.eat();
var newAge = orc.age + 2;
document.write(newAge);
document.write(orc.hair);

var hello = "Hello How Are You?";
hello = hello.length;
//cello = hello.toUpperCase();
document.write(hello);
//document.write(cello);

function changeStyle(){
	var text = document.getElementById("para").style.backgroundColor = "Blue";
}











