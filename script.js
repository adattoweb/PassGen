let rempar = document.getElementById('rempar')
let lengthmes = document.getElementById("length")
let letters = document.getElementById("letters")
let lettersCAPS = document.getElementById("lettersCAPS")
let numbers = document.getElementById("numbers")
let special = document.getElementById("special")
let chars = document.getElementById("char")


let password = document.getElementById("password")

function startGen(){

	// Перевірка
	if(!lengthmes.value || !letters.checked && !numbers.checked && !special.checked && !lettersCAPS.checked){
		console.error("You need to the fill the field timer and length or one of the three checkboxes must be completed.");
		document.getElementById('fill').style.display="block";
		document.getElementById('oneof').style.display="block";
		setTimeout(function(){
		document.getElementById('fill').style.display="none";
		document.getElementById('oneof').style.display="none";
		}, 6000)
		return false;
	}
	if(lengthmes.value > 40){
		console.error("Max length value is 40")
		document.getElementById('maxlen').style.display="block";
		setTimeout(function(){
		document.getElementById('maxlen').style.display="none";
		}, 6000)
		return false
	}
	// Генерація паролю
let letPas = '';
let letCapsPas = '';
let numPass = '';
let specPas = '';
let charsPas = '';

if (letters.checked) { 
  letPas = "abcdefghijklmnopqrstuvwxyz"; 
}
if (lettersCAPS.checked) { 
  letCapsPas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
}
if (numbers.checked) { 
  numPass = "0123456789"; 
}
if (special.checked) { 
  specPas = "~!@#№$%^&"; 
}
if (chars.checked) { 
  charsPas = "+-*/(){}="; 
}

// Визначаємо доступні категорії
let categories = [];
if (letPas) categories.push(letPas);
if (letCapsPas) categories.push(letCapsPas);
if (numPass) categories.push(numPass);
if (specPas) categories.push(specPas);
if (charsPas) categories.push(charsPas);

for (let i = 0; i < lengthmes.value; i++) {
  if (categories.length > 0) {
    let randCategory = categories[Math.floor(Math.random() * categories.length)];
    let randomIndex = Math.floor(Math.random() * randCategory.length);
    password.innerHTML += randCategory[randomIndex];  }
}
	rempar.style.display = "flex";

}
function stopGen(){
	rempar.style.display = "none";
	password.innerHTML = "";
}
