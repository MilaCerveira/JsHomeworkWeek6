document.addEventListener('DOMContentLoaded', () => {
  // test
  //console.log('Hello World'); check in console
  //form event listener
      // createButton();
      const theForm = document.querySelector ('#new-item-form');
      theForm.addEventListener ('submit', handleFormSubmit);
      const deleteButton = document.querySelector ('#delete-all');
      deleteButton.addEventListener ('click', handleDeleteClick);
    })
    const handleFormSubmit = function (submission) {
      submission.preventDefault();
      const newListItem = document.createElement('li');
      newListItem.textContent =
      `${submission.target.title.value}
      ${submission.target.artist.value}
      ${submission.target.genre.value}`
      const banana = document.querySelector('ul');
      banana.appendChild(newListItem);
      document.getElementById('new-item-form').reset();
    }
    const handleDeleteClick = function () {
      const resultUl = document.querySelector('ul');
      resultUl.innerHTML = ''
    }
    // function createButton () {
    //  const newButton = document.createElement ('button');
    //  newButton.innerHTML = 'Delete All';
    //  document.body.appendChild(newButton);
    // }