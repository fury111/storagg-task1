const form = document.getElementById("userForm");
const display = document.getElementById("display");

window.onload = showData;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const languages = [...document.querySelectorAll("input[name='pl']:checked")].map(c => c.value);

  if (languages.length < 3) {
    alert("Please select at least 3 languages.");
    return;
  }

  const userData = {
    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    gender: document.getElementById("gender").value,
    bio: document.getElementById("bio").value,
    major: document.getElementById("major").value,
    languages: languages
  };

  localStorage.setItem("userData", JSON.stringify(userData));

  showData(); 
});

function showData() {
  const data = JSON.parse(localStorage.getItem("userData"));

  if (!data) {
    display.innerHTML = "No saved data.";
    return;
  }

  display.innerHTML = `
    <div class="card">
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Age:</strong> ${data.age}</p>
      <p><strong>Gender:</strong> ${data.gender}</p>
      <p><strong>Description:</strong> ${data.bio}</p>
      <p><strong>Major:</strong> ${data.major}</p>
      <p><strong>Languages:</strong> ${data.languages.join(", ")}</p>
    </div>
  `;
}
