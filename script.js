// Assignment Code
var generateBtn = document.querySelector("#generate");
let input = "default"
var lcasechar;
var ucasechar;
var ncasechar;
var scasechar;
var comp;
var finalpassword;
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var spchar = ["/[!@#$%^&*()_+\-=\[\]{};':\\|.<>\/?]+/"]
var numchar = "0123456789"
var final = "";
var charcodes = "";
// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

 


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
input=prompt("enter maximum length of charcter");
console.log(input);
{if(input >= 8 && input <=128)
{alert("Accepted");
lcasechar = confirm("Include Lower Case");
ucasechar = confirm("Include upper Case");
ncasechar = confirm("Include Numerical Characters");
scasechar = confirm("Include Special Characters Case");
finalpassword="0";
finalpassword = writePasswordfirst()
return finalpassword;}

if (lcasechar==true)
  {console.log("hoog");

}

else { alert("not possible");}
}}
function writePasswordfirst() {

  if(lcasechar) charcodes+= lowercase;
  if(ucasechar) charcodes+= uppercase;
  if(scasechar) charcodes+= spchar;
  if(ncasechar) charcodes+= numchar;
  var i;

  for(i = 0;i<(input);i++)
  {
    final+=charcodes[Math.floor(Math.random() * charcodes.length)];
  }
  /*
  if(lcasechar==true)
  {
    
    for(i = 0;i<(input/4);i++)
    {
      final+=lowercase[Math.floor(Math.random() * 26)];
    }}
  
    if(ucasechar==true)
  {
    
    for(i;i<(input/3);i++)
    {
      final+=uppercase[Math.floor(Math.random() * 26)];
    }}

    if(scasechar==true)
  {
    
    for(i;i<(input/2);i++)
    {
      final+=spchar[Math.floor(Math.random() * 26)];
    }}
    if(ncasechar==true)
    {
      
      for(i;i<(input);i++)
      {
        final+=numchar[Math.floor(Math.random() * 10)];
      }}*/
  

    return final;
  }
 
  



/*function myFunction() {
  var txt;
  if (confirm("Press a button!")) {
    txt = "You pressed OK!";
  } else {
    txt = "You pressed Cancel!";
  }
  document.getElementById("demo").innerHTML = txt;
}
function returnText(){
  input = document.getElementById("userInput").value;
  result = input.includes(" !","#$%&'()*+,-./:;<=>?@[\]^_`{|}~"", 0);
  if (result){
    alert("Good")
  } else{}
  let spChar = "/[!@#$%^&*()_+\-=\[\]{};':\\|,.<>\/?]+/";
  for (var i = 0; i < input.length; i++) {
     if (spChar.indexOf(input.charAt(i)) != -1) {
         return true;
     }
  }
  return false;
  
}

if (input="password") {
  alert("Password Okay")
} else { alert("not Okay")}

function check(_string) {
  let spChar = "/[!@#$%^&*()_+\-=\[\]{};':\\|,.<>\/?]+/";
  for (var i = 0; i < _string.length; i++) {
     if (spChar.indexOf(_string.charAt(i)) != -1) {
         return true;
     }
  }
  return false;
}

function containsSpecialChars(str) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return specialChars.test(str);
} */ 
