function fun(){
    var p=document.getElementById("NAME").value;
     var obj={
     NAME:document.getElementById("NAME").value,
     EMAIL: document.getElementById("EMAIL").value,
     PWD: document.getElementById("ID").value,
  
   } 
    // alert("HEY THERE");
    event.preventDefault(); 
    // sessionStorage(, exp);
    document.location.href = 'login.html';
    alert("NAME: "+obj.NAME+"  "+
    "EMAIL: "+obj.EMAIL+" "+
    "PWD: "+obj.PWD

    );
    
    };
    // 
   
    module.exports= obj;