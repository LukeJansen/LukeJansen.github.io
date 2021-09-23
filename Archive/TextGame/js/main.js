var typing = false;
var videoFile = "";

function OnLoad()
{
	var x = document.getElementById("mobileWarning");
	x.style.display = "none";
	if (checkOrientation()){
		SelectRoom(localStorage.getItem("roomIndex"));
	} else{
		x.style.display = "block";
	}

	var span = document.getElementById('close');

	span.onclick = function() {
		var m1 = document.getElementById("mobileWarning");
		var m2 = document.getElementById("phone");
		var v = document.getElementById("video");

		v.pause();
		m1.style.display = "none";
		m2.style.display = "none";
	}
}

function Refresh(index){
	localStorage.setItem("roomIndex", index);
	localStorage.setItem("item", item);
	location.reload();
}

function checkOrientation(){
	console.log(window.innerHeight);
	if (window.innerHeight > window.innerWidth){
		return false;
	} else{
		return true;
	}
}

function SelectRoom(roomIndex){
		var title = document.getElementById('roomTitle');
		var text = document.getElementById('roomText');
		var choices = document.getElementById('roomChoices');

		var inv = document.getElementById('inventory');

		var name = document.getElementById('characterName');
		var gender = document.getElementById('characterGender');

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

		switch(localStorage.getItem("playergender")){
			case "Male":
				gender.src = "img/male.png"
				break;
			case "Female":
				gender.src = "img/female.png"
				break;
		}

		if(roomIndex == 26){
			roomArray[26].choices[0].index = localStorage.getItem("choice");
		}

		for (var i = 0; i < roomArray[roomIndex].choices.length; i++ ){
			var buttonid = "bc";
			if (roomArray[roomIndex].choices.length > 1){
				if (roomChoices.clientWidth < 325){
					buttonid = "bc";
				} else {
					buttonid = "b" + (i % 2);
				}
			}
			var tag = "<button class = 'button' type = 'button' onclick = '" + "Refresh(" + roomArray[roomIndex].choices[i].index + ")'" + " id = " + buttonid + ">" + roomArray[roomIndex].choices[i].text + "</button>";
			choices.innerHTML += tag;
			//$(".button").hide();
		}

		inv.innerHTML = "<h1>Inventory:</h1>"
		inv.innerHTML += "<h2>" + item + "</h2><br>"

		var i = 0;
	  var txt = roomArray[roomIndex].text;
		var delay = 40;

		text.innerHTML = '';

		function type() {

			typing = true;
			if(i < txt.length){

				if(txt.charAt(i) == "<"){
					var tag = "";
					while (txt.charAt(i) != ">"){
						tag += txt.charAt(i);
						i++;
					}
					tag += ">";
					text.innerHTML += tag;
					i ++;
				}
				else if (txt.charAt(i) == "#"){
					var insert = localStorage.getItem("playername");
					for(var j = 0; j < insert.length; j++){
						text.innerHTML += insert.charAt(j);
					}
					i++;
				}
				else if (txt.charAt(i) != "["){
					text.innerHTML += txt.charAt(i);
					i++;
				}
				else{
					var file = "sound/";
					i++
					while (txt.charAt(i) != "]"){
						file += txt.charAt(i);
						i++
					}
					var audio = new Audio(file);
					audio.volume = 1;
					audio.play();
					i++
				}

				if (i % 4 == 0){
					var random = Math.floor(Math.random() * 4 + 1);
					var audio = new Audio('sound/keyclick' + random + '.wav');
					audio.volume = 0.1;
					audio.play();
				}

				setTimeout(type, delay);
			} else{
				typing = false;

				if (roomIndex == 14) {
					videoFile = "video/vo1.mp4"
					setTimeout(PlayVideo, 1000);
				}
				if (roomIndex == 26) {
					videoFile = "video/vo2.mp4"
					setTimeout(PlayVideo, 1000);
				}
			}
		}

		type();

		if(roomIndex == 24){
				localStorage.setItem("choice", 27);
		}
		else if (roomIndex == 25){
				localStorage.setItem("choice", 28);
		}

		lastRoom = roomIndex;
	}

function PlayVideo(){
	var x = document.getElementById("phone");
	var v = document.getElementById("video");

	v.src = videoFile;
	x.style.display = "block";
	v.play();
}

function ReplayVideo(file){
	var v = document.getElementById("video");
	v.currentTime = 0;
	v.play();
}

window.onresize = function(event){
	if (typing){
		Refresh(localStorage.getItem("roomIndex"));
	} else{
		OnLoad();
	}
}

window.onclick = function(event){
	var m1 = document.getElementById("mobileWarning");
	var m2 = document.getElementById("phone");

	if (event.target == m1 || event.target == m2){
		event.target.style.display = "none";

		var v = document.getElementById("video");
		v.pause();
	}
}
