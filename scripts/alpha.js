// function play(){
//     //hide the home screen to hinde the screen add the class hidden to the home section

    
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');

//     //show the playground
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
// }
// function addEventListenerUpEvent (event){
//     const playerPressed = event.key;

//     //key player is expected to press 
//    const currentAlphabetElement = document.getElementById('current-alphabet');
//    const currentAlphabet = currentAlphabetElement.innerText;
//    const expectedAlphabet = currentAlphabet.toLowerCase();

//    //check right or wrong answer

//    if(playerPressed === expectedAlphabet){
//     console.log('you got a point');
//    }
//    else{
//     console.log('lose a life')
//    }
// }

function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    console.log('player Pressed',playerPressed);

    //get the expectedf to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed,expectedAlphabet);

    //check matched or not

    if(playerPressed === expectedAlphabet){
        console.log('you get a point');
        // console.log('you have pressed correctly ', expectedAlphabet);
        //update score:
        //1 get the current score

        const currentScore = document.getElementById('current-score');
        const currentScoreText = currentScore.innerText;
        const currentScores = parseInt(currentScoreText);
        console.log(currentScores)
        //2 increase the score by 1

        const newscore = currentScores +1;

        currentScore.innerText = newscore;
        removebackgroundById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you lose a life')
    }
}
document.addEventListener('keyup', handleKeyboardKeyUpEvent)


function continueGame(){

    //step 1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet', alphabet)
   //set randomly generated alphabet to the screen (show it)

   const currentAlphabetelement = document.getElementById('current-alphabet');
   currentAlphabetelement.innerText = alphabet;


   //set background color
    setBackgroundColorById(alphabet);
    // removebackgroundById(alphabet)


}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}



