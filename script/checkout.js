// get cart items from local storage or make an empty array
let oni = JSON.parse(localStorage.getItem('oni')) || [];

// Get reference to the HTML table and buttons
let table = document.querySelector('#checkout');
let clearCartBtn = document.getElementById('clearCart');
let buyBtn = document.getElementById('buyBtn');

// created an Function to create and return HTML rows for each item in the cart
function getRows() {
    return oni.map((item, index) => {
        // Calculate the total price for the item
        let price = item.price * item.quantity;
        //price is not defined don't know what to do 

        // Return the HTML row for the items here
        return `
<tr>
<td>${index + 1}</td>
<td>${item.name}</td>
<td>R${item.price}</td>
<td>${item.description}</td>
<td><img src='${item.url}'  width="100px" height="100px"></td>
<td>R${item.price}</td>
</tr>
        `;
    });
}

// Function to render the entire table with headers, item rows, and total amount
function rerTable() {
    // show table headings
    table.innerHTML = `
<thead>
<tr>
<th>#</th>
<th>Product</th>
<th>Price</th>
<th>Description</th>
<th>Image</th>
<th>Quantity</th>
<th>Amount</th>
</tr>
</thead>
<tbody>
${getRows().join('')}
</tbody>
    `;

    // show total amount row
    const totalAmount = oni.reduce((total, item) => total + item.price * item.quantity, 0);
    table.innerHTML += `
<tfoot>
<tr class="table-info">
<td colspan="6" class="text-end">Total Amount:</td>
<td>R${totalAmount}</td>
</tr>
</tfoot>
    `;
}

// show of the table on the screen.
rerTable();

// add an Event listener for making a purchase
buyBtn.addEventListener('click', function () {
    // add a thank you alert 
    alert('Thank you for buy!');
    // Clear the cart after the purchase
    localStorage.removeItem('oni');
    oni = [];
    // Re-add the table after clearing the cart
    rerTable();
});
