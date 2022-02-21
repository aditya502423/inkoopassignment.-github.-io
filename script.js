function gameplay()
{
  
 
    var player1=Math.floor(Math.random()*5)+1;
    var player2=Math.floor(Math.random()*5)+1;
    var p1=100;
    var p2=100;
    var element=document.getElementById("player2");
   var value1=element.innerText;
   value1++;
  var element=document.getElementById("player1");
  var value=element.innerText;
  value++;
    
   
while(p1>0 && p2>0)
{ 
    if(player1>player2)
   {
      if(value>5)
      {

        break;
      }
      else
      {
        document.getElementById("player1").innerText=value;
       p2= p2-20;

      }
    
  }

else
{ 
if(value1>5)
{
  
  break;
}
else
  {
    document.getElementById("player2").innerText=value1;
    p1=p1-20;
   
    
  }
}
}

if(p2==0)
{ 
  
  document.getElementById("gamecontact").innerText= "Player 1 Wins!";
}
else{
  document.getElementById("gamecontact").innerText= "Player 2 Wins!";





}
}

   

 



 



  




