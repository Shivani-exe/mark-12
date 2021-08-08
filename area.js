const inputSide=document.querySelectorAll('.side');
const submitButton=document.querySelector('#submit-button');
const outputText=document.querySelector('#output-text');

function areaOfTriangle(b,h){
        const areaOfTriangle= 0.5 * b * h;
        return areaOfTriangle;
}

function calculateArea(){
    const area=areaOfTriangle(Number(inputSide[0].value),Number(inputSide[1].value));
    outputText.innerText = "The area of Triangle is " + area;
}
submitButton.addEventListener('click',calculateArea);