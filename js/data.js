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
	},
	{
		title:'Turning Left',
		text:'You turn left and push through the crowds, the people block your way and you cannot see ahead of you.',
		choices:[
			{
				text:'Push Through',
				index:5
			},
			{
				text:'Turn Right',
				index:4
			}
		],
		item: "",
		requirement:""
	},
	{
		title:'Turning Right',
		text:'Turning right you see a set of stairs leading down to a tube station. You go down the stairs and enter the station. You look at the tube map and see that this station provides two lines.',
		choices:[
			{
				text:'Orange Line',
				index:6
			},
			{
				text:'Blue Line',
				index:7
			}
		],
		item: "",
		requirement:""
	},
	{
		title:'Dead End',
		text:'You go to the end of the road and find a dead end there is nothing around. <br><br>Your only option is to go back the other way.',
		choices:[
			{
				text:'Turn Right',
				index:4
			}
		],
		item: "",
		requirement:""
	},
	{
		title:'Orange Line',
		text:'You follow the route to the orange line, when you get to the platform it is empty. You are the only person there. The train pulls up and you get on. This carriage is empty. You start to feel uneasy, why is the train so empty when the streets were bustling outside. You see two men dressed all in black there faces hidden in shadow walking towards you. They stop just as they reach you and pull out a device, the screen shows a picture of you. They look down at the screen in unison and then look back at you. Before you can react one of the men hits you in the side, right where your wound is. You collapse to the ground and the men attack you as you lie there defenceless. <br><br>The men both pull out knives and stab you simultaneously as you feel yourself drifting you hear  a notification sound [success.wav]from the device and you take your last breath.',
		choices:[
			{
				text:'Dead End',
				index: 8
			}
		],
		item: "",
		requirement:"Transportation Card"
	},
	{
		title: 'Blue Line',
		text: 'You follow the route to the blue line. You arrive at the platform just as the train arrives. You hurry on to the train. When you get on the train is weirdly quiet, you hear someones phone go off[tracking.wav] and they look directly at you. You avert your eyes as to not make eye contact. When you look back, she has disappeared. The train arrives at your stop and you disembark and go to street level.',
		choices: [
			{
				text: 'Street Level',
				index: 9
			}
		],
		item: "",
		requirement: "Transportation Card",
	},
	{
		title: 'Death Screen',
		text: 'You have died! <br><br>You can now restart your story but all progress will be lost!',
		choices: [
			{
				text: 'Restart',
				index: 0
			}
		],
		item: "",
		requirement: "",
	},
	{
		title: 'Street Level',
		text: 'As you leave the tube station the area is quieter than usual, you start to walk towards your home. You start to hear a high pitched ringing in your ears as you get closer to your home. It gets louder and louder as you approach. You follow the sound as you arrive at your house. The side gate has been left ajar.',
		choices: [
			{
				text: 'Go inside the house',
				index: 10
			},
			{
				text: 'Go through the side gate',
				index: 11
			}
		],
		item: "",
		requirement: "",
	},
	{
		title: 'Inside the House',
		text: 'As you enter you see that the house has been ransacked. Nothing has been taken as far as you can tell but everything has been rummaged through. Papers and objects are strewn around the room. As you enter the kitchen you see the door leading to the side alley of your house is open and the doorknob is covered in red fingerprints.',
		choices: [
			{
				text: 'Go out to the side of the house',
				index: 11
			}
		],
		item: "",
		requirement: "",
	},
	{
		title: 'Side Gate',
		text: 'You are frozen by the sight in front of you. This inexplicable sight is making you rack your brains trying to piece together any remaining fragments of your memory from the past 24 hours. Laying in front of you is the body of you best friend. She is lifeless. Next to her hand is her mobile phone, the ringing noise seems to be emanating from the phone.',
		choices: [
			{
				text: 'Inspect her body',
				index: 12
			},
			{
				text: 'Inspect her phone',
				index: 13
			}
		],
		item: "",
		requirement: "",
	},
	{
		title: 'The Body',
		text: "Even though you can't bring yourself to touch the body you can see, there seems to be three rips in her clothing that look like something was stabbed through them. <br><br>[static.wav] Something clicks into place and pieces of last night coming back to you. Amy came over for dinner, her phone kept making these weird noises[tracking.wav]. She kept saying it was just her boss keeping track of her workload. The next thing you see is Amy standing over you with a syringe in her hand. The memory skips again, you have a knife in your hand. Skips again. Amy is on the floor a pool of blood expanding around her.  <br><br>Coming back to reality, you look down on her corpse the realisation hits you, your heart is pounding. Amy tried to kill you, so you killed her. Trying to piece this all together you remember the noise from her phone, you realise it's the same noise from the person on the train. There must be more answers on her phone.",
		choices: [
			{
				text: 'Inspect her phone',
				index: 13
			}
		],
		item: "",
		requirement: "",
	},
	{
		title: 'The Phone',
		text: "Picking up the phone you see a single notification constantly pinging, clicking it launches an app you havent seen before. After a short connecting period. The screen loads to what seems to be the main page. On the screen is a greyed out picture of yourself and the words failure. A message pops up with two options. <br><br>Target No.382 - # Detected.",
		choices: [
			{
				text: 'Explanation',
				index: 14
			},
			{
				text: 'Alert Others',
				index: 15
			}
		],
		item: "",
		requirement: "",
	},
	{
		title: 'Explanation',
		text: "A video file loads and plays.",
		choices: [
			{
				text: 'Put down the phone',
				index: 16
			}
		],
		item: "",
		requirement: "",
	},
	{
		title: 'Alert Others',
		text: "The phone starts repeating that familiar sound. [tracking.wav] A map pops up on the phone pinging at your location, stating target located. [tracking.wav]You hear a window smash in the house. You realise what you have just done, you have alerted all the hunters to your location [tracking.wav], as you move the ping on the screen moves too. You throw the phone to the ground. <br><br>You turn and run down an alleyway. It's a dead end. You turn to run back out and see a figure in all black, their face hidden in shadow. Your eyes are drawn to their hip. The gun glinting in the sunlight as it is raised. You stare down the barrel as the bullet flies towards you.[success.wav]",
		choices: [
			{
				text: 'Dead End',
				index: 8
			}
		],
		item: "",
		requirement: "",
	},
	{
		title: 'Processing',
		text: "You try to make sense of this. This is a lot to take in. You have to nominate someone else, or give up your own life. You have your whole life left to live can you really die now? But if you don't give up your life, you have to nominate someone else to die. Can you live with that on your conscience?",
		choices: [
			{
				text: 'Give up your life',
				index: 17
			},
			{
				text: 'Nominate',
				index: 19
			}
		],
		item: "",
		requirement: "",
	},
	{
		title: 'Heroic Death',
		text: "You cannot bring yourself to end someone else's life so you decide you must end your own. Atleast then everyone else will be freed. You think back to Amy and how this game must have driven her over the edge to the point where she had to kill her best friend. You head upstairs to your bathroom, take out the prescription pills from the cabinet. After consuming the whole bottle you head to bed and drift off.",
		choices: [
			{
				text: 'Heroic End',
				index: 18
			}
		],
		item: "",
		requirement: "",
	},
	{
		title: 'Heroic End',
		text: "[success.wav]Hunter 147 looks down at his phone. Target number 3 8 3 has been loaded onto his phone with the message 'Target 3 8 2 is down, Let the games continue'.",
		choices: [
			{
				text: 'The End',
				index: 29
			}
		],
		item: "",
		requirement: "",
	},
	{
		title: 'Nominations',
		text: "You decide to nominate someone, you have too much to live for. Now you just need to choose someone. Who could you possibly nominate? Thinking over it you realise there are two main choices, you can choose a widely known criminal and have them be killed, they deserve it. The other option is someone who you know, someone who you can personally benefit from, if you are going to do this you may aswell get something from it.",
		choices: [
			{
				text: 'Criminal',
				index: 20
			},
			{
				text: 'Personal Connection',
				index: 23
			}
		],
		item: "",
		requirement: "",
	},
	{
		title: 'Lawful Path',
		text: "After searching the news you narrow down your options to two criminals<br><br>Jeremiah Sinclair:<br>- Kills women who he feels are being immoral.<br>- Lures women out to dinner and then takes them to a remote location and leaves their dead body behind.<br><br>Henry Jordan:<br>- Operates a trafficking ring trading slaves.<br>- Picks on vulnerable people such as orphans or homeless people, offers them help and then when they are unaware kidnaps them and sells them to the highest bidder. <br><br>You just have to choose which you think is the worse of the two.",
		choices: [
			{
				text: 'Jeremiah Sinclair',
				index: 21
			},
			{
				text: 'Henry Jordan',
				index: 22
			}
		],
		item: "",
		requirement: "",
	},
	{
		title: 'Jeremiah Sinclair',
		text: "You take Amy's phone and press nominate and type in Jeremiah Sinclair's details. <br><br>The phone plays a notification sound.",
		choices: [
			{
				text: 'Check the Phone',
				index: 26
			}
		],
		item: "",
		requirement: "",
	},
	{
		title: 'Henry Jordan',
		text: "You take Amy's phone and press nominate and type in Henry Jordan's details. <br><br>The phone plays a notification sound.",
		choices: [
			{
				text: 'Check the Phone',
				index: 26
			}
		],
		item: "",
		requirement: "",
	},
	{
		title: 'Chaotic Path',
		text: "You decide you should get something out of this, if you are going to become a hunter killing people there should be some positive. There are two options:<br><br>Your Boss:<br>- You have been in line for promotion for a year, but your boss refuses to quit citing dedication to the company.<br>- You would be promoted and get a massive pay raise.<br><br>Grandfather:<br>- Sitting on a big estate, you would be able to move out of your small house downtown and move into his big house in the city.<br>- He is a wealthy man and you are his next of kin.",
		choices: [
			{
				text: 'Boss',
				index: 24
			},
			{
				text: 'Grandfather',
				index: 25
			}
		],
		item: "",
		requirement: "",
	},
	{
		title: 'Boss',
		text: "You take Amy's phone and press nominate and type in your boss' details. <br><br>The phone plays a notification sound.",
		choices: [
			{
				text: 'Check the Phone',
				index: 26
			}
		],
		item: "",
		requirement: "",
	},
	{
		title: 'Grandfather',
		text: "You take Amy's phone and press nominate and type in your Grandfather's details. <br><br>The phone plays a notification sound.",
		choices: [
			{
				text: 'Check the Phone',
				index: 26
			}
		],
		item: "",
		requirement: "",
	},
	{
		title: 'Nomination Ending',
		text: "An video file plays.",
		choices: [
			{
				text: 'Continue',
				index: 30
			}
		],
		item: "",
		requirement: "",
	},
	{
		title: 'Boss Ending',
		text: "Your boss retires and leaves the company to his son, who restructures the whole company making your job completely obsolete and as a cost saving measure has you fired. You are now without a job. You try to go to the board to convince them to promote you, but they decline even a meeting.<br><br>The first target message appears on your phone.",
		choices: [
			{
				text: 'The End',
				index: 29
			}
		],
		item: "",
		requirement: "",
	},
	{
		title: 'Grandfather Ending',
		text: "Your Grandfather is killed and his belongings are locked down due to the nature of his murder. After a year of investigations the case is closed and his will and estate are released. He left nothing to you, all of his estate is being donated to the charity who supported your Grandmother in the last years of her life.<br><br>The first target message appears on your phone.",
		choices: [
			{
				text: 'The End',
				index: 29
			}
		],
		item: "",
		requirement: "",
	},
	{
		title: 'Thank You For Playing!',
		text: "Thank you for playing! <br><br> Thanks to: <br><br>Voiceovers - Sian Aislinn Elder",
		choices: [
		],
		item: "Thank You Letter",
		requirement: "",
	},
	{
		title: 'Error!',
		text: "An error has occured.",
		choices: [
			{
			}
		],
		item: "",
		requirement: "",
	}
]
