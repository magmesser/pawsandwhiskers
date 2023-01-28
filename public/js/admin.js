// Create form handlers and event listeners
// Create New Dog Form
const newDogForm = async (event) => {
  event.preventDefault();
  console.log("adding new dog");

  const name = document.querySelector("#dog-name").value.trim();
  const breed = document.querySelector("#dog-breed").value.trim();
  const age = document.querySelector("#dog-age").value.trim();
  const size = document.querySelector("#dog-size").value.trim();
  const gender = document.querySelector("#dog-gender").value.trim();
  const description = document.querySelector("#dog-desc").value.trim();
  const color = document.querySelector("#dog-color").value.trim();

  console.log(
    `${name} - ${breed} - ${age} - ${size} - ${gender} - ${description} - ${color}`
  );
  const image = document.getElementById("output");

  if (name && breed && age && size && gender && description && color) {
    console.log("testing dog form");
    const response = await fetch(`/api/dogs`, {
      method: "POST",
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
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/admin");
      alert("New dog created!");
    } else {
      alert("Failed to create dog listing");
    }
  }
};

// Create New Cat Form
const newCatForm = async (event) => {
  event.preventDefault();
  console.log("adding new cat");

  const name = document.querySelector("#cat-name").value.trim();
  const breed = document.querySelector("#cat-breed").value.trim();
  const age = document.querySelector("#cat-age").value.trim();
  const size = document.querySelector("#cat-size").value.trim();
  const gender = document.querySelector("#cat-gender").value.trim();
  const description = document.querySelector("#cat-desc").value.trim();
  const color = document.querySelector("#cat-color").value.trim();

  console.log(
    `${name} - ${breed} - ${age} - ${size} - ${gender} - ${description} - ${color}`
  );
  const image = document.getElementById("output-cat");

  if (name && breed && age && size && gender && description && color) {
    console.log("testing cat form");
    const response = await fetch(`/api/cats`, {
      method: "POST",
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
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/admin");
      alert("New cat created!");
    } else {
      alert("Failed to create cat listing");
    }
  }
};

document.querySelector("#new-dog-form").addEventListener("submit", newDogForm);

document.querySelector("#new-cat-form").addEventListener("submit", newCatForm);

// Delete form handlers and event listeners
// Delete Dog 
const delDogButtonHandler = async (event) => {
  if (event.target.hasAttribute("dog-data-id")) {
    const id = event.target.getAttribute("dog-data-id");

    const response = await fetch(`/api/dogs/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/admin");
      confirm("Delete dog?");
    } else {
      alert("Failed to delete dog");
    }
  }
};

// Delete Cat
const delCatButtonHandler = async (event) => {
  if (event.target.hasAttribute("cat-data-id")) {
    const id = event.target.getAttribute("cat-data-id");

    const response = await fetch(`/api/cats/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/admin");
      confirm("Delete cat?");
    } else {
      alert("Failed to delete cat");
    }
  }
};

document.querySelector("#dogID").addEventListener("click", delDogButtonHandler);

document.querySelector("#catID").addEventListener("click", delCatButtonHandler);