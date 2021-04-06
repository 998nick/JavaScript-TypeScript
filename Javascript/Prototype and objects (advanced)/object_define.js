

function Product(name, price, stock) {

     Object.defineProperty(this, 'stock', {
          enumerable: true,                  //mostra a chave
          value: stock,
          writable: false,                  //alterar valor variavel
          configurable: false              //apagar/reconfigurar a chave
     });

     Object.defineProperties(this, {
         name: {
            enumerable: true,                 
            value: name,
            writable: true,                  
            configurable: false   
         },
         price: {
            enumerable: true,   
            value: price,               
            writable: true,                  
            configurable: false   
         }
     })

}


const product = new Product('Camiseta', 30, 3);
// delete product.stock
console.log(product)


console.log(Object.keys(product))

for( key in product) {
console.log(key)
} 