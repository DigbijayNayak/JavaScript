function validateform(event) {
  event.preventDefault();
  var userName = document.myform.uname.value;
  var email = document.myform.email.value;
  var password = document.myform.psw.value;
  var country = document.myform.country.value;
  var gender = document.myform.gender;
  var lang = document.getElementsByName("lang");
  var atposition = email.indexOf("@");
  var dotpostion = email.lastIndexOf(".");
  var data = new Object();
  var i;
  if (userName == null || userName == "") {
    alert("Name can't be blank");
    return false;
  }
  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return false;
  }
  if(atposition < 1 || dotpostion < atposition + 2 || dotpostion+2 >= email.length){
    alert("Please enter a valid e-mail address \n atpostion:"+atpostion+"\n dotpostion:"+dotpostion);
    return false;
  }
  for(i = 0; i < gender.length; i++){
    if(gender[i].checked){
      data.gender = gender[i].value;
    }
  }
  var langArray = new Array();
  for(i = 0; i < lang.length; i++){
    if(lang[i].checked){
      langArray.push(lang[i].value);
    }
  }

  data.userName = userName;
  data.email = email;
  data.password = password;
  data.country = country;
  data.lang = langArray;
  console.log(data);
}

form = document.getElementById("myform");
form.addEventListener('submit', validateform);
