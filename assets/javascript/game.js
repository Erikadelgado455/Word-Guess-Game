
    var wordarray =["jeep", "mazda", "toyota", "honda", "ford", "chevorlet", "hyundai"];
    var randomword=wordarray[Math.floor(Math.random()*wordarray.length)];
    var randomwordsplit=randomword.split('');
    
    var x;
    var count = 0;
    var answerarray=[];
    function startup()
    {
        for(var i=0; i< randomword.length; i++)
        {
            answerarray[i]="_ ";
        }
        s=answerarray.join(" ");
        document.getElementById("answer").innerHTML.x;
    }
    function Letter() 
    {
        var letter=document.getElementById("letter").value;
        if(letter.length>0)
        {
            for(var i=0; i<randomword.length; i++)
            {
                if(randomword[i]===letter)
                {
                    answerarray[i]=letter;
                }
            }
            count++;
            document.getElementById("timesguessed").innerHTML="Times Guessed:"+count;
            document.getElementById("answer").innerHTML=answerarray.join(" ");
        }
        
    }

   
