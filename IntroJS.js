console.log("Introduction to JavaScript!");

console.log("FizzBuzz question");
for (var i = 1; i <= 100; i++){
    //checks to see if the number a multiple of
    //3 and 5 and replaces the number with fizzbizz
    if(i%5 === 0 && i%3 === 0){
        console.log('fizzbuzz');
    }
    //otherwise it checks to see if its a multiple
    //of 3 and changes the number to fizz
    else if(i%3 === 0){
        console.log('fizz');
    }
    //and checks to see if its a multile of 5
    //which it will replace the number with buzz
    else if(i%5 === 0){
        console.log('buzz');
    }
    //last is just to print the number
    else{
        console.log(i);
    }

}

