const deck =

[
  {
    name: "Bulbasaur",
    damage: 60
  }, {
    name: "Caterpie",
    damage: 40
  }, {
    name: "Charmander",
    damage: 60
  }, {
    name: "Clefairy",
    damage: 50
  }, {
    name: "Jigglypuff",
    damage: 60
  }, {
    name: "Mankey",
    damage: 30
  }, {
    name: "Meowth",
    damage: 60
  }, {
    name: "Nidoran - female",
    damage: 60
  }, {
    name: "Nidoran - male",
    damage: 50
  }, {
    name: "Oddish",
    damage: 40
  }, {
    name: "Pidgey",
    damage: 50
  }, {
    name: "Pikachu",
    damage: 50
  }, {
    name: "Poliwag",
    damage: 50
  }, {
    name: "Psyduck",
    damage: 60
  }, {
    name: "Rattata",
    damage: 30
  }, {
    name: "Squirtle",
    damage: 60
  }, {
    name: "Vulpix",
    damage: 50
  }, {
    name: "Weedle", 
    damage: 40
  }
]

const eggbert = {
	score: 0,
	roundsWon: 0
  playedCards: []
}

const computer = {
	score: 0,
	roundsWon: 0,
  playedCards []
}


console.log("LET'S BEGIN!!!")

console.log("ROUND ONE....DRAW!!")

const userHand1 = []
const compHand1 = []

const userHand2 = []
const compHand2 = []


const discardCards = []

function dealHand(arr1, arr2) {

for (i = 0; i < 3; i++) {
		let poppedItems = deck.pop(i)
		arr1.push(poppedItems);

}

for (i = 0; i < 3; i++) {
		let poppedItems = deck.pop(i);
		arr2.push(poppedItems);
}

}

dealHand(userHand1, compHand1);


function draw (arr1, arr2) {
          

    let cardChoice = prompt(`Which Card Would You Like?: 
        1 - ${arr1[0].name} with ${arr1[0].damage} damage
        2 - ${arr1[1].name} with ${arr1[1].damage} damage
        3 - ${arr1[2].name} with ${arr1[2].damage} damage`)
    switch(cardChoice) {
    case '1': 
    console.log(`Eggbert drew ${arr1[0].name} with a damage of ${arr1[0].damage}`)
    userCard = arr1.splice(0, 1);
    discardCards.push(userCard);
    break;
    case '2':
    console.log(`Eggbert drew ${arr1[1].name} with a damage of ${arr1[1].damage}`)
    userCard = arr1.splice(1, 1);
    discardCards.push(userCard);
    break;
    case '3':
    console.log(`Eggbert drew ${arr1[2].name} with a damage of ${arr1[2].damage}`)
    userCard = arr1.splice(2, 1);
    discardCards.push(userCard);
    break;
    default:
    break;

  }

  
  let compRandomCard = arr2.pop();
  discardCards.push(compRandomCard);
	console.log(`Computer drew ${compRandomCard.name} with a damage of ${compRandomCard.damage}`)

  
	if (compRandomCard.damage > userCard.damage) {
		console.log ("Computer Wins!");
		computer.score += 1;
		computer.roundsWon += 1;
		
	} else {
		console.log ("Eggbert Wins!");
		eggbert.score += 1;
		eggbert.roundsWon += 1;
		
	}

  console.log (`Eggbert ${eggbert.score}, Computer ${computer.score}`)
  console.log (`ROUNDS WON: Eggbert - ${eggbert.roundsWon}, Computer - ${computer.roundsWon}`)

    cardChoice = prompt(`Which Card Would You Like?: 
        1 - ${arr1[0].name} with ${arr1[0].damage} damage
        2 - ${arr1[1].name} with ${arr1[1].damage} damage`)
    switch(cardChoice) {
    case '1': 
    console.log(`Eggbert drew ${arr1[0].name} with a damage of ${arr1[0].damage}`)
    userCard = arr1.splice(0, 1);
    break;
    case '2':
    console.log(`Eggbert drew ${arr1[1].name} with a damage of ${arr1[1].damage}`)
    userCard = arr1.splice(1, 1);
    break;
    default:
    break;

  }


  compRandomCard = arr2.pop();
  discardCards.push(compRandomCard);
  console.log(`Computer drew ${compRandomCard.name} with a damage of ${compRandomCard.damage}`)

    if (compRandomCard.damage > userCard.damage) {
    console.log ("Computer Wins!");
    computer.score += 1;
    computer.roundsWon += 1;
    
  } else {
    console.log ("Eggbert Wins!");
    eggbert.score += 1;
    eggbert.roundsWon += 1;
    
  }

  console.log (`Eggbert ${eggbert.score}, Computer ${computer.score}`)
  console.log (`ROUNDS WON: Eggbert - ${eggbert.roundsWon}, Computer - ${computer.roundsWon}`)

  userCard = arr1[0];
  console.log(`Eggbert drew ${arr1[0].name} with a damage of ${arr1[0].damage}`)

  compRandomCard = arr2.pop();
  discardCards.push(compRandomCard);
  console.log(`Computer drew ${compRandomCard.name} with a damage of ${compRandomCard.damage}`)

      if (compRandomCard.damage > userCard.damage) {
    console.log ("Computer Wins!");
    computer.score += 1;
    computer.roundsWon += 1;
    
  } else {
    console.log ("Eggbert Wins!");
    eggbert.score += 1;
    eggbert.roundsWon += 1;
    
  }

  console.log (`Eggbert ${eggbert.score}, Computer ${computer.score}`)
  console.log (`ROUNDS WON: Eggbert - ${eggbert.roundsWon}, Computer - ${computer.roundsWon}`)


}


draw(userHand1, compHand1);

console.log(discardCards);

// dealHand(userHand2, compHand2);



//   compRandomCard = compHand1.pop();
//   discardCards.push(compRandomCard);
//   console.log(`Computer drew ${compRandomCard.name} with a damage of ${compRandomCard.damage}`)

  


// draw(userHand1, compHand1);

// console.log(userHand1);
// console.log(compHand1);





// draw(userHand, computerHand);

// console.log(discardCards);
// console.log(computerHand);
// console.log(userHand);


// console.log("ROUND TWO....DRAW!!!")

// const userHandTwo = []
// const computerHandTwo = []

// for (i = 0; i < 3; i++) {
// 		let poppedItems = deck.pop(i)
// 		userHandTwo.push(poppedItems);

// }

// for (i = 0; i < 3; i++) {
// 		let poppedItems = deck.pop(i);
// 		computerHandTwo.push(poppedItems);
// }

// draw(userHandTwo, computerHandTwo);

// const userHandThree = []
// const compHandThree = []


// console.log ("ROUND THREE....DRAW!")
// for (i = 0; i < 3; i++) {
// 		let poppedItems = deck.pop(i)
// 		userHandThree.push(poppedItems);

// }

// for (i = 0; i < 3; i++) {
// 		let poppedItems = deck.pop(i);
// 		compHandThree.push(poppedItems);
// }

// draw(userHandThree, compHandThree);


// if (eggbert.rounds > computer.rounds) {
// 	console.log('Eggbert WINS!')
// } else {
// 	console.log('Computer Wins')
// }



