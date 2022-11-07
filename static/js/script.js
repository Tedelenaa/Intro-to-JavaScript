// //challenge 1 your age in days
// function ageInDays(){
   
//     let birthYear = prompt ('What Year Were You Born');
//     let ageInDayss = (2022 - birthYear) * 365;
//     let h1 = document.createElement('h1');
//     let textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old');
//     h1.setAttribute('id', 'ageInDayss');
//     h1.appendChild(textAnswer);
//     document.getElementById('flex-box-result').appendChild(h1);
//     // console.log(ageInDayss);
// }




// ageInDays();

// function reset() {
//     let NO = (0) * 365;
//     let h2 = document.createElement('h2');
//     let noText = document.createTextNode(NO );
//     h2.setAttribute('id', 'NO');
//     h2.appendChild(noText);
//      document.getElementById('flex-box-result').appendChild(h2);
//     // document.getElementById('ageInDays').remove() ;
// }

// reset();

let result = document.getElementById('flex-box-result');

function ageInDays() {
    let birthYear = prompt('What Year Were You Born?');
    let ageInDayss = (2022 - birthYear) * 365;

    result.textContent = 'You are ' + ageInDayss + ' days old';
}

ageInDays();

function reset() {
    result.innerHTML = ` <div id="flex-box-result">0</div>`;
}

reset();



//Challenge 2: Cat Generator//
function generateCat() {
    let image = document.createElement('img');
    let div = document.getElementById('flex-cat-gen');
    image.src = "https://cdn2.thecatapi.com/images/b1k.gif";
    div.appendChild(image);
}

// generateCat();


// Challenge 3: Rock, Paper, Scissors//

function rpsGame(yourChoice) {
    // console.log(yourChoice);
    let humanChoice, botChoice;
    humanChoice = yourChoice.id

    botChoice =numberToChoice(randToRpsInt());
    // console.log(botChoice)

    // result = decideWinner(humanChoice, finalMessage, botChoice);


    // message = finalMessage(result)

    rpsFrontEnd(yourChoice.id, botChoice);
}

rpsGame();

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice) {
    let rpsDatabase = {
        'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
        'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 },
    };

    let yourScore = rpsDatabase[yourChoice][computerChoice];
    let computerScore = rpsDatabase[computerChoice][yourChoice];
    return [yourScore, computerScore];
}

function finalMessage([yourScore, ]) {
    if (yourScore === 0) {
        return { 'message': 'You lost!', 'color': 'red' };
    } else if (yourScore === 0.5) {
        return { 'message': 'You tied!', 'color': 'yellow' };
    }
    else {
        return { 'message': 'You won!', 'color': 'green' };
    } 
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    let imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    }

    // removal of the three items
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    // let humanDiv = document.createElement('div');
    // // let botDiv = document.createElement('div');
    // // let messageDiv = document.createElement('div');

    // humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "'height=100 width=100 style='box-shadow: 0px 10px 10px rgba(37, 50, 233, 1);  "'> "
    // // messageDiv.innerHTML = `<h1 style = 'color: ${finalMessage['color']}; font-size:60px; padding: 30px; '>${finalMessage[message]} </h1>`
    // // botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "'height=100 width=100 style='box-shadow: 0px 10px 10px rgba(243, 30, 24, 1);>"

    // document.getElementById('flex-box-rps-div').appendChild(humanDiv)
}