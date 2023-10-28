function countDigit(n) 
{ 
    let count = 0; 
    while (n != 0)  
    { 
        n = Math.floor(n / 10); 
        ++count; 
    } 
    return count; 
} 
  
function ValidateEmail() 
{
   var email =  document.getElementById('email').value;
   var mobNumber =  document.getElementById('mobNumber').value;
   var Pass =  document.getElementById('Pass').value;
   var confPass =  document.getElementById('confPass').value;
   errMsg=  document.getElementById("demo") ;
   if(email.length ==0||mobNumber.length ==0 ||Pass.length==0||confPass.length==0){
    errMsg.innerHTML= "Something got empty";
   }
    else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)))
  {
    errMsg.innerHTML = "Pls check emial";
  }
  else if(isNaN(mobNumber)){
       errMsg.innerHTML="invalid Number"
  }
  else if(countDigit(mobNumber)!=10 ){
       errMsg.innerHTML="invalid Number"
  }
  else if(Pass!=confPass){

       errMsg.innerHTML="Pls Match Password";
  }
  else{
    
       errMsg.innerHTML="success";
  }


}