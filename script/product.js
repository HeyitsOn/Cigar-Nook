let oni = [];
let main = document.querySelector('main');

// Check 'pro' array
let pro = JSON.parse(localStorage.getItem('admin'));
console.log('pro array:', pro);

main.innerHTML = pro.map(function (item, index) {
    console.log(item);
    console.log(index);
    return `
<article class="card">
<img src="${item.url}" width="100px" class="card-img-top-5%" alt="${item.name}">
<div class="card-body">
<h5 class="card-title">${item.name}</h5>
<p class="card-text">${item.description}</p>
<p class="card-text">Price: R${item.price}</p>
<button class="btn btn-primary change" data-add value="${index}">Add to Cart</button>
</div>
</article>`;
}).join('');

function add(index) {
    oni.push(pro[index]);
    localStorage.setItem('oni', JSON.stringify(oni));
}

main.addEventListener('click', function (event) {
    if (event.target.hasAttribute('data-add')) {
        add(event.target.value);
    }
});
