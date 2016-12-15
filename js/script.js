function Player(){
    this.score=0;


}
var Player1 = new Player();
var Player2 =new Player();
var isPlayer1=true;
var isPlayer2= true;




$("document").ready(function(){
$("#btn").click(function(event){
    event.preventDefault();
    
    var x = Math.floor((Math.random() * 6) + 1);
     console.log(x);
     //perform checks to continue or not
     if(x ===1 || x===6){

        if(isPlayer1 ){
            
            isPlayer1 = false;
           
        }
        else{
            
            isPlayer2 = true;
          
        }
       
       
     }
     else{
         if(isPlayer1 ){
            
           Player1.score += x;
            if(confirm("Continue?")){
             Player1.score += x;
            }
            else{
                
            }
        }
        else{
            if(isPlayer2)
            Player2.score +=x;
            if(confirm("Continue?")){
             Player2.score += x;
            }
            else{
              
            }
        }
     }

  $("#result1").append("<ul>"+(Player1.score)+"</ul>");
   $("#result2").append("<ul>"+(Player2.score)+"</ul>");

});
});