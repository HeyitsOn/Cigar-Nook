// make an empty array called 'admin' to store product information.
let admin = [];

// a function constructor for creating product objects with specified properties.
function Constructor(name, description, price, url) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.url = url;
}

// have  five product objects using the Constructor and add them to the 'admin' array.
let item1 = new Constructor('DavidOff', 'A box of Special', 592.00, "https://i.postimg.cc/wBhsgtrh/davidoff.jpg")
let item2= new Constructor ('Corona ', ' A box of Romeo y Julieta' ,"189.95", "https://i.postimg.cc/sxth3p34/corona.jpg")
let item3= new Constructor('Cohiba' , ' A box of Siglo I', 560.00, "https://i.postimg.cc/fLP3vxSQ/ciger-c-jpg2.jpg") 
let item4= new Constructor ('Maduro', 'A Box of INCH No.64', 523.00, "https://i.postimg.cc/857dDkhD/maduro.jpg")
let item5= new Constructor(' Fuente', 'A box of Chateau', 142,  "https://i.postimg.cc/3JXX3cDy/arturo1.png" )
// ... ( for item2, item3, item4, and item5)

// Push the created items into the 'admin' array.
admin.push(item1, item2, item3, item4, item5);

// Stored the 'admin' array in the browser's localStorag uile after converting it to a JSON string.
localStorage.setItem('admin', JSON.stringify(admin));
// get the 'admin' array from localStorage and parse it back into a JavaScript object.
admin = JSON.parse(localStorage.getItem('admin'));

// Select the table element from the HTML document.
let table = document.querySelector('table');

// a function 'o' to  the product the HTML table.
function o() {
    // Used the 'map' function to create an HTML string for each product item.
    let p = admin.map(function (item, index) {
        console.log(item);
        console.log(index);
return `
<article>
<tr>
<td>${item.name}</td>
<td>${item.description}</td>
<td>R ${item.price}</td>
<td><img src="${item.url}" height="100px" width="100px"></td>
<td><button class='change' data-index="${index}">Edit</button></td>
<td><button class='delete' value=${index}>Delete</button></td>  
 </tr>
</article>
        `;
    });
    // Set the innerHTML of the table to the  HTML string.
    table.innerHTML = p.join('');
}

// Call the 'o' function to the product items.
o();

//function 'Ape' to update the localStorage whenever the 'admin' array changes.
function Ape() {
    localStorage.setItem('admin', JSON.stringify(admin));
    admin = JSON.parse(localStorage.getItem('admin'));
}

// a function 'remove' to delete a products
function remove(position) {
    admin.splice(position, 1);
    Ape();
    o();
}

// Add an event listener to the table for handling button clicks (delete and edit)
table.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete')) {
        // If the clicked button has the 'delete' class, call the 'remove' function with the button's value
        remove(event.target.value);
    } else if (event.target.classList.contains('change')) {
        // If the clicked button has the 'change' class it must open a modal for editing the selected item
        herModal(admin[event.target.dataset.index]);
    }
});

//  a function 'herModal' to show a modal with  something
function herModal(item) {
    let Modals = new Yoni.Modal(document.getElementById('ExModal'));
    document.querySelector('.title').innerText = item.name;
    document.querySelector('.-body p').innerText = `Description: ${item.description}\nPrice: R ${item.price}`;
    Modals.show();
}

//  a function 'addProduct' to add a new product 
function addProduct() {
    // get user input  
    let pName = document.getElementById('pName').value;
    let Description = document.getElementById('Description').value;
    let ProductImageUrl = document.getElementById('ProductImageUrl').value;
    let ProductPrice = parseFloat(document.getElementById('ProductPrice').value);

    // Create a new product object using the Constructor 
    let newItem = new Constructor(pName, Description, ProductPrice, ProductImageUrl);

    // Push the new product into the 'admin' array.
    admin.push(newItem);

    // Update localStorage
    Ape();
    o();

    let OurModal = new Yoni.Modal(document.getElementById('ExModal'));
    OurModal.hide();
}
