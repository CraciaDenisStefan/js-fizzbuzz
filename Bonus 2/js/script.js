"use strict";
 
 for (let i = 1; i <= 100; i++){
    let output = ``;
   
    if( (i % 3 === 0) && (i % 5 === 0) ){
        output = `FizzBuzz`
        let colonna = document.querySelector(".row");
        colonna.innerHTML += ` <div class="col-1 m-3 fizzbuzz p-3  ">${output}</div>`;
    }
    else if (i % 3 === 0){
        output = `Fizz`
        let colonna = document.querySelector(".row");
        colonna.innerHTML += ` <div class="col-1 m-3 fizz p-3 ">${output}</div>`;
    }
    else if (i % 5 === 0){
        output = `Buzz`
        let colonna = document.querySelector(".row");
        colonna.innerHTML += ` <div class="col-1 m-3 buzz p-3 ">${output}</div>`;
    }
    else if (output === ``){
        let colonna = document.querySelector(".row");
        colonna.innerHTML += ` <div class="col-1 m-3 p-3 ">${i}</div>`;
        output = i
    }
        console.log(output) 
     
       
}
