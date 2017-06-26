var data = require('../products.json')

/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */
function getItemsCount (itemData) {
  return itemData.items.length
}

/*
 * Define and use your functions here
 */

// Create a function called getItems that simply returns the items array from the google product object.
function getItem (objectData) {
  return objectData.items
}

// Create a function called getItemsByBrand that takes an item array returns a new array of all items of a specified brand.
function getItemsByBrand (items, brand) {
  var brandArr = []
  for (var i = 0; i < items.length; i++) {
    if (items[i].product.brand === brand) {
      brandArr.push(items[i])
    }
  }
  return brandArr
}

// Create a function called getItemsByAuthor that takes an item array and returns a new array of all items by a specified author.
function getItemsByAuthor (items, author) {
  var authorArr = []
  for (var i = 0; i < items.length; i++) {
    if (items[i].product.author.name.includes(author)) {
      authorArr.push(items[i])
    }
  }
  return authorArr
}

// Create function called getAvailableProducts that takes an item array and returns an array containing all of the available products (an available product is one with at least one availability of "inStock" in the inventories array)
function getAvailableProducts (items) {
  var available = []
  for (var i = 0; i < items.length; i++) {
    if (items[i].product.inventories[0].availability === 'inStock') {
      available.push(items[i])
    }
  }
  return available
}

// Use the functions you created in 1 - 5 to ouput (console.log) the following lists of items.
  // All items made by Sony.
// console.log(getItemsByBrand(getItem(data), 'Sony'))
  // All items made by Sony that are available.
// console.log(getAvailableProducts((getItemsByBrand(getItem(data), 'Sony'))))
  // All available items by the author "Adorama Camera"
// console.log(getItemsByAuthor(getItem(data), 'Adorama Camera'))
  // All items made by Nikon with the author eBay.
var nikon = getItemsByBrand(getItem(data), 'Nikon')
// console.log(nikon)
// console.log(getItemsByAuthor(nikon, 'eBay'))

// output item count using the getItemsCount function
// console.log('Item Count: ' + getItemsCount(data))
// console.log(getItem(data))
// console.log(getAvailableProducts(getItem(data)))
