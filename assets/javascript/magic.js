
var stuff = ["yes","no","all signs point to YES!","I'm not sure","Try asking again later, I'm too tired to think right now", "absolutely", "that is doubtful","The future is foggy right now, I cannot answer with certainty"];
 
var response = [];
 

     $("#submit").on("click", function(){

     var input = $("#userInput").val();

     if(input === "" || input === " "){

           alert("please enter a question");

}

else{     

 

$("#userInput").val("");

 

 

response.push(input);

 

var word = stuff[Math.floor(Math.random()*stuff.length)];

 

 

document.getElementById("response").innerHTML = ( input + ":  ");

document.getElementById("answer").innerHTML = (word);
 
}

})