const toggleForm = () => {
  const container = document.querySelector('.container');
  container.classList.toggle('active');
  var a=document.getElementById('name');
console.log(a.value);
};

function signUp(){
  var email=document.getElementById('email').value;
  var pass=document.getElementById('pass').value;
  var cpass=document.getElementById('cpass').value;
  alert('registered');
  location.href= 'signLog.html';

  // if(pass===cpass){
  //    firebase.auth().createUserWithEmailAndPassword(email,pass).then(function(){
  //   alert('You have been registered successfully');
  //   location.href= 'signLog.html';
  // }).catch(function(error){
  //   var errorcode=error.code;
  //   var errormsg=error.message;
  // })
  // }
  // else{
  //   alert('Failed!! Passwords should be same');
  // }
 
}

function login(){
  var email=document.getElementById('emailAddress').value;
  var pass=document.getElementById('password').value;
  location.href= 'index.html';

}