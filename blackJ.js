let BJgame = {
    'you': {'scoreSpan': '#yourscore' , 'div': '#your-box', 'score': 0},
    'computer': {'scoreSpan': '#computerscore' , 'div': '#computer-box', 'score': 0},
    
    'cards': ['2C','3C','4C','5C','6C','7C','8C','9C','10C','KC','QC','JC','AC','2D','3D','4D','5D','6D','7D','8D','9D','10D','KD','QD','JD','AD','2H','3H','4H','5H','6H','7H','8H','9H','10H','KH','QH','JH','AH','2S','3S','4S','5S','6S','7S','8S','9S','10S','KS','QS','JS','AS'],
    
    'cardsValue': {'2C':2,'3C':3,'4C':4,'5C':5,'6C':6,'7C':7,'8C':8,'9C':9,'10C':10,'KC':10,'QC':10,'JC':10,'AC':1,'2D':2,'3D':3,'4D':4,'5D':5,'6D':6,'7D':7,'8D':8,'9D':9,'10D':10,'KD':10,'QD':10,'JD':10,'AD':1,'2H':2,'3H':3,'4H':4,'5H':5,'6H':6,'7H':7,'8H':8,'9H':9,'10H':10,'KH':10,'QH':10,'JH':10,'AH':1,'2S':2,'3S':3,'4S':4,'5S':5,'6S':6,'7S':7,'8S':8,'9S':9,'10S':10,'KS':10,'QS':10,'JS':10,'AS':1}
};
const You = BJgame['you'];
const Computer = BJgame['computer'];
let card;

function drawCard(activeplayer) {
    const randomNumber = Math.floor(Math.random() * (BJgame['cards'].length));
    const currentCard = BJgame['cards'].splice(randomNumber, 1);
    //let card = document.createElement('img');
    card = document.createElement('img');
    card.src = `./static/${currentCard}.png`;
    document.getElementById("imgCurrent").setAttribute("src",card.src);
    //showCurrentCard();
    console.log(card.src);
    document.querySelector(activeplayer['div']).appendChild(card);
    document.querySelector(activeplayer['div']).appendChild(card);
    updateScore(currentCard, activeplayer);
    showScore(activeplayer);   
}


// Update Score
function updateScore(currentcard, activeplayer){
       activeplayer['score'] += BJgame['cardsValue'][currentcard];
}

  // Show Score
function showScore(activeplayer){
    if(activeplayer['score']>21){
    document.querySelector(activeplayer['scoreSpan']).textContent = 'BUST!'; //activeplayer['score'] &&
    document.querySelector(activeplayer['scoreSpan']).style.color = 'red';
    }
    else{
        document.querySelector(activeplayer['scoreSpan']).textContent = activeplayer['score'];
    }
}
// Show the cureent card
/*function showCurrentCard(){
    //document.querySelector('#Current-Card').append(currentCard);
    
}*/


// Compute Winner Function
function findwinner(){
    let winner;

    if(You['score']<=21){
        if(Computer['score']<You['score'] || Computer['score']>21){
            winner = You;
        }
        else if(Computer['score'] == You['score']){
            winner = Computer;
        }
    }
    else if(Computer['score']<=21){                      
        winner = Computer;
    }
    else if(You['score']>21){
        winner = Computer;
}
    return winner;
}

// Results

function showresults(winner){
    if(winner == You){
        document.querySelector('#results').textContent = 'You Won!';
        document.querySelector('#results').style.color = 'white';
    }
       else
          {
            document.querySelector('#results').textContent = "You Lost!";
            document.querySelector('#results').style.color = 'red';
    }
    }

//Current Card Content

// Deal Button (starting)
document.querySelector('#deal').addEventListener('click', BJdeal);
function BJdeal(){
    if(Computer['score'] === 0){
        if (You['score']<=21){
            drawCard(You); 
        }
        else if 
            (You['score']>21){
                setTimeout(function(){
                    showresults(findwinner());
                  }, 1000)                           //showresults(findwinner);
            }
        }
       }       

// New Game Button
document.querySelector('#new').addEventListener('click', BJnew);

function BJnew(){

    let yourimg = document.querySelector('#your-box').querySelectorAll('img');
    let computerimg = document.querySelector('#computer-box').querySelectorAll('img');
    
    for(let i=0; i<yourimg.length; i++){
        yourimg[i].remove();
    }
    for(let i=0; i<computerimg.length; i++){
        computerimg[i].remove();
    }

    BJgame['cards'] = ['2C','3C','4C','5C','6C','7C','8C','9C','10C','KC','QC','JC','AC','2D','3D','4D','5D','6D','7D','8D','9D','10D','KD','QD','JD','AD','2H','3H','4H','5H','6H','7H','8H','9H','10H','KH','QH','JH','AH','2S','3S','4S','5S','6S','7S','8S','9S','10S','KS','QS','JS','AS'];

    You['score'] = 0;
    document.querySelector(You['scoreSpan']).textContent = You['score'];
    document.querySelector(You['scoreSpan']).style.color = 'black';
    Computer['score'] = 0;
    document.querySelector(Computer['scoreSpan']).textContent = Computer['score'];
    document.querySelector(Computer['scoreSpan']).style.color = 'black';

    document.querySelector('#results').textContent = "";
    document.querySelector('#results').style.color = '';
}

// Computer's Logic (2nd player) OR Stop button
document.querySelector('#stop').addEventListener('click', BJstop)

function BJstop(){
    if(You['score']===0){
        alert('Please Deal Some Cards at First!');
    } 
    else {
        while (Computer['score'] <You['score'])
        {
           drawCard(Computer);
        }
        setTimeout(function(){
          showresults(findwinner());
        }, 1000);
    }
}

