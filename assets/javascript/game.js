
    var wordbank =["jeep", "mazda", "toyota", "honda", "ford", "chevorlet", "hyundai"];
    var words=wordbank[Math.floor(Math.random()*wordbank.length)];
    var wordsplit=words.split('');
    
    var x;
    var timesguessed = 0;
    var answer=[];
    var alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var chosen=[]
    function game()
    {
        for(var i=0; i< words.length; i++)
        {
            answer[i]="_ ";
            
        }
        x=answer.join(" ");
        document.getElementById("answer").innerHTML.x;
        for(var i=0; i< alphabet.length; i++)
        {
            chosen[i]="$ ";
        }
        y=chosen.join(" ");
        document.getElementById("chosen").innerHTML.y;
    }
    function Letterguessed() 
    {
        var letterguessed=document.getElementById("letterguessed").value;
        if(letterguessed.length>0)
        {
            for(var i=0; i<words.length; i++)
            {
                if(words[i]===letterguessed)
                {
                    answer[i]=letterguessed;
                }
                else{
                    
                }
            }
            for(var i=0; i<alphabet.length; i++)
            {
                if(alphabet[i]===letterguessed)
                {
                    chosen[i]=letterguessed;
                }
            }
           
            timesguessed++;
            document.getElementById("timesguessed").innerHTML="Times Guessed:"+timesguessed;
            document.getElementById("answer").innerHTML=answer.join(" ");
            document.getElementById("chosen").innerHTML=chosen.join(" ");
        }
    }

   
