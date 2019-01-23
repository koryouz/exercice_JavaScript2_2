function myFunction() {
  var lname = document.getElementById('lastname').value;
  var regex = new RegExp('(^[a-zA-Z]+$)');
  if (regex.test(lname)) {
    alert('Merci de votre participation');
  }
  else {
    alert('Nom invalide');
}
}
