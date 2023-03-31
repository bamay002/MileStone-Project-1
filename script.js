const selectionButtons = document.querySelectorAll('[data-selection]')

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
    console.log(selection)
}                                               //everything above gets me to print out selection when inspect and look at console

