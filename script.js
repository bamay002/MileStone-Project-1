const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreDiv = document.querySelector('[data-computer-score]')
const youScoreDiv = document.querySelector('[data-you-score]')
const resultIn = document.querySelector('.resultIn');


const SELECTIONS = [
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

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection)
    })
})

function makeSelection(selection){
    const computerSelection = randomSelection()
    const youWinner = isWinner(selection, computerSelection)
    const computerWinner = isWinner(computerSelection, selection)

    addSelectionResult(computerSelection, computerWinner)
    addSelectionResult(selection, youWinner)

    if (youWinner){

        incrementScore(youScoreDiv) 
        resultIn.textContent='You Win!'
    }              
    if (computerWinner){
        incrementScore(computerScoreDiv)
        resultIn.textContent = 'Computer Wins!'
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
}

function addSelectionResult(selection, winner){
    const div = document.createElement('div')
    div.innerText = selection.buttonName
    div.classList.add('resultSelection')
    if (winner) div.classList.add('resultSelectionWinner')
    finalColumn.after(div)
}

function incrementScore(scoreDiv){
    scoreDiv.innerText = parseInt(scoreDiv.innerText) + 1 
    console.log("hi")                
}

