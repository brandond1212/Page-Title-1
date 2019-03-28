$("button").click(function() {
    var old=$(".questiontwo").val();
    var food=$(".questionthree").val();
    if(old >=15 && food ==="yes"){
        $("div").text("You are squidward!");
    } else if (old <=10 && food ==="yes"){
        $("div").text("You are spongebob!");
    } else if (old <=5 && food ==="yes"){
        $("div").text("You are patrick!");
    } else if (old <=20 && food ==="yes"){
        $("div").text("You are Mr.Krabs!");
    }
      
    
    
    
    
    
    
});
        