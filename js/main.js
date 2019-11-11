var loginbutton = document.getElementById("loginButton");
var temp = document.getElementById("temp");
var pass = document.getElementById("password");
var user = document.getElementById("user");

loginButton.addEventListener("click", login);


document.getElementById("randomForm").addEventListener("submit", function(e){
        e.preventDefault();    //stop form from submitting
});
function login() {
  console.log("checken");
  if (user.value === "user") {
  if (pass.value === "pass") {
    location = "C:/Users/calvi/OneDrive/Bureaublad/FakeNews/lg/FullPage.html";
  } else {
    console.log("pass is niet valid");
    pass.value = "";
    user.value = "";
  }
} else {
  console.log("user is niet valid");
  pass.value = "";
  user.value = "";
}
}
