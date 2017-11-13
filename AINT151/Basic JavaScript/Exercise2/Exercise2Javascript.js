
function MakeTextSmaller()
{
	var element = document.getElementById("textSize");
	element.style.fontSize = "5px";
}


function ReplaceText()
{
	var element = document.getElementById('placeholderText');
	element.innerHTML = "My new text!";
}



function TurnLightOn()
{
	var element = document.getElementById("lightBulb");
	element.src = "img/bulb-on.png";
}

function TurnLightOff()
{
	var element = document.getElementById("lightBulb");
	element.src = "img/bulb-off.png";
}
