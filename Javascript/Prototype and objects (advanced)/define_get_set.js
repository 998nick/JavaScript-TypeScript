


function Product(name, price, stock) {
    this.name = name
    this.price = price
    

    Object.defineProperty(this, 'stock', {
         enumerable: true,                  //mostra a chave
         configurable: true,                //apagar/reconfigurar a chave
         get: () =>  stock,
         set: function(value) {
             if(typeof value !== 'number') {
                throw new TypeError('Precisa ser um numero')
             }
             stock
         },
    });

}


function createProduct(name) {
    return {
        get name() {
            return name
        },
        set name(value) {
            value = value.replace(value, 'Outro nome')
            name = value
        }
    }
}


const p2 = createProduct('Camiseta')
//p2.name = 'bla'
console.log(p2.name)


// const product = new Product('Camiseta', 30, 3);
// product.stock = 50
// console.log(product.name, product.price, product.stock)



