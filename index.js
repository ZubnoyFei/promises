'use strict'

console.log('Waiting for data');

const req = new Promise(function(resolve, reject){// При создании промиса функция принимает 2 аргумента: resolve and reject

    setTimeout(()=> {
        console.log('Preparing data ...');

        const product = {
            name: "TV",
            price: 2000
        };
resolve();
    }, 2000);


    setTimeout(()=> {
        product.status = 'ordered';
        console.log(product);
    }, 3000);
},3000);

});