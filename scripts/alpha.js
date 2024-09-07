// function play(){
//     //hide the home screen to hinde the screen add the class hidden to the home section

    
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');

//     //show the playground
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
// }
function addEventListenerUpEvent (event){
    const playerPressed = event.key;

    //key player is expected to press 
   const currentAlphabetElement = document.getElementById('current-alphabet');
   const currentAlphabet = currentAlphabetElement.innerText;
   const expectedAlphabet = currentAlphabet.toLowerCase();

   //check right or wrong answer

   if(playerPressed === expectedAlphabet){
    console.log('you got a point');
   }
   else{
    console.log('lose a life');
   }
}


document.addEventListener('keyup', handleKeyboardKeyUpEvent)


function continueGame(){

    //step 1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet', alphabet)
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



