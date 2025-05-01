function generateNumber() {

    /* console.log('Me chamou?') */
 
     const min = Math.ceil(document.querySelector('.input-min').value) /* .value - Valor dentro do input*/
     const max = Math.floor(document.querySelector('.input-max').value) /* .value - Valor dentro do input*/
 
     /*  console.log(min,max) */
 
     const result = Math.floor(Math.random() * (max - min + 1)) + min;
 
     alert (result)
 }
 
 