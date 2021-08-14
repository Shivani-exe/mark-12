const inputSide=document.querySelectorAll('.angle-input');
const submitButton=document.querySelector('#submit-button-hypo');
const outputText=document.querySelector('#output-txt');


function calculate(side1,side2){
    const hypotenuse=Math.sqrt(side1*side1 + side2 *side2);
    return hypotenuse;
}

function calculateHypotenuse(){
   const hypotenuse=calculate(Number(inputSide[0].value),Number(inputSide[1].value));
   outputText.innerHTML = "The length of hypotenuse is " + hypotenuse + ".";
}

submitButton.addEventListener('click',calculateHypotenuse);