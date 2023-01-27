const newDogForm = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#pet-name").value.trim();
  const breed = document.querySelector("#pet-breed").value.trim();
  const age = document.querySelector("#pet-age").value.trim();
  const size = document.querySelector("#pet-size").value.trim();
  const gender = document.querySelector("#pet-gender").value.trim();
  const description = document.querySelector("#pet-desc").value.trim();
  const color = document.querySelector("#pet-color").value.trim();

  const image = document.getElementById("output");

  if (name && breed && age && size && gender && description && color) {
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
    } else {
      alert("Failed to create dog listing");
    }
  }
};

const newCatForm = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#pet-name").value.trim();
  const breed = document.querySelector("#pet-breed").value.trim();
  const age = document.querySelector("#pet-age").value.trim();
  const size = document.querySelector("#pet-size").value.trim();
  const gender = document.querySelector("#pet-gender").value.trim();
  const description = document.querySelector("#pet-desc").value.trim();
  const color = document.querySelector("#pet-color").value.trim();

  const image = document.getElementById("output");

  if (name && breed && age && size && gender && description && color) {
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
    } else {
      alert("Failed to create cat listing");
    }
  }
};

document.querySelector(".new-dog-form").addEventListener("submit", newDogForm);

document.querySelector(".new-cat-form").addEventListener("submit", newCatForm);

// Delete form handlers and event listeners 

const delDogButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/dogs/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/admin");
      console.log("Dog deleted");
    } else {
      alert("Failed to delete dog");
    }
  }
};

const delCatButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/cats/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/admin");
      console.log("Cat deleted");
    } else {
      alert("Failed to delete cat");
    }
  }
};

document.querySelector("#dogID").addEventListener("click", delDogButtonHandler);

document.querySelector("#catID").addEventListener("click", delCatButtonHandler);
