$(document).ready(function() {
  var name = $('#inputName');
  var age = $('#inputAge');
  var phone = $("#inputPhone");
  var email = $('#inputEmail');
  var form = $('#form');

  $('#inputName').blur(function(event) {
    event.preventDefault();
    var nameEntered = name.val();
    if(nameEntered.length > 2) {
      $('#nameSpan').append("Valid")
      break;
    } else {
      alert('You need to enter more than 2 characters for your name');

    }
  });
  $('#inputAge').blur(function(){
    var ageEntered = age.val();
    var intRegex = /^\d+$/;
    var floatRegex = /^((\d+(\.\d *)?)|((\d*\.)?\d+))$/;
    if((intRegex.test(ageEntered) || floatRegex.test(ageEntered)) && ageEntered < 150){
      alert('valid');
    } else {
      alert("Invalid age");
      return false;
    }
  });
  $('#inputPhone').blur(function(){
    var phoneEntered = phone.val();
    var phoneRegex = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    if(phoneRegex.test(phoneEntered) && (phoneEntered.length === 10 || phoneEntered.length === 12)){
      alert('valid');
    } else {
      alert('Invalid phone number');
    }
  });
  $('#inputEmail').blur(function(event){
    event.preventDefault();
    var emailEntered = email.val();
    var emailAtIndex = emailEntered.indexOf('@');
    var emailDotIndex = emailEntered.lastIndexOf('.');
    if(emailAtIndex<1 || emailDotIndex<emailAtIndex+2 || emailDotIndex+2>=emailEntered.length){
      alert("Email not valid");
    } else {
      alert("Valid email address");
    }
  });
  $('#inputSubmit').on('click', function(event){
    event.preventDefault();

    console.log('form');
    var display = $('#displayBox');
    var formList = $('#formList');
    var listName = $('<li><span>Name: ' + name.val() + '</span></li>');
    var listAge = $('<li><span>Age: ' + age.val() + '</span></li>');
    var listPhone =$('<li><span>Phone: ' + phone.val() + '</span></li>');
    var listEmail =$('<li><span>Email: ' + email.val() + '</span></li>');
    formList.append(listName, listAge, listPhone, listEmail);
  });

});

