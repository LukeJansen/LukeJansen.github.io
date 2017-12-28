var genders = ['male','female'];

function StorePlayerData()
{

	console.log("Bob");
	var name = document.forms[0]['playername'];
	var gender = document.forms[0]['playergender'];

	localStorage.setItem("playername", name.value);
	localStorage.setItem("playergender", gender.options[gender.selectedIndex].value);
	localStorage.setItem("playerhealth", 100);
	localStorage.setItem("roomIndex", 0);
	localStorage.setItem("item", "");

	location.href ='main';
}
