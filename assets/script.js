//Function on click, click triggers the password generator.


 
function promptpwd(){
  
  
    var password = "";
    var specnum = "0123456789!@#$%^&*()abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var num =  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var spec = "!@#$%^&*()abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordMax = prompt("Please choose length of password (8 - 128 characters)");
        
//Determines the length of the string (Password).    
      if(passwordMax <= 128 && passwordMax >= 8){
      
      }
      else{
        alert("Invalid, i cannot generate your password, please try again.")
      }

// Confirm whether or not to include lowercase and uppercase or only one type.     
if(passwordMax >= 8){

    var typoOptions = prompt("Choose type of characters: \nUpper + Lower Case [ M ] \nOnly UpperCase [ U ] \nOnly LowerCase [ L ]").toLowerCase();
    
    if(typoOptions === "l") {
      console.log(typoOptions + " Lowercase");
      }
      else if(typoOptions === "u" ){
        console.log(typoOptions + " Uppercase");
        }
    else if(typoOptions === "m" ){
      console.log(typoOptions + " Mixed Typo");
      }
    else{
      alert("Invalid, i cannot generate your password, try again.");
      return promptpwd();
    
      }
  }

// Confirm whether or not to include numeric, and/or special characters.
if(typoOptions === "m" || typoOptions === "u" || typoOptions === "l"  ){
      var specialnumeric = prompt("Do you want to include numeric and special characters? Answer yes or no ").toLowerCase();

      console.log(specialnumeric + " 4");
      if(specialnumeric === "no"){
      var numeric = prompt("Do you only want to include numeric characters? Answer yes or no").toLowerCase();
      }

      if (numeric === "no"){
      var specialchar = prompt("Do you only want to include speacial characters? Answer yes or no").toLowerCase();
      }

     if(specialchar === "no") {
    alert("Invalid, i cannot generate your password, try again.");
    return promptpwd();
  }
}

// Password generator based on a for loop, here is also where the letters turns Uppercase, Lowercase or mixed type.
if(typoOptions === "u" && specialnumeric === "yes" || numeric === "yes" || specialchar ==="yes" ){
  
 console.log("I am at Uppercase")
      if(specialnumeric === "yes")
      
        {
        for (var i = 0; i <= passwordMax-1; i++) {
          var randomNumber = Math.floor(Math.random() * specnum.length);
          password += specnum.substring(randomNumber, randomNumber +1);
         
         }
         document.querySelector("#password").value = password.toUpperCase();
      }
        if (numeric === "yes" && specialnumeric === "no"){
        for (var i = 0; i <= passwordMax; i++) {
          var randomNumber = Math.floor(Math.random() * num.length);
          password += num.substring(randomNumber, randomNumber +1);
          
      }
      document.querySelector("#password").value = password.toUpperCase();
    }
     else if(specialchar === "yes" && numeric === "no") {
      for (var i = 0; i <= passwordMax-1; i++) {
        var randomNumber = Math.floor(Math.random() * spec.length);
        password += spec.substring(randomNumber, randomNumber +1);
        
      }
     document.querySelector("#password").value = password.toUpperCase();
    }
  }


  else if (typoOptions === "l" && specialnumeric === "yes" || numeric === "yes" || specialchar ==="yes" ){
  
    console.log("I am at Uppercase")
         if(specialnumeric === "yes")
         
           {
           for (var i = 0; i <= passwordMax-1; i++) {
             var randomNumber = Math.floor(Math.random() * specnum.length);
             password += specnum.substring(randomNumber, randomNumber +1);
            
            }
            document.querySelector("#password").value = password.toLowerCase();
         }
           if (numeric === "yes" && specialnumeric === "no"){
           for (var i = 0; i <= passwordMax; i++) {
             var randomNumber = Math.floor(Math.random() * num.length);
             password += num.substring(randomNumber, randomNumber +1);
             
         }
         document.querySelector("#password").value = password.toLowerCase();
       }
        else if(specialchar === "yes" && numeric === "no") {
         for (var i = 0; i <= passwordMax-1; i++) {
           var randomNumber = Math.floor(Math.random() * spec.length);
           password += spec.substring(randomNumber, randomNumber +1);
           
         }
        document.querySelector("#password").value = password.toLowerCase();
       }
     }



     else{
  
      console.log("I am at Uppercase")
           if(specialnumeric === "yes")
           
             {
             for (var i = 0; i <= passwordMax-1; i++) {
               var randomNumber = Math.floor(Math.random() * specnum.length);
               password += specnum.substring(randomNumber, randomNumber +1);
              
              }
              document.querySelector("#password").value = password;
           }
             if (numeric === "yes" && specialnumeric === "no"){
             for (var i = 0; i <= passwordMax; i++) {
               var randomNumber = Math.floor(Math.random() * num.length);
               password += num.substring(randomNumber, randomNumber +1);
               
           }
           document.querySelector("#password").value = password;
         }
          else if(specialchar === "yes" && numeric === "no") {
           for (var i = 0; i <= passwordMax-1; i++) {
             var randomNumber = Math.floor(Math.random() * spec.length);
             password += spec.substring(randomNumber, randomNumber +1);
             
           }
          document.querySelector("#password").value = password;
         }
       }     

       
}

