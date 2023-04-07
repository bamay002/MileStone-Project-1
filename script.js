const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreDiv = document.querySelector('[data-computer-score]')
const youScoreDiv = document.querySelector('[data-you-score]')
const resultIn = document.getElementById("resultIn")


const SELECTIONS = [                // all caps for global variable - array of constants of our options
    {
        name: 'rock',
        buttonName : 'ROCK',
        beats: 'scissor'
    },

    {
        name: 'paper',
        buttonName : 'PAPER',
        beats: 'rock'
    },

    {
        name: 'scissor',
        buttonName : 'SCISSOR',
        beats: 'paper'
    }
]

selectionButtons.forEach(selectionButton => {                   //FOR EACH selectionButtons
    selectionButton.addEventListener('click', e => {            //when you click
        const selectionName = selectionButton.dataset.selection     // gets the name of what we click!
        const selection = SELECTIONS.find(selection => selection.name === selectionName)        /// loops through SELECTIONS and finds what SELECTION === selectionName
        makeSelection(selection)
    })
})

function makeSelection(selection){
    const computerSelection = randomSelection()
    const youWinner = isWinner(selection, computerSelection)
    const computerWinner = isWinner(computerSelection, selection)

    const youPrint = document.getElementById("youSelectionPrint")
    youPrint.textContent = selection.buttonName                                 //cout what option was selected by comp / player
    const compPrint = document.getElementById("computerSelectionPrint")
    compPrint.textContent = computerSelection.buttonName 

    youPrint.style.color = "pink";
    compPrint.style.color = "pink";                     //reverts styling
    youPrint.style.fontSize = "medium";
    compPrint.style.fontSize = "medium";

    if (youWinner){
        incrementScore(youScoreDiv) 
        resultIn.textContent='You Win!'                             //restultIn is a div i made in html to cout who the winner is
        youPrint.style.color = "rgb(233, 176, 246)";                   //styling 
        youPrint.style.fontSize = "x-large";
    }              
    if (computerWinner){
        incrementScore(computerScoreDiv)
        resultIn.textContent = 'Computer Wins!'
        compPrint.style.color = "rgb(233, 176, 246)"
        compPrint.style.fontSize = "x-large"
    }

    if (computerWinner === youWinner){
        resultIn.textContent = 'Tie'
    }
}                                               

function randomSelection(){
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)       //gives us a number between 0 - 2 (cause thats how many options we have (index 0 1 2))
    return SELECTIONS[randomIndex]                                          //gives us random selection everytime we call function
}

function isWinner(selection, opponentSelection){
    return selection.beats === opponentSelection.name                   //from SELECTIONS above
}                                                                       //checking SELECTION if what is selected (clicked) is === to opponentSelection.beats then you are a winner


function incrementScore(scoreDiv){
    scoreDiv.innerText = parseInt(scoreDiv.innerText) + 1                
}

