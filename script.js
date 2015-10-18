function icanhazmath1(number) {
	for(i=0; i<4; i++){
		number=number+2*i;
		console.log(number);
	}
	console.log(number);
	return number;
}

function icanhazmath2(number) {
	number=(number+7)*85/41
	console.log(number);
	return number;
}

function icanhazmath3(number) {
	while (number > 50){
		number=number/2;
	}
	if (number%2===0){
		number/=2;
		console.log(number);
		return number;
	}
	else {
		console.log(number);
		return number;
	}

}

var input = prompt("I can haz number?");

var numberinput = parseInt(input);

var output = icanhazmath2(icanhazmath3(icanhazmath1(numberinput)));

alert("I can haz maths: " + output);