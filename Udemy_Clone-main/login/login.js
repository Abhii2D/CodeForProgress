function signup() {
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let pass1 = document.querySelector("#pass1").value;
  let pass2 = document.querySelector("#pass2").value;

  localStorage.setItem("nameC", name);
  localStorage.setItem("emailC", email);
  localStorage.setItem("pass1C", pass1);
  localStorage.setItem("pass2C", pass2);


  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("pass1").value = "";
  document.getElementById("pass2").value = "";
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  Toast.fire({
    icon: "success",
    title: "Signed in successfully"
  });
}

function login() {
  let email = document.querySelector("#email1").value;
  let pass = document.querySelector("#password").value;
  var em = localStorage.getItem("emailC");
  var pa = localStorage.getItem("pass2C");
  var btn = document.querySelector(".button");
  if (email == em && pa == pass) {
    btn = window.location.replace("../index.html");
  } else {
    alert("login failed");
  }
}
