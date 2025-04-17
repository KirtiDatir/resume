document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const student = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      studentId: document.getElementById("studentId").value,
      course: document.getElementById("course").value,
      password: document.getElementById("password").value
    };
  
    localStorage.setItem(student.email, JSON.stringify(student));
    alert("Registration successful!");
    window.location.href = "login.html";
  });
  