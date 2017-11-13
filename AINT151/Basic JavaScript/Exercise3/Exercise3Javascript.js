var isLightOn = false;
function ToggleLight()
{
	var element = document.getElementById('lightBulb');
	console.log(isLightOn);
	if (isLightOn){
		isLightOn = false;
		element.src = "img/bulb-off.png";
	} else {
		isLightOn = true;
		element.src = "img/bulb-on.png";
	}
}

function AddNumbers(num1, num2){
	var element = document.getElementById('numbers');
	element.innerHTML = num1+num2;
}
