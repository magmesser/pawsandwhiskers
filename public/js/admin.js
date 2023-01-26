
const newDogForm = async (event) => {
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
  .querySelector('.form new-pet-form p-2 m-2 rounded')
  .addEventListener('submit', newFormHandler);


    .querySelector('.new-dog-form')
    .addEventListener('submit', newDogForm);

  const newCatForm = async (event) => {
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
    const response = await fetch(`/api/catRoutes`, {
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
    .querySelector('.new-cat-form')
    .addEventListener('submit', newCatForm);

  

//Script for image upload.
var loadFile = function (event) {
  image.src = URL.createObjectURL(event.target.files[0]);
};



