/*
// javascript treat function as a first class cityzen
console.log("Hello World !");

// Variable
var name = "jay shah";
console.log(name);

var n = 5;
if (n < 5) {
  console.log("n is less than 5");
}
else {
  console.log("n is greather than 5 or equal");
}

var user = "shahjay00785";
function sayHello(name) {
  console.log("Function is executed " + name);
  console.log("UserName " + user);
}
sayHello("montu");
sayHello(500);

function doWork(work){
  work();
}
doWork(function(){
  console.log("Working..");
});

// DOM = Object Oriented Representation of html

console.log(document);

var logoName = document.getElementsByClassName('logo')[0].textContent; //Snappy
console.log(logoName);

var logoElements = document.getElementsByClassName('logo');
var logo = logoElements[0];
var logoname = logo.textContent;
console.log(logoname);
logo.textContent = "MI - CHAT";


*/
/*


function call anoyms

var signInButton = document.getElementById('signin-button');
console.log(signInButton);

signInButton.addEventListener("click",function() {
  console.log("Button clicked!");
});

*/
/*

2 nd way to create function

var signInButton = document.getElementById('signin-button');
console.log(signInButton);


signInButton.addEventListener("click",buttonClicked);
*/

/*function buttonClicked(){
  console.log("Button clicked");
}*/

/*
function click(elementId, fn){
  var element= document.getElementById(elementId);

  if(element){
    element.addEventListener("click",fn);
  }
}

/*click("signin-button",buttonClicked);*/


/*
function redirect(path){
  path=window.location=path;
  return false;
}*/


/*click("signin-button", function(){
  window.location="chat.html";
});
*/
/*
function logInUser() {
  //using fiirebase
  //login with google
     redirect("chat.html");
}

/*click("signin-button", function(){
     redirect("chat.html");
});*/


/*
var user1={
    id:1,
    name:"jay",
    username: "shahjay00785",
    sayHello: function() {
      console.log("hello" + this.name);
    }
};

var user2={
    id:2,
    name:"dhruv",
    username: "dhruv",
    sayHello: function() {
      console.log("hello" + this.name);
    }
};


/*console.log(user2.name);
user.sayHello();


var users = [
  user1,
  user2
];


//console.log(users[0],users[1]);



for(var i=0; i< users.length; i++){
  var user = users[i];
  console.log(user.id);
}



var message=new Object();
message.text="hello";
console.log(message.text);

*/

// Get a reference to the database service





/*
var databaseRef = database.ref();


databaseRef.set({
  email: "shahjay00785@gmai;.com"
});

databaseRef.on('value',function(snapshot) {
    console.log(snapshot.val().name);
});
*/

/*
var userRef = database.ref("users");

userRef.on('value',function (snapshot) {
  console.log(snapshot.val());

})

userRef.child("1234").set({
  email: "shahjay@gmail.com"
});
*/
/*
var userRef =firebase.database();
var provider = new firebase.auth.GoogleAuthProvider();
*/

click("signin-button", logInUser);
