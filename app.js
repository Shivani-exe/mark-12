
const angleInput=document.querySelectorAll('.angle-input');
const submitButton=document.querySelector('#submit-button');
const outputTxt=document.querySelector('#output-txt');

function sumOfAngle(angle1,angle2,angle3)
{
    
    const sumOfAngles= angle1 + angle2 + angle3;
    return sumOfAngles;
}

function isTriangle(){
    const sum = sumOfAngle(
        Number(angleInput[0].value),Number(angleInput[1].value),Number(angleInput[2].value));
        if(sum === 180)
        outputTxt.innerText= "Yay!! It forms a triangle.";
        else
        outputTxt.innerText = "No, it does not form a triangle.";
    
}

submitButton.addEventListener('click',isTriangle);
