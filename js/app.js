//querySelector QuerySelectorAll
document.addEventListener('DOMContentLoaded', () => {
    

    const newItemform = document.querySelector('#Mario'); //class use .
    //listens for "submit" input listens for submit?
    newItemform.addEventListener('submit', handleNewFormSubmit); // set call back function below
   //listens for "click" button listens for click?
    const deleteAllButton = document.querySelector('#delete-all');
   deleteAllButton.addEventListener('click', handleDeleteAllClick);
    
  })

  
  //capture the event as the parameter 
  const handleNewFormSubmit = function (event) {
    event.preventDefault();
  
    const santasListItem = createSantasListItem(event.target);
    const santaList = document.querySelector('#list');
    santaList.appendChild(santaListItem);//?
  
   event.target.reset();
  }
// pass the form
  const createSantasListItem = function (form) {
    const santasListItem = document.createElement('li');
    santasListItem.classList.add('santas-List-Item');
  
    const name = document.createElement('h2');
    name.textContent = form.name.value;
    santasListItem.appendChild(name);
  
    const giftRequested = document.createElement('h3');
    giftrequested.textContent = form.gift.value;
    santaListItem.appendChild(giftRequested);//top and bottom match?
  
    
    return santaListItem;
  }
  //pass the event
  const handleDeleteAllClick = function () {
    const santasList = document.querySelector('#list');
    list.innerHTML = '';
  }
  