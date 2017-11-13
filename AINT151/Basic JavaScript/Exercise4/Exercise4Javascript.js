function CreatePlayer()
{
    var formElement = document.getElementById('playername');
    var detailElement = document.getElementById('name');

    detailElement.innerHTML = formElement.value;

    formElement = document.getElementById('playercolour');
    detailElement = document.getElementById('colour');

    detailElement.style.backgroundColor = formElement.value;

    formElement = document.getElementById('playerhealth');
    detailElement = document.getElementById('health');

    detailElement.innerHTML = "Health: " + formElement.value;

    formElement = document.getElementById('playerweapon');
    detailElement = document.getElementById('weapon');

    var weaponChoice = parseInt(formElement.value);

    switch (weaponChoice){
      case 1:
        detailElement.innerHTML = "Weapon: Crossbow of Much Hurting";
        break;
      case 2:
        detailElement.innerHTML = "Weapon: Broadsword of So Slicing";
        break;
      case 3:
        detailElement.innerHTml = "Weapon: Wand of Amaze Magics";
        break;
    }
}
