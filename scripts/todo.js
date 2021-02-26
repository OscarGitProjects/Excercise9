"use strict";

// Set up eventlistners
let btnAddProduct = document.querySelector('#btnAddProduct').addEventListener('click', AddProduct);

// Används när jag skapar nya list item. Används för att skapa id för item. För varje jag skapar räknar jag upp nextId
let nextId = 1;


/* 
    function som gömmer felmeddelandet i gui
*/
function HideErrorMessages()
{
    // Göm felmeddelandet i gui
    let span = document.getElementById("txtNewProductError");
    if(span)
        span.style.display = 'none';
}


/* 
    function som anropas när en list item trycks med musen    
    Om item inte är vald kommer den att markeras som vald.
    Annars komemr list item av avmarkeras.
    Detta görs på alla list items.
*/
function onClickListItem(target)
{
    let dataSelected = 0;

    // Hämta alla list item i shoppinglistan
    let listItems = document.querySelectorAll('#ulShoppingList > li');
    if(listItems)
    {
        listItems.forEach(item => {

            if(item.id == target.id)
            {// Vi har hittat list item som användaren har valt med musen
                dataSelected = item.getAttribute('data-selected');

                if(dataSelected == 0)
                {// Item skall väljas
                    item.style.color = 'red';
                    item.style.textDecorationLine = 'line-through';
                    item.setAttribute('data-selected', 1);
                    item.style.backgroundColor = 'yellow';
                }
                else
                {// Item är redan vald. Välj bort item
                    item.style.color = 'black';
                    item.style.textDecorationLine = 'none';
                    item.setAttribute('data-selected', 0);
                    item.style.backgroundColor = 'whitesmoke';
                }
            }
        });
    }
}


/* 
    function som radera den list item som elementet som har tryckts refererar till.
    den item har id som data attribute till den item som skall raderas
*/
function onClickRemoveItem(target)
{
    // Hämta knappen som har tryckts
    let btn = document.getElementById(target.id);
    if(btn)
    {
        // Nu hämtar jag id till den list item som button ligger i. 
        // id finns som data-removeitem attribute på knappen
        let itemId = btn.getAttribute('data-removeitem');
        if(itemId)
        {
            // Hämta list item
            let item = document.getElementById(itemId);
            if(item)
            {// Radera list item
                item.remove(itemId);
            }
        }
    }
}


/*
    function som lägger till en ny vara i inköps listan
*/
function AddProduct()
{
    // Göm felmeddelanden i gui
    HideErrorMessages();

    // Hämta info om nya proukten från gui
    let txtNewProduct = document.querySelector('#txtNewProduct').value;
    if(txtNewProduct)
    {        
        // Skapa en ny list item
        let newListElement = document.createElement("li");
        newListElement.setAttribute('id', 'listitem_' + nextId);        
        newListElement.setAttribute('data-selected', 0);
        newListElement.addEventListener('click', function(e) {

            if(e.target && e.target.nodeName == 'LI')
            {            
                onClickListItem(e.target);
            }
        });

        // Skapa en text node som skall finnas i list item
        let newTextNode = document.createTextNode(txtNewProduct)
        newListElement.appendChild(newTextNode);

        // Skapa en knapp som skall finnas i list item
        let btnElement = document.createElement('button');
        btnElement.setAttribute('id', 'btnRemoveItem_' + nextId)
        btnElement.setAttribute('data-removeitem', 'listitem_' + nextId);
        btnElement.addEventListener('click', function(e){
            
            if(e.target && e.target.nodeName == 'BUTTON')
            {                
                onClickRemoveItem(e.target);
            }
        });

        // Skapa en text node som skall finnas i knappen
        let newBtnText = document.createTextNode('Radera')
        btnElement.appendChild(newBtnText);        
        newListElement.appendChild(btnElement);

        // Lägg till allt till inköpslistan
        let ulShoppingList = document.getElementById('ulShoppingList');
        ulShoppingList.appendChild(newListElement);
        nextId++;
    }
    else
    {
        document.getElementById("txtNewProductError").style.display = "";
    }
}