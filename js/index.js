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

const namaInput = document.getElementById("nama");
const tempatlahirInput= document.getElementById("tempatLahir")
const tanggalLahirInput= document.getElementById("tanggalLahir")
const emailInput = document.getElementById("email")
const alamatInput = document.getElementById("alamat")
const jurusanInput = document.getElementById("jurusan")


//Nama
 namaInput.addEventListener('input', function() {
    var namaValue = namaInput.value.trim();

    var errorElement = document.getElementById('erruser');

    if (namaValue === '') {
        errorElement.textContent = 'Nama harus di isi ';
        errorElement.style.color = 'red';
        namaInput.style.border = "3px solid red";
    } else {
        errorElement.textContent = '';
        namaInput.style.border = '3px solid green';
    }
});

//tempat Lahir 
tempatlahirInput.addEventListener('input', function(){
  const tempatlahirValue = tempatlahirInput.value.trim();

  var errorElement = document.getElementById("errTempatL");

  if(tempatlahirValue === ''){
    errorElement.textContent= 'TempatLahir harus di isi';
    errorElement.style.color= 'red';
    tempatlahirInput.style.border = '3px solid red ';
  }else{
    errorElement.textContent='';
    tempatlahirInput.style.border='3px solid green';
  }
});

//tanggal Lahir
tanggalLahirInput.addEventListener('input', function(){
  const tanggalLahirValue = tanggalLahirInput.value.trim()

  var errorElement = document.getElementById("errTanggalL")

  if(tanggalLahirValue === '')
  {
    errorElement.textContent = 'Tanggal Lahir harus di isi '
    errorElement.style.color = 'red'
    tanggalLahirInput.style.border = '3px solid red '

  }else {
    errorElement.textContent=''
    tanggalLahirInput.style.border = '3px solid green'

  }
})

//Email
emailInput.addEventListener('input', function(){

  const emailValue = emailInput.value.trim()

  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

 var errorElement = document.getElementById("errEmail")

  if(emailValue === '')
  {
    errorElement.textContent = 'email harus di isi '
    errorElement.style.color = 'red'
    emailInput.style.border = '3px solid red '
  }else if(!emailPattern.test(emailValue)){
    errorElement.textContent = 'Masukkan email dengan benar'
    errorElement.style.color = 'red'
    emailInput.style.border = '3px solid red '
  }
  else{
    errorElement.textContent=''
    emailInput.style.border = '3px solid green'
  }
})

alamatInput.addEventListener("input", function(){
  const alamatValue = alamatInput.value.trim()
  const errorElement = document.getElementById("errAlamat")

  if(alamatValue===''){
    errorElement.textContent = 'alamat harus di isi'
    errorElement.style.color = 'red'
    alamatInput.style.border = '3px solid red '
  } else{
    errorElement.textContent = ''
    alamatInput.style.border = '3px solid green '
  }
})

jurusanInput.addEventListener("input", function(){
  const jurusanValue = jurusanInput.value.trim()
  const errorElement = document.getElementById("errJurusan")

  if(jurusanValue === ''){
    errorElement.textContent = 'ambil lah salah satu jurusan'
    errorElement.style.color = 'red'
    jurusanInput.style.border = '3px solid red '
  }else{
    errorElement.textContent = ''
    jurusanInput.style.border = '3px solid green '
  }
})

