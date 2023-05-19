"use strict";
 
 for (let i = 1; i <= 100; i++){

    if( (i % 3 === 0) && (i % 5 === 0) ){
        let i = 'FizzBuzz'
        console.log(i);
        let lista = document.getElementById(`list`)
        lista.innerHTML += `<li>${i}</li>`
        }else if ( i % 3 === 0){
            let i = 'Fizz';
            console.log(i);
            let lista = document.getElementById(`list`)
            lista.innerHTML += `<li>${i}</li>`
            }else if ( i % 5 === 0 ){
                let i = 'Buzz';
                console.log(i);
                let lista = document.getElementById(`list`)
                lista.innerHTML += `<li>${i}</li>`
                }else{
                    console.log(i)
                    let lista = document.getElementById(`list`)
                    lista.innerHTML += `<li>${i}</li>`
                }
            
} 


