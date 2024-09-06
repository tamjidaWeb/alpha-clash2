function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');

}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-500');

}


function getARandomAlphabet (){
    const alphabetsString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetsString.split('');
    console.log(alphabets);

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    console.log(index);

    const alphabet = alphabets[index];
    return alphabet;
}
















// function getARandomAlphabet(){
//     const alphabetsString = 'abcdefghijklmnopqrstuvwxyz';
//     const alphabets = alphabetsString.split('');
//     // console.log(alphabets);

//     //get  a random index between 0-25
//     const randomNum = Math.random()*25;
// const index = Math.round(randomNum);
// // console.log(index);

// const alphabet = alphabets[index];
// // console.log(index, alphabet);
// return alphabet;
// }