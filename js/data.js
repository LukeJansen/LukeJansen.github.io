var item = ""
var lastRoom = 0

var roomArray = [
	{
		title:'Waking Up',
		text:'Your eyes slowly open, your head is pounding. You have no recollection of the previous nights events. You try to stand up but a sharp pain from your side forces you back to the floor. You move your hand to your side, looking down your clothing is soaked in blood. Looking around you discover you are in a dark alleyway, only illuminated by the neon spill from the street. There is only one way out of the alleyway and next to you is a industrial waste bin.',
		choices:[
			{
				text:'Search the waste bin',
				index:1
			}
		],
		item: "",
		requirement:""
	},
	{
		title:'The Waste Bin',
		text:'After searching the waste bin you find some old clothes that have been thrown out. You rip up the fabric and use it to bandage your side. You also find a transportation card that allows you to use the city transport.',
		choices:[
			{
				text:'Leave the alleyway',
				index:2
			}
		],
		item: "Transportation Card",
		requirement:""
	},
	{
		title:'Leaving the alleyway',
		text:'As you leave the alleyway you are blinded by the neon sights around you. The street is bustling with people and you find yourself being pushed around the crowd.',
		choices:[
			{
				text:'Go left',
				index:3
			},
			{
				text:'Go right',
				index: 4
			}
		],
		item: "",
		requirement:""
	}
]
