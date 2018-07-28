var words =['jeep', 'mazda', 'toyota', 'honda', 'ford', 'chevorlet', 'hyundai'];
var wrongwords=[];
var rightwords=["_","_","_","_"];
var userinputkey;
var randomword=Math.floor(Math.random()*words.length);;
var currentword=words[randomword];
var wordsplit=currentword.split('');
var wrongcount=5;

document.getElementById('correctguesses').textContent=rightwords;
    document.onkeyup=function()
    {
        console.log("wrongguesses"+wrongcount);
        userinputkey=event.key;
    while(wrongcount>0 && rightwords !== wordsplit)
    {
    if(currentword.indexOf(userinputkey)>-1)
    {
            if(userinputkey === currentword.charAt(0))
            {
                rightwords.fill(userinputkey,0,1);
                console.log("correct"+rightwords)
                document.getElementById('correctguesses').textContent=rightwords
            }
            else if(userinputkey === currentword.charAt(1))
            {
                rightwords.fill(userinputkey,1,2);
                console.log("correct"+rightwords);
                document.getElementById('correctguesses').textContent=rightwords
            }
            else if(userinputkey === currentword.charAt(2))
            {
                rightwords.fill(userinputkey,2,3);
                console.log("correct"+rightwords);
                document.getElementById('correctguesses').textContent=rightwords
            }
            else if(userinputkey === currentword.charAt(3))
            {
                rightwords.fill(userinputkey,3,4);
                console.log("correct"+rightwords);
                document.getElementById('correctguesses').textContent=rightwords
            }
        }
      else
      {
          wrongwords.push(userinputkey);
          console.log("incorrect"+wrongwords);
          document.getElementById('wrongguesses').textContent=wrongwords;
          wrongcount--;
        }
    }
    if(wrongcount===0)
    {
        console.log("game over");
    }
        
    }

