"use strict";
 
 for (let i = 1; i <= 100; i++){

    if( (i % 3 === 0) && (i % 5 === 0) ){
        let i = 'FizzBuzz'
        console.log(i);
        }else if ( i % 3 === 0){
            let i = 'Fizz';
            console.log(i);
            }else if ( i % 5 === 0 ){
                let i = 'Buzz';
                console.log(i);
                }else{
                    console.log(i)
                }
} 


