
**1. Define the game data:**
* Define the options you can choose 
    * either rock, paper, scissor
* Define a score board

**2. Render the game UI:**
* Create a container element for the game
* Display the option button in words and/or drawings
* Display score
* Display whether you or the computer won or if it was a tie

**3. Handle player input:**
* Add an event listener to the input field to listen for which button / option the player selects 
* When an option is selected, add one point onto the score of whoever is the winner 
* If it is a tie, score remains the same (no changes)
* When option is selected have a message typed " blank won" or "tie"

**4. Render the updated game state:**
* Update the UI to display updated scores

**5. Restart the game:**
* Add a restart button to the game UI
* When the restart button is clicked, resets the game score board and updates the UI

## 1- DEFINE THE GAME DATA IN HTML
1. Create Three Buttons that user can use to choose their action
``` html
<button>ROCK</button>
<button>Paper</button>
<button>Scissor</button>
```

2.  Create a div that contains the score for the computer and player

## 1- DEFINE THE GAME DATA IN JAVA
1. Create a constant and an html container for the buttons, your score, and computer score and add it to the DOM
``` java
const selectionButtons = document.querySelectorAll('[data-selection]')
const computerScoreDiv = document.querySelector('[data-computer-score]')
const youScoreDiv = document.querySelector('[data-you-score]')
```
### 2. Render the game UI:
1. In HTML make divs to display what options are given i.e. rock,paper,scissor - if can add pictures in case younger kids play 
2. Make a div to hold the score ; score goes up by who wins
3. Make another div that writes out who wins instead of just having the score number goes up
4. Make sure fonts are big enough to see

### 3. Handle player input:
1. Make an array that holds all options:
``` java
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
```
2. Make a function that allows the computer to be random options
```java
function randomSelection(){
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)       
    return SELECTIONS[randomIndex]                                         
}
```
3. Add a function that compares the constant computerWinner & Player to see who wins 
``` java
function makeSelection(selection){
    const computerSelection = randomSelection()
    const youWinner = isWinner(selection, computerSelection)
    const computerWinner = isWinner(computerSelection, selection)
}
```
4. Have a function that add onto whoever the winner is by one point and display who the winner is in words and the number
```java
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
```
### 5. Restart the game:
1. Add a button that restarts game when player wants to 
```html
<div id="reset"><button type="button" onClick = "window.location.reload()"> Restart</button></div>
```

### 6. Decorate and UI
1. Make game look nicer with CSS
    - have font big enough to see
    - make buttons noticable




