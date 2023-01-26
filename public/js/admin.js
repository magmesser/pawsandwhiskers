//JS pulled from the mini proyect's profile.js.

const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#pet-name').value.trim();
    const needed_funding = document.querySelector('#project-funding').value.trim();
    const description = document.querySelector('#project-desc').value.trim();
  
    if (name && needed_funding && description) {
      const response = await fetch(`/api/projects`, {
        method: 'POST',
        body: JSON.stringify({ name, needed_funding, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create project');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/dogs/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/admin');
      } else {
        alert('Failed to delete pet');
      }
    }
  };
  
  document
    .querySelector('.new-pet')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.btn-danger')
    .addEventListener('click', delButtonHandler);

//Script for image upload.
    var loadFile = function(event) {
        var image = document.getElementById('output');
        image.src=URL.createObjectURL(event.target.files[0]);
    };    