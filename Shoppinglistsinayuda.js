let shoppingList = []

let firstProduct = { 
    item: "pan",
    quantity: 2,
    purchased: false
} 

shoppingList.push(firstProduct)

let secondProduct ={
    item: "leche",
    quantity: 3,
    purchased: false
} 
shoppingList.push(secondProduct)

let thirdProduct ={
    item: "arroz",
    quantity: 1,
    purchased: false
} 
shoppingList.push(thirdProduct)
let fourProduct ={
    item: "cafe",
    quantity: 4,
    purchased: false
} 
shoppingList.push(fourProduct)
function addItem(list/*shoppinglist */, item, quantity){
    let newProduct ={
        item: item, //item: "Coca cola"
        quantity: quantity,
        purchased: false
    }
list.push(newProduct)
return list
}

shoppingList = addItem(shoppingList,"sandia", 4) //shoppingList le asigna el resultado de ejecturar addItem)//
console.table(shoppingList)



