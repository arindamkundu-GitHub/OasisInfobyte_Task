function register() {
  const username = document.getElementById("regUser").value;
  const password = document.getElementById("regPass").value;

  if (username === "" || password === "") {
    alert("Please fill in all fields");
    return;
  }

  if (localStorage.getItem(username)) {
    alert("Username already exists!");
  } else {
    localStorage.setItem(username, password);
    alert("Registration successful! Please login.");
  }
}

function login() {
  const username = document.getElementById("loginUser").value;
  const password = document.getElementById("loginPass").value;

  const storedPassword = localStorage.getItem(username);
  const msg = document.getElementById("msg");

  if (storedPassword === password) {
    localStorage.setItem("loggedInUser", username);
    window.location.href = "dashboard.html";
  } else {
    msg.innerText = "Invalid username or password.";
  }
}
