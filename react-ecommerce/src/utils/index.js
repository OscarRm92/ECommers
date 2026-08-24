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

/**
 * Formats a date (Date instance, ISO string, or timestamp) as dd/MM/yyyy hh:mm:ss
 * @param {Date|string|number} date
 * @returns {string} Formatted date
 */
export const formatDate = (date) => {
    const d = new Date(date);
    const pad = (n) => String(n).padStart(2, '0');

    const day = pad(d.getDate());
    const month = pad(d.getMonth() + 1); // getMonth() is 0-indexed
    const year = d.getFullYear();
    const hours = pad(d.getHours());
    const minutes = pad(d.getMinutes());
    const seconds = pad(d.getSeconds());

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}