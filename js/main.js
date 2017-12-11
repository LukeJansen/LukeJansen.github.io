function OnLoad()
{
	SelectRoom(localStorage.getItem("roomIndex"));
}

function Refresh(index){
	localStorage.setItem("roomIndex", index);
	localStorage.setItem("item", item);
	location.reload();
}

function SelectRoom(roomIndex)
{
	var title = document.getElementById('roomTitle');
	var text = document.getElementById('roomText');
	var choices = document.getElementById('roomChoices');

	var inv = document.getElementById('inventory');

	var name = document.getElementById('characterName');
	var gender = document.getElementById('characterGender');
	var health = document.getElementById('characterHealth');

	var requirement = roomArray[roomIndex].requirement;

	if (localStorage.getItem("item") == ""){
		item = roomArray[roomIndex].item;
	} else{
		item = localStorage.getItem("item");
	}

	if (requirement != ""){
		if (item == requirement){
			item = "";
		} else{
			alert("You do not have what is required to enter this room!\n" + requirement);
			Refresh(lastRoom);
			return;
		}
	}
	choices.innerHTML = "";

	title.innerHTML = roomArray[roomIndex].title;

	name.innerHTML = localStorage.getItem("playername");
	health.innerHTML = "Health: "+ localStorage.getItem("playerhealth");

	switch(localStorage.getItem("playergender")){
		case "Male":
			gender.src = "img/male.png"
			break;
		case "Female":
			gender.src = "img/female.png"
			break;
	}

	for (var i = 0; i < roomArray[roomIndex].choices.length; i++ ){
		var tag = "<button class = 'button' type = 'button' onclick = '" + "Refresh(" + roomArray[roomIndex].choices[i].index + ")'" + " id = 'b" + (i % 2) + "'>" + roomArray[roomIndex].choices[i].text + "</button>";
		choices.innerHTML += tag;
	}

	inv.innerHTML = "<h1>Inventory:</h1>"
	inv.innerHTML += "<h2>" + item + "</h2><br>"

	var i = 0;
  var txt = roomArray[roomIndex].text;
	var delay = 25;

	text.innerHTML = '';

	function type() {
		if(i < txt.length){

			if (txt.charAt(i) != "<"){
				text.innerHTML += txt.charAt(i);
				//i++;
			}
			else{
				var file = "";
				//i++
				while (txt.charAt(i) != ">"){
					file += txt.charAt(i);
					//i++
				}
				console.log(file);
				var audio = new Audio(file);
				audio.volume = 1;
				audio.play();
				//i++
			}

			i++

			if (i % 6 == 0){
				var random = Math.floor(Math.random() * 4 + 1);
				var audio = new Audio('sound/keyclick' + random + '.wav');
				audio.volume = 0.1;
				audio.play();
			}

			setTimeout(type, delay);
		}
	}

	type();

	lastRoom = roomIndex;
}
