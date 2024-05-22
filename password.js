const passwordBox = document.getElementById('password');
const button = document.getElementById('btn');
const copy = document.getElementById('copy');
const lenght = 12;

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbols = '!£$%^&*()_+=-#~@?/><|€';

const allChars = upperCase + lowerCase + number + symbols;

function createPassword(){
  let password = '';
  for (let i = 0; i < lenght; i++){
    password += allChars[Math.floor(Math.random() * allChars.length)]
  }
  passwordBox.value = password;
}


button.addEventListener('click', function(){
  createPassword();
})

copy.addEventListener('click', function(){
  copyPassword();
})
copys.addEventListener('click', function(){
  copysPassword();
})
function copyPassword(){
  passwordBox.select();
  document.execCommand('copy');
}

