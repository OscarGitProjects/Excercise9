"use strict";

function bishBosh1()
{
    alert('bishBosh1');
    let divisibleBy3 = false;
    let divisibleBy4 = false;
    let text = '';

    for(let i = 1; i <= 100; i++)
    {
        // Rensa tidigare värde
        divisibleBy3 = false;
        divisibleBy4 = false;

        // Kolla om i är jämnt delbart med 3
         if((i % 3) == 0)
            divisibleBy3 = true;

        // Kolla om i är jämnt delbart med 4
        if((i % 4) == 0)
            divisibleBy4 = true;
        
        if(divisibleBy3 === true && divisibleBy4 == true)
            text = 'Bish-Bosh';
        else if(divisibleBy3 === true && divisibleBy4 == false)
            text = 'Bish';            
        else if(divisibleBy3 === false && divisibleBy4 == true)
            text = 'Bosh';            
        else
            text = i;

        console.info(text);
    }
}


bishBosh1();