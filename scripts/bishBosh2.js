"use strict";

// Set up eventlistners
let btnRun = document.querySelector('#btnRun').addEventListener('click', BishBosh2);


/* 
    function som gömmer alla felmeddelanden i gui
*/
function HideErrorMessages()
{
    // Göm felmeddelanden i gui
    let span = document.getElementById("txtNumberOfTurnsError");
    if(span)
        span.style.display = 'none';

    span = document.getElementById("txtFirstDivisorError");
    if(span)
        span.style.display = 'none';    

    span = document.getElementById("txtSecondDivisorError");
    if(span)
        span.style.display = 'none'; 
}


/* 
    function som kontrollerar att indata är korrekt dvs finns och är positiva värden över 0
    Om det är ogiltigt indata kommer motsvarande felmeddelande visas i gui
*/
function ValidateIndata(numberOfLoops, numberFirstDivisor, numberSecondDivisor)
{
    let bHasErrors = false;

    // Validera indata så att alla värden är positiva och över 0
    if(isNaN(numberOfLoops) || numberOfLoops < 1)
    {
        bHasErrors = true;
        document.getElementById("txtNumberOfTurnsError").style.display = "";
    }

    if(isNaN(numberFirstDivisor) || numberFirstDivisor < 1)
    {
        bHasErrors = true;
        document.getElementById("txtFirstDivisorError").style.display = "";
    }

    if(isNaN(numberSecondDivisor) || numberSecondDivisor < 1)
    {
        bHasErrors = true;
        document.getElementById("txtSecondDivisorError").style.display = "";
    } 

    return bHasErrors;
}


function BishBosh2()
{
    // Hämta teaxtarean som skall visa resultatet
    let txtAreaResult = document.querySelector('#txtResult');
    txtAreaResult.value = '';

    // Hämta inmatade värden från gui
    let txtNumberOfTurns = document.querySelector('#txtNumberOfTurns').value;
    let txtFirstDivisor = document.querySelector('#txtFirstDivisor').value;
    let txtSecondDivisor = document.querySelector('#txtSecondDivisor').value;


    // Göm alla felmeddelanden
    HideErrorMessages();

    // Konvertera indata till number
    let numberOfLoops = Number.parseInt(txtNumberOfTurns);
    let numberFirstDivisor = Number.parseInt(txtFirstDivisor);
    let numberSecondDivisor = Number.parseInt(txtSecondDivisor);     


    // Validerar att indata finns och bara är positiva värden över 0
    // Om det är ogiltigt indata kommer motsvarande felmeddelande visas i gui
    let bHasErrors = ValidateIndata(numberOfLoops, numberFirstDivisor, numberSecondDivisor);

    if(bHasErrors)// Vi har ett fel i indata. Returnera
        return;


    let divisibleByFirstValue = false;
    let divisibleBySecondValue = false;
    let text = '';

    // Kör for med bish och bosh
    for(let i = 1; i <= numberOfLoops; i++)
    {
        // Rensa tidigare värde
        divisibleByFirstValue = false;
        divisibleBySecondValue = false;

        // Kolla om i är jämnt delbart med numberFirstDivisor
         if((i % numberFirstDivisor) == 0)
            divisibleByFirstValue = true;

        // Kolla om i är jämnt delbart med numberSecondDivisor
        if((i % numberSecondDivisor) == 0)
            divisibleBySecondValue = true;

        if(divisibleByFirstValue === true && divisibleBySecondValue == true)
            text = 'Bish-Bosh';
        else if(divisibleByFirstValue === true && divisibleBySecondValue == false)
            text = 'Bish';            
        else if(divisibleByFirstValue === false && divisibleBySecondValue == true)
            text = 'Bosh';            
        else
            text = i;
                        
        txtAreaResult.value += text + '\n';
    }    
}