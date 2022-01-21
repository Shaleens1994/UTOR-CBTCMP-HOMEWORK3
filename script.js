// Assignment Code
var generateBtn = document.querySelector("#generate");
let input;
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
{if(input >= 8 && input <=128) // conditional sttement to match first criteria
{alert("Range Accepted- Click OK to Continue!");
lcasechar = confirm("Include Lower Case");
ucasechar = confirm("Include upper Case");
ncasechar = confirm("Include Numerical Characters");
scasechar = confirm("Include Special Characters Case");
finalpassword="0";
finalpassword = writePasswordfirst()
return finalpassword;}

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
    final+=charcodes[Math.floor(Math.random() * charcodes.length)]; // For loop to add individual characters based on the criteria selected
  }
  

    return final;
  }
 
  


