/**
 * This funtion calculates the total price of the new order  
 * @param {Array} products 
 * @returns {number} Total price
 */

// export const totalPrice = (products) => {
//     let sum = 0;
//     products.forEach(product => {
//         sum += product.price;
//     });
//     return sum;
// };

export const totalPrice = (products) => {
     return products.reduce((sum, product) => sum + product.price, 0);
}