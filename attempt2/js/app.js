document.addEventListener('DOMContentLoaded', () => {
    
    // test 
    //console.log('Hello World'); check in console
    //form event listener 
        createButton();
        const theForm = document.querySelector ('#new-item-form');
        theForm.addEventListener ('submit', handleFormSubmit);
        
        const deleteButton = document.querySelector ('button');
        deleteButton.addEventListener ('click', handleDeleteClick);
        
      })
      
      
      