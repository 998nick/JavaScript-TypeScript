
const product = {name: 'Caneca', price: 24.5}
Object.defineProperty(product, 'name', {
    writable: false,
    configurable: false
})

product.name = 'Prato'
delete product.price

// Object.freeze(product)

console.log(Object.getOwnPropertyDescriptor(product, 'name'))
console.log(product)



const product2 = { 
    ...product,
    material: 'porcelana'
 };
 console.log(product2)



 const product3 = Object.assign({}, product, {material: 'vidro'})
 console.log(product3)



 const product4 = {
     name: product.name,
     price: product.price
    }

product4.name = 'Copo'
product4.price = 30
console.log(product4)

console.log(Object.entries(product4))              //chaves e valores
console.log(Object.values(product4))              //pega os valores


for(let [key, value] of Object.entries(product4)) {
   console.log(key, value)
}




