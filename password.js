var password = document.querySelector('.password');
var error = document.querySelector('.error-message');
var padlock = document.querySelector('.padlock');
var arrow = document.querySelector('.arrow-icon');
var input = document.querySelector('.input-icon');
var pass = "KanjutBadag771";
password.addEventListener('keypress', function(e){
var key = e.which || e.keyCode;
if(key === 13){
  if(password.value != ""){
    if(password.value != pass){
      error.classList.add('show');
      padlock.classList.remove('unlock');
    }else{
      error.classList.remove('show');
      unlock();
    }
  }
}
});
password.addEventListener('keyup', function(){
if(password.value == ""){
  error.classList.remove('show');
  padlock.classList.remove('unlock');
  arrow.classList.remove('show');
}else{
  arrow.classList.add('show');
}
});
arrow.addEventListener('click', function(){
  if(password.value != pass){
    error.classList.add('show');
    padlock.classList.remove('unlock');
  }else{
    error.classList.remove('show');
    unlock();
  }
},false);
function unlock(){
  padlock.classList.add('unlock');
  input.classList.add('unlock');
  setTimeout(function(){
    padlock.classList.add('hide');
    setTimeout(function(){
      // If the password is correct
      window.location.href = 'https://drive.google.com/folderview?id=1Fq5ublHQBXDm5p7VOT4iYdqvtoasjvqH';
    }, 900);
  }, 600);
}