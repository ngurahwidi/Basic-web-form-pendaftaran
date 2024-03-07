// this is alert section
var warning_Alert = document.getElementById("warning_Alert");
var email_Alert = document.getElementById("email_Alert");
var succes_Alert = document.getElementById("succes_Alert");

warning_Alert.style.display = "none";
succes_Alert.style.display = "none";
email_Alert.style.display = "none";
var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function myFunction(event) {
  event.preventDefault();
  var nama = document.getElementById("nama").value;
  var tempatLahir = document.getElementById("tempatLahir").value;
  var tanggalLahir = document.getElementById("tanggalLahir").value;
  var email = document.getElementById("email").value;
  var alamat = document.getElementById("alamat").value;
  var jurusan = document.getElementById("jurusan").value;

  if (
    nama == "" ||
    tempatLahir == "" ||
    tanggalLahir == "" ||
    email == "" ||
    alamat == "" ||
    jurusan == ""
  ) {
    fadein(warning_Alert);
    setTimeout(() => {
      fadeout(warning_Alert);
    }, 3000);
    return false;
  }

  if (!emailPattern.test(email)) {
    fadein(email_Alert);
    setTimeout(() => {
      fadeout(email_Alert);
    }, 3000);
    return false;
  }

  if (
    nama !== "" &&
    tempatLahir !== "" &&
    tanggalLahir !== "" &&
    email !== "" &&
    alamat !== "" &&
    jurusan !== ""
  ) {
    fadein(succes_Alert);
    setTimeout(() => {
      fadeout(succes_Alert);
    }, 5000);
    return false;
  } else {
    fadeout(succes_Alert);
    fadeout(email_Alert);
    fadeout(warning_Alert);
    return true;
  }
}
function fadein(myalert) {
  myalert.style.display = "block";
  setTimeout(() => {
    myalert.classList.add("show");
  }, 100);
}
function fadeout(myalert) {
  myalert.classList.remove("show");
  setTimeout(() => {
    myalert.style.display = "none";
  }, 200);
}
// this is form validation section
