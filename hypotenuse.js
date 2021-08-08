const inputSide=document.querySelectorAll('.side');
const submitButton=document.querySelector('#submit-button');
const outputText=document.querySelector('#output-box');


function calculate(side1,side2){
    const hypotenuse=Math.sqrt(side1*side1 + side2 *side2);
    return hypotenuse;
}

function calculateHypotenuse(){
   const hypotenuse=calculate(Number(inputSide[0].value),Number(inputSide[1].value));
   outputText.innerHTML = "The length of hypotenuse is " + hypotenuse;
}

submitButton.addEventListener('click',calculateHypotenuse);