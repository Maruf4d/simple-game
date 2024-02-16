// function play(){
//     const homeScreen =  document.getElementById(`home-screen`);
//     homeScreen.classList.add('hidden')
//     //
//     const playGroundSection = document.getElementById(`play-ground-section`);
//     playGroundSection.classList.remove(`hidden`);
// }
function keyBoardPres(event){
    const playerPressed = event.key
    // console.log(`player`,playerPressed);

    const currentAlphabetUse = document.getElementById(`current-alphaBet`);
    const currentAlphabet = currentAlphabetUse.innerText;
    const upperCase = currentAlphabet.toLowerCase();
    // console.log(playerPressed,upperCase);

    // current Life 
    const currentLifeAdd = document.getElementById(`current-life`);
    const currentLife = currentLifeAdd.innerText;
    const currentParsenInt = parseInt(currentLife);
    console.log(currentParsenInt);

    // current Score 
    const currentSoreAdd = document.getElementById(`current-score`);
    const currentText = currentSoreAdd.innerText;
    const currentPh = parseInt(currentText)
    console.log(currentPh);

    if(playerPressed === upperCase){
        console.log(`you got a point`);
        removeBgColor(playerPressed);
        continueGame();
        //  new Score
        const newScore = currentPh + 1;
        currentSoreAdd.innerText = newScore;
    }
    else{
        console.log(`you lost your life`);
        const loseLife = currentParsenInt -1;
        currentLifeAdd.innerText= loseLife;
    }
}
// capture keyPress
    document.addEventListener(`keyup`, keyBoardPres)

function continueGame(){
    const alphabet = getARandomAlphabet();
    console.log('your random alpha bet', alphabet);

    const currentAlphaBetElement = document.getElementById(`current-alphaBet`);
    currentAlphaBetElement.innerText = alphabet;

    setBgColor(alphabet);
}

function play(){
    hideElementId('home-screen');
    showElementId(`play-ground-section`);
    continueGame();
}