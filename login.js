document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
  
    const storedUser = JSON.parse(localStorage.getItem(email));
  
    if (storedUser && storedUser.password === password) {
      localStorage.setItem("loggedInUser", email);
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid email or password");
    }
  });
  