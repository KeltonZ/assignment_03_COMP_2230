console.log("Game Initialized, ")

let currentState = intro

const story = [

    //Intro Scenario
  {  
    id: intro,
    scenario: `You're the general of an army 
    	tasked with setting up the defense of your city during a siege.
    	You receive information from scouts that a force will be flanking your position, 
    	but the reliability of the information is dubious at best.`, 
		choices: [
			{choiceOne: "Trust the scout?", next: lineOneFallBack},
			{choiceTwo: "Ignore the scout?", next: lineTwoFlanked}
		]
	},
	
	//Line one: Decision one
	{
		id: lineOneFallBack,
		scenario: `We are currently positioned outside of the city, 
			do we re-allocate a part of our forces to defend against the flank,
			but risk compromising our strength as a whole, 
			or we can fall back to the city, but potentially put them at risk?`,
		choices: [
			{choiceOne: "retreat to the city?", next: winScreen1},
			{choiceTwo; "Split your forces?", next: loseScreen1}
		]
	},

	//Line Two: Decision one
	{
		id: lineTwoFlanked,
		scenario: `The scouts were correct, and now our forces are in a 
			horrible position. They're almost upon us, do we fall back to 
			the city and risk collateral or reposition to counter the flank?`,
		choices: [
			{choiceOne: "Fall back?", next: lineThreeFallBack},
			{choiceTwo: "Reposition?", next: loseScreen2}
		]
	},

	//Line Three: Decision one
	{
		id: lineThreeFallBack,
		scenario: `We fall back and barely manage to escape.
    	Unfortunately we are scattered and lost some forces, do we initiate 
			a counter strike to stall and destabilize their advance 
			or risk being caught attempting to regroup?`,
		choices: [
			{choiceOne: "Counter Strike?", next: loseScreen3}
			{choiceTwo: "Rally and Regroup?", next: winScreen3}
		]
	}
];
    



