const inputtxt = document.querySelector('.form-control');

function getvalue(val) {
	// console.log(value);
	inputtxt.value += val;
}

function calculate() {
	// console.log('i am working');
	if (inputtxt.value === "") {
		alert('Please Fill Some Number');
	} else {
		// console.log(inputtxt.value);

		let getinput = document.getElementById('input').value;
		// console.log(eval(result));
		let result = eval(getinput);
		document.getElementById('input').value = result;
	}
}

function clearvalue() {
	inputtxt.value = "";
}
