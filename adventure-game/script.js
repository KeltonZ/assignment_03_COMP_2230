console.log("Game Initialized, ")

const scenario = document.getElementById("question")
const answersDiv = document.getElementById("answers")
const nextBtn = document.getElementById("next-btn")


let currentState = "intro"

const story = [

    //Intro Scenario
  {  
    id: "intro",
		chapterTitle: "The beginning of the End",
    scenario: `You're the general of an army 
    	tasked with setting up the defense of your city during a siege.
    	You receive information from scouts that a force will be flanking your position, 
    	but the reliability of the information is dubious at best.`, 
		choices: [
			{text: "Trust the scout?", next: "lineOneFallBack"},
			{text: "Ignore the scout?", next: "lineTwoFlanked"}
		]
	},
	
	//Line one: Decision one
	{
		id: "lineOneFallBack",
		chapterTitle: "Tactical Retreat", 
		scenario: `We are currently positioned outside of the city, 
			do we re-allocate a part of our forces to defend against the flank,
			but risk compromising our strength as a whole, 
			or we can fall back to the city, but potentially put them at risk?`,
		choices: [
			{text: "retreat to the city?", next: "winScreen1"},
			{text: "Split your forces?", next: "loseScreen1"}
		]
	},

	//Line Two: Decision one
	{
		id: "lineTwoFlanked",
		chapterTitle: "All is fair in Love and Warfare",
		scenario: `The scouts were correct, and now our forces are in a 
			horrible position. They're almost upon us, do we fall back to 
			the city and risk collateral or reposition to counter the flank?`,
		choices: [
			{text: "Fall back?", next: "lineThreeFallBack"},
			{text: "Reposition?", next: "loseScreen2"}
		]
	},

	//Line Three: Decision one
	{
		id: "lineThreeFallBack",
		chapterTitle: "Desperate Measures"
		scenario: `We fall back and barely manage to escape.
    	Unfortunately we are scattered and lost some forces, do we initiate 
			a counter strike to stall and destabilize their advance 
			or risk being caught attempting to regroup?`,
		choices: [
			{text: "Counter Strike?", next: "loseScreen3"},
			{text: "Rally and Regroup?", next: "winScreen2"}
		]
	}
];


const scenarioEndings = [

	// Win Screens
	{
		id: "winScreen1",
		endingTitle: "Victory!",
		outcome: `You retreat to the city and 
			by repositioning to regain the advantage you successfully 
			hold off the attack.`
	},

	{
		id: "winScreen2",
		endingTitle: "Victory!",
		outcome: `Though risky you recognize that 
			we need every man we can get, we regroup successfully and hold 
			off the attackers breaking the siege. Well done!`
	},

	// Lose Screens
	{
		id: "loseScreen1",
		endingTitle: "Victory??",
		outcome:`Defeat - By splitting your forces neither force is capable 
			of successfully holding back the enemy. You lose many in a pyric victory.`
	},

	{
		id: "loseScreen2",
		endingTitle: "Defeat...",
		outcome: `Defeat -   One of the oldest maneuvers 
			in the book, the pincer, due to being surrounded the battle 
			is too heavily to their advantage and we end up being overrun.`
	},

	{
		id: "loseScreen3",
		endingTitle: "Defeat...",
		outcome: `Defeat - We end up not having enough forces 
			to effectively stall the advance, we lose too much to 
			attrition and are overrun.`
		}
	]
	
	//when button is pressed it will initiate the story
	function nextQuestion() {
		nextBtn.style.display = "none";
		renderQuestion();
	};
	
	
	// Render currentState
	function renderQuestion() {
		console.log(`currentState is: ${currentState}`)
		const storyNode = story.find(n => n.id === currentState);	
		
		
		if (!storyNode) {
			console.log(`Not a story id, passing to endings: ${currentState}`)
			renderEndings(currentState)
			return;
		}
		
		console.log(`storyNode value is: ${storyNode.id}`)
		
		// sets the question to the current scenario
		scenario.textContent = storyNode.scenario;
		console.log(`Set the scenario text to text of id -${storyNode.id}: 
			${storyNode.scenario}`
		)
		
		//clears the choice buttons
		answersDiv.innerHTML = '';
		
		// iterator creating elements for each choice
		storyNode.choices.forEach(choice => {
			const li = document.createElement('li');
			const btn = document.createElement('button');
			
			btn.textContent = choice.text;
			console.log(`button text updated to: ${btn.textContent2}`)
			
			//define button functionality when clicked
			btn.onclick = () => {
				currentState = choice.next;
				console.log(`currentState updated to: ${currentState}`)
				renderQuestion();
			};
			
			li.appendChild(btn);
			answersDiv.appendChild(li);
		});
	}

	/*  will be called to display end screens win or lose.
	Add console.log if enough time.
	*/
	function renderEndings(result) {
		try {
			const endings = scenarioEndings.find(n => n.id === result)
		
			if (!endings) {
					throw new Error(`Argument passed does not match any results ${result}`);
				}
				
				scenario.textContent = endings.outcome;
				
				answersDiv.innerHTML = ''
				
				const li = document.createElement('li');
				const btn = document.createElement('button');
				btn.textContent = "Restart?";
				btn.onclick = () => {
					currentState = "intro"
					renderQuestion();
				};
				li.appendChild(btn);
				answersDiv.appendChild(li);
			} catch (error) {
				console.log(error.message);
				return;
			}; 
		}