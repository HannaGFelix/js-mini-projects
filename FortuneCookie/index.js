
const submit = document.getElementById("submit");
const fortuneAnswer = document.getElementById("fortuneAnswer");
const userFortune = document.getElementById("userFortune");
let userInput;

submit.onclick = function(){

    userInput = parseInt(userFortune.value);

    /*Note to self:
        "==" vs "==="
        == this for type of conversion
        === is strictly for boolean 
    */

    if(userInput === 1){
        fortuneAnswer.textContent = "Your finances will be a key to your financial future.";
    }else if(userInput === 2) {
        fortuneAnswer.textContent = "Only listen to the fotune cookie, disregard all the other fortune telling units.";
    }else if(userInput === 3){
        fortuneAnswer.textContent = "You will be hungry again in one hour.";
    }else if(userInput === 4) {
        fortuneAnswer.textContent = "Dogs have owners, cats have staff";
    }else if(userInput === 5){
        fortuneAnswer.textContent = "The fortune you seek is in a fortune cookie";
    }else{
        fortuneAnswer.textContent = "I can only think of 5 fotunes pick a number between 1 - 5.";
    }

}
