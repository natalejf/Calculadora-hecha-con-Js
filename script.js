document.getElementById("n1").addEventListener("click",n1);
document.getElementById("n2").addEventListener("click",n2);
document.getElementById("n3").addEventListener("click",n3);
document.getElementById("n4").addEventListener("click",n4);
document.getElementById("n5").addEventListener("click",n5);
document.getElementById("n6").addEventListener("click",n6);
document.getElementById("n7").addEventListener("click",n7);
document.getElementById("n8").addEventListener("click",n8);
document.getElementById("n9").addEventListener("click",n9);
document.getElementById("n0").addEventListener("click",n0);

document.getElementById("s").addEventListener("click",o1);
document.getElementById("r").addEventListener("click",o2);
document.getElementById("d").addEventListener("click",o3);
document.getElementById("m").addEventListener("click",o4);
document.getElementById("sr").addEventListener("click",showResult);

function n1 () {
	var actual = document.getElementById('resultado').innerHTML;
	var sumado = document.getElementById("n1").innerHTML;
	document.getElementById("resultado").innerHTML = actual + sumado
}

function n2 () {
	var actual = document.getElementById('resultado').innerHTML;
	var sumado = document.getElementById("n2").innerHTML;
	document.getElementById("resultado").innerHTML = actual + sumado
}

function n3 () {
	var actual = document.getElementById('resultado').innerHTML;
	var sumado = document.getElementById("n3").innerHTML;
	document.getElementById("resultado").innerHTML = actual + sumado
}

function n4 () {
	var actual = document.getElementById('resultado').innerHTML;
	var sumado = document.getElementById("n4").innerHTML;
	document.getElementById("resultado").innerHTML = actual + sumado
}

function n5 () {
	var actual = document.getElementById('resultado').innerHTML;
	var sumado = document.getElementById("n5").innerHTML;
	document.getElementById("resultado").innerHTML = actual + sumado
}

function n6 () {
	var actual = document.getElementById('resultado').innerHTML;
	var sumado = document.getElementById("n6").innerHTML;
	document.getElementById("resultado").innerHTML = actual + sumado
}

function n7 () {
	var actual = document.getElementById('resultado').innerHTML;
	var sumado = document.getElementById("n7").innerHTML;
	document.getElementById("resultado").innerHTML = actual + sumado
}

function n8 () {
	var actual = document.getElementById('resultado').innerHTML;
	var sumado = document.getElementById("n8").innerHTML;
	document.getElementById("resultado").innerHTML = actual + sumado
}

function n9 () {
	var actual = document.getElementById('resultado').innerHTML;
	var sumado = document.getElementById("n9").innerHTML;
	document.getElementById("resultado").innerHTML = actual + sumado
}

function n0 () {
	var actual = document.getElementById('resultado').innerHTML;
	var sumado = document.getElementById("n0").innerHTML;
	document.getElementById("resultado").innerHTML = actual + " " + sumado + " "
}

function o1 () {
	var actual = document.getElementById('resultado').innerHTML;
	var sumado = document.getElementById("s").innerHTML;
	document.getElementById("resultado").innerHTML = actual + sumado
}

function o2 () {
	var actual = document.getElementById('resultado').innerHTML;
	var sumado = document.getElementById("r").innerHTML;
	document.getElementById("resultado").innerHTML = actual + sumado
}

function o3 () {
	var actual = document.getElementById('resultado').innerHTML;
	var sumado = document.getElementById("d").innerHTML;
	document.getElementById("resultado").innerHTML = actual + sumado
}

function o4 () {
	var actual = document.getElementById('resultado').innerHTML;
	var sumado = document.getElementById("m").innerHTML;
	document.getElementById("resultado").innerHTML = actual + sumado
}

function showResult () {
	var actual = document.getElementById('resultado').innerHTML;
	var suma = actual.indexOf("+");
	var resta = actual.indexOf("-");
	var div = actual.indexOf("÷");
	var mult = actual.indexOf("x");
	

	if (suma !== -1) {
		arr = actual.split("+",2);
		num = parseInt(arr[0]) + parseInt(arr[1]);
		document.getElementById("resultado").innerHTML = num;
	} else if (resta !== -1) {
		arr = actual.split("-",2);
		num = arr[0] - arr[1];
		document.getElementById("resultado").innerHTML = num;
	} else if (div !== -1) {
		arr = actual.split("÷",2);
		num = arr[0] / arr[1];
		document.getElementById("resultado").innerHTML = num;
	} else if (mult !== -1) {
		arr = actual.split("x",2);
		num = arr[0] * arr[1];
		document.getElementById("resultado").innerHTML = num;
	}
}	


