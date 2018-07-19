window.onload = function () {

    var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H",
          "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
          "T", "U", "V", "W", "X", "Y", "Z",];
    
    var categories;         // Array of topics
    var chosenCategory;     // Selected catagory
    var getHint ;          // Word getHint
    var word ;              // Selected word
    var guess ;             // Guess
    var guesses = [ ];      // Stored guesses
    var lives ;             // Lives
    var counter ;           // Count correct guesses
    var space;              // Number of spaces in word '-'
  
    // elements
    var showLives = document.getElementById("mylives");
    var showCatagory = document.getElementById("scatagory");
    var getHint = document.getElementById("hint");
    var showClue = document.getElementById("clue");
  
  
  
    // create alphabet 
    var buttons = function () {
      myButtons = document.getElementById("buttons");
      letters = document.createElement("ul");
  
      for (var i = 0; i < alphabet.length; i++) {
        letters.id = 'alphabet';
        list = document.createElement('li');
        list.id = 'letter';
        list.innerHTML = alphabet[i];
        check();
        myButtons.appendChild(letters);
        letters.appendChild(list);
      }
    }
      
    
    // Select Catagory
    var selectCat = function () {
      if (chosenCategory === categories[0]) {
        catagoryName.innerHTML = "The Category Is Car Brands!";
      } else if (chosenCategory === categories[1]) {
        catagoryName.innerHTML = "The Category Is Genres Of Music!";
      } else if (chosenCategory === categories[2]) {
        catagoryName.innerHTML = "The Category Is Marvel Superheroes!";
      }
    }
  
    // Create guesses ul
     result = function () {
      wordHolder = document.getElementById("hold");
      correct = document.createElement("ul");
  
      for (var i = 0; i < word.length; i++) {
        correct.setAttribute("id", "my-word");
        guess = document.createElement("li");
        guess.setAttribute("class", "guess");
        if (word[i] === "-") {
          guess.innerHTML = "-";
          space = 1;
        } else {
          guess.innerHTML = "_";
        }
  
        guesses.push(guess);
        wordHolder.appendChild(correct);
        correct.appendChild(guess);
      }
    }
    
    //lives
     comments = function () {
      showLives.innerHTML = "You have " + lives + " lives";
      if (lives < 1) {
        showLives.innerHTML = "Game Over";
      }
      for (var i = 0; i < guesses.length; i++) {
        if (counter + space === guesses.length) {
          showLives.innerHTML = "You Win!";
        }
      }
    }
  
     
    canvas =  function(){

        box = document.getElementById("box");
        context = box.getContext("2d");
        context.beginPath();
        context.strokeStyle = "#fff";
        context.lineWidth = 2;
    };
    
  
    // OnClick Function
    check = function () {
        list.onclick = function () {
          var guess = (this.innerHTML);
          this.setAttribute("class", "active");
          this.onclick = null;
          for (var i = 0; i < word.length; i++) {
            if (word[i] === guess) {
              guesses[i].innerHTML = guess;
              counter += 1;
            } 
          }
          var j = (word.indexOf(guess));
          if (j === -1) {
            lives -= 1;
            comments();
          } else {
            comments();
          }
        }
      }
      
        
      // Play
      play = function () {
        categories = [
          ["JEEP", "MAZDA", "TOYOTA", "HONDA", "FORD", "CHEVORLET", "HYUNDAI"],
          ["CLASSICAL", "JAZZ", "ROCK", "RAP", "REGGAE"],
          ["SPIDERMAN", "HULK", "CAPTAIN-AMERICA", "IRONMAN", "THOR"]
        ];
    
        chosenCategory = categories[Math.floor(Math.random() * categories.length)];
        word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
        word = word.replace(/\s/g, "-");
        console.log(word);
        buttons();
    
        guesses = [ ];
        lives = 10;
        counter = 0;
        space = 0;
        result();
        comments();
        selectCat();
        canvas();
      }
    
      play();
      
      // Hint
    
        hint.onclick = function() {
    
          hints = [
              ["Go Anywhere, Do Anything", "Zoom-Zoom", "Let's Go Places", "The Power of Dreams", "Go further", "Chevy Runs Deep", "New Thinking, New Possibilities"],
              ["Beethoven", "Louis Armstrong", "Jimi Hendrix", "N.W.A", "Bob Marley"],
              ["Bitten by a radioactive spider", "you wouldn't like me when im angry", "red, white and blue", "i wear a supersuit", "God of Thunder"]
        ];
    
        var catagoryIndex = categories.indexOf(chosenCategory);
        var hintIndex = chosenCategory.indexOf(word);
        showClue.innerHTML = "Clue: - " +  hints [catagoryIndex][hintIndex];
      };
    
       // Reset
    
      document.getElementById("reset").onclick = function() {
        correct.parentNode.removeChild(correct);
        letters.parentNode.removeChild(letters);
        showClue.innerHTML = "";
        context.clearRect(0, 0, 400, 400);
        play();
      }
    }
    
  
  
    