function hideElementId(elementById){
    const element= document.getElementById(elementById);
    element.classList.add(`hidden`);
}
function showElementId(elementId){
 const element= document.getElementById(elementId);
 element.classList.remove(`hidden`);
}
function getARandomAlphabet(){
    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    const alphabetSplit = alphabetString.split('');
    // console.log(alphabetSplit);

    // 
    const randomNumber = Math.random()*25
    const index = Math.round(randomNumber);

    const alphabet = alphabetSplit [index];
    // console.log(index, alphabet);
    return alphabet;
}
function setBgColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add(`bg-green-400`);
}
function removeBgColor (elementId){
    const remove = document.getElementById(elementId);
    remove.classList.remove(`bg-green-400`);
}