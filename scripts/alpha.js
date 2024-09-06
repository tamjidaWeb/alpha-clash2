// function play(){
//     //hide the home screen to hinde the screen add the class hidden to the home section

    
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');

//     //show the playground
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
// }
function continueGame(){

    //step 1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet', alphabet)
   //set randomly generated alphabet to the screen (show it)

   const currentAlphabetelement = document.getElementById('current-alphabet');
   currentAlphabetelement.innerText = alphabet;


   //set background color
    setBackgroundColorById(alphabet)


}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}



