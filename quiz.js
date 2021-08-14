const quixForm=document.querySelector('.quiz-form');
const submitButton=document.querySelector('#submit-button');
const outputText=document.querySelector('#output-txt');

const correctAns=['Yes','Yes','No','30°','75°','equilateral','0','acute','scalene','3'];
function calculateScore()
{
    var index=0;
    var count=0;
    const formResults=new FormData(quixForm);
    for(let value of formResults.values()){
        if(value === correctAns[index])
        {
        count=count + 1;
    }
    index=index + 1;
}

    outputText.innerText="Your  Score  is  " + count + ".";
}


submitButton.addEventListener('click',calculateScore)