

function Product(name, price) {
    this.name = name
    this.price = price
}


Product.prototype.increase = function(qtd) {
    this.price += qtd
}

Product.prototype.discount = function(qtd) {
    this.price -= qtd
}

function Shirt(name, price, color) {
    Product.call(this, name, price)      //this se refere ao obj construido atraves da funcao
    this.color = color
}

Shirt.prototype = Object.create(Product.prototype)
//cria um obj vazio e seta o proto do obj vazio para o proto de produto
Shirt.prototype.constructor = Shirt
//cria o contrutor 

Shirt.prototype.increase = function(porcentage) {
    this.price = this.price + (this.price  * (porcentage / 100))
}

const shirt = new Shirt('Regata', 30, 'Preto')
shirt.increase(20)
console.log(shirt)




function Mug(name, price, material, stock) {
    Product.call(this, name, price)
    this.material = material
    
    Object.defineProperty(this, 'stock', {
        enumerable: true,
        configurable: false,

        get: function() {
            return stock
        }, 
        set: function(value)  {
            if(typeof value !== 'number') return;
            stock = value
        }
    })
}

Mug.prototype = Object.create(Product.prototype)
Mug.prototype.constructor = Mug

const mug = new Mug('Caneca', 23, 'Porcelana', 3)
mug.stock = 100
console.log(mug.stock)
console.log(mug)




