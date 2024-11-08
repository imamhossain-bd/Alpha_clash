

// document.getElementById('playNow').addEventListener('click', function(){
//     const homeSection = document.getElementById('home_Play_Ground')
//     homeSection.classList.add('hidden')
//     const playGround = document.getElementById('play_ground')
//     playGround.classList.remove('hidden')
// })

// function hiddenElement(elementId){
//     const element = document.getElementById(elementId)
//     element.classList.add('hidden')
// }
// function showElement(elementId){
//     const element = document.getElementById(elementId)
//     element.classList.remove('hidden')
// }


// function getRandomALphabet(){
//     const alphabetString = "abcdefghijklmnopqrstuvwxyz";
//     const alphabets = alphabetString.split('');

//     const randomNumber = Math.random()*25
//     const index = Math.round(randomNumber)
//     const alphabet = alphabets[index]
//     return alphabet
// }

function hiddenElement(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('hidden')
}


function showElement(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('hidden')
}

function setBackground(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('bg-orange-400')
}

function removeBackground(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('bg-orange-400')
}

function getTextElementValue(elementId){
    const element = document.getElementById(elementId)
    const elementValue = element.innerText
    const value = parseInt(elementValue)
    return value
}

function setTextElementValue(elementId, value){
    const element = document.getElementById(elementId)
    element.innerText = value
}

function getRandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetString.split('')

    const randomNumber = Math.round(Math.random()*25)
    const alphabet = alphabets[randomNumber]
    return alphabet
}