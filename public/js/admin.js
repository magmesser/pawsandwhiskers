
const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#pet-name').value.trim();
  const breed = document.querySelector('#pet-breed').value.trim();
  const age = document.querySelector('#pet-age').value.trim();
  const size = document.querySelector('#pet-size').value.trim();
  const gender = document.querySelector('#pet-gender').value.trim();
  const description = document.querySelector('#pet-desc').value.trim();
  const color = document.querySelector('#pet-color').value.trim();
  
  const image = document.getElementById('output');
  
  
  if (name && breed && age && size && gender && description && color) {
    const response = await fetch(`/api/dogRoutes`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        breed,
        age,
        size,
        gender,
        description,
        color,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/admin');
    } else {
      alert('Failed to create listing');
    }
  }

};
  
  document
    .querySelector('.new-pet')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.pet-list')
    .addEventListener('click', delButtonHandler);

//Script for image upload.
    var loadFile = function(event) {
        image.src=URL.createObjectURL(event.target.files[0]);
    };    