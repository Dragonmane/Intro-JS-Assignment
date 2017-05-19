

console.log("Introduction to JavaScript!");

console.log("FizzBuzz question");
for (var i = 1; i <= 100; i++){
    //checks to see if the number a divisible of
    //3 and 5 and replaces the number with fizzbizz
    if(i%5 === 0 && i%3 === 0){
        console.log('fizzbuzz');
    }
    //otherwise it checks to see if its divisible
    //of 3 and changes the number to fizz
    else if(i%3 === 0){
        console.log('fizz');
    }
    //and checks to see if its a divisible of 5
    //which it will replace the number with buzz
    else if(i%5 === 0){
        console.log('buzz');
    }
    //last is just to print the number
    else{
        console.log(i);
    }
}

function countBs(word){
    var count = 0;
    
    //This checks the string for capitol B's
    for (i = 0; i < word.length; i++){
        if (word[i] === "B"){
            count = count + 1;
        }
    }
    return count;
}

console.log(countBs("British Basses back by Big Bucks"));

function countLetter(myString, myLetter){
  var letterCount = 0;
  var chosenLetter = myLetter.toString();
  
  //this checks for the chosen letter against the string.
  for(i = 0; i < myString.length; i++) {
    if (myString[i] === chosenLetter) {
      letterCount = letterCount + 1;
    }
  }
  //returns the count
  return letterCount;
}

console.log(countLetter("This is the best way I can do this.", "i"));
console.log(countLetter("Only way this will work is if I can complete this assignment", "l"));
