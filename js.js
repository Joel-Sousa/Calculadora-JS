
// Soma
function soma(){
	var valor1 = document.getElementById('valor1').value;
	var valor2 = document.getElementById('valor2').value;

	if(valor1 == "" || valor2 == ""){
		document.getElementById('resultado').innerHTML = "Preenca todos os campos";	
	}else{
	var resultado = parseInt(valor1) + parseInt(valor2);
	document.getElementById('resultado').innerHTML = resultado;
	}
}

// Subtracao
function subtracao(){
	var valor1 = document.getElementById('valor1').value;
	var valor2 = document.getElementById('valor2').value;

	if(valor1 == "" || valor2 == ""){
		document.getElementById('resultado').innerHTML = "Preenca todos os campos";	
	}else{
	var resultado = parseInt(valor1) - parseInt(valor2);
	document.getElementById('resultado').innerHTML = resultado;
	}
}

// Multiplicacao
function multiplicacao(){
	var valor1 = document.getElementById('valor1').value;
	var valor2 = document.getElementById('valor2').value;

	if(valor1 == "" || valor2 == ""){
		document.getElementById('resultado').innerHTML = "Preenca todos os campos";	
	}else{
	var resultado = parseInt(valor1) * parseInt(valor2);
	document.getElementById('resultado').innerHTML = resultado;
	}
}

// Divisao
function divisao(){
	var valor1 = document.getElementById('valor1').value;
	var valor2 = document.getElementById('valor2').value;

	if(valor1 == "" || valor2 == ""){
		document.getElementById('resultado').innerHTML = "Preenca todos os campos";	
	}else{
	if(valor2 == 0){
		alert("Digite um valor valido!");
	}else{
	var resultado = parseInt(valor1) / parseInt(valor2);
	
	document.getElementById('resultado').innerHTML = resultado;	
	}
	
	}
}

// Raiz
function raiz(){
	var valor1 = document.getElementById('valor1').value;
if(valor1 == ""){
		document.getElementById('resultado').innerHTML = "Preenca todos os campos";	
	}else{
	var resultado = Math.sqrt(parseInt(valor1));
	document.getElementById('resultado').innerHTML = resultado;	
	}
}

// Porcentagem de incremento
function porcentagem1(){
	var valor1 = document.getElementById('valor1').value;
	var valor2 = document.getElementById('valor2').value;

	if(valor1 == "" || valor2 == ""){
		document.getElementById('resultado').innerHTML = "Preenca todos os campos";	
	}else{
	var resultado = parseInt(valor1) + (parseInt(valor1) * (parseInt(valor2)/100));
	
	document.getElementById('resultado').innerHTML = resultado;	
	}
}

// Porcentagem de decremento
function porcentagem2(){
var valor1 = document.getElementById('valor1').value;
	var valor2 = document.getElementById('valor2').value;

	if(valor1 == "" || valor2 == ""){
		document.getElementById('resultado').innerHTML = "Preenca todos os campos";	
	}else{
	var resultado = parseInt(valor1) - (parseInt(valor1) * (parseInt(valor2)/100));
	
	document.getElementById('resultado').innerHTML = resultado;	
	}
}

// Exponenciacao
function exponenciacao(){
	var valor1 = document.getElementById('valor1').value;
	var valor2 = document.getElementById('valor2').value;

	if(valor1 == "" || valor2 == ""){
		document.getElementById('resultado').innerHTML = "Preenca todos os campos";	
	}else{
	var resultado = Math.pow(parseInt(valor1), parseInt(valor2));

	document.getElementById('resultado').innerHTML = resultado;	
	}
}

// Limpar
function limpar(){
	document.getElementById('valor1').value = "";	
	document.getElementById('valor2').value = "";	
	document.getElementById('resultado').innerHTML = "";	
	
}



