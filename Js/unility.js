

// function continueGame(){
//     const alphabet = getRandomALphabet()
//     console.log(alphabet);
// }


// document.getElementById('playNow').addEventListener('click', function(){
//     hiddenElement('home_Play_Ground')
//     showElement('play_ground')
//     continueGame()
// })

// function handleKeyboardPress(event) {
//     const pressPlayer = event.key;
//     const currentAlphabetElement = document.getElementById('current_alphabet');
//     const currentAlphabet = currentAlphabetElement.innerText;
//     const expectAlphabet = currentAlphabet.toLowerCase();

//     if (pressPlayer === expectAlphabet) {
        
//         const currentScoreElement = document.getElementById('current_score');
//         const currentScoreText = currentScoreElement.innerText;
//         const currentScore = parseInt(currentScoreText);
//         const newScore = currentScore + 1;

//         currentScoreElement.innerText = newScore;
        
//         removeBackground(expectAlphabet);
//         continueGame();
//     } else {
//         console.log("Incorrect key. Try again!");
//         const currentLifeElement = document.getElementById('current_life')
//         const currentLifeText = currentLifeElement.innerText
//         const currentLife = parseInt(currentLifeText)
//         const newLife = currentLife - 1
//         currentLifeElement.innerText = newLife
        
//     }
// }

function handleKeyboardPress(event){
    const pressPlayer = event.key;
    const currentAlphabetElement = document.getElementById('current_alphabet')
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectAlphabet = currentAlphabet.toLowerCase()

    if(pressPlayer === expectAlphabet){
        const currentScore = getTextElementValue('current_score')
        const updateScore = currentScore + 1
        setTextElementValue('current_score', updateScore)

        removeBackground(expectAlphabet);
        continueGame();
    }
    else{
        const currentLife = getTextElementValue('current_life')
        const updateLife = currentLife - 1;
        setTextElementValue('current_life', updateLife)

        if(updateLife === 0){
            gameOver()
        }
    }
}

document.addEventListener('keyup', handleKeyboardPress);



function continueGame(){
    const alphabet =  getRandomAlphabet()
    const currentAlphabet = document.getElementById('current_alphabet')
    currentAlphabet.innerText = alphabet
    setBackground(alphabet)
}
document.getElementById('playNow').addEventListener('click', function(){
    hiddenElement('home_Play_Ground')
    showElement('play_ground')
    continueGame()
})

function gameOver(){
    hiddenElement('play_ground')
    showElement('final_score')
}