let purchased = JSON.parse(localStorage.getItem('purchased'))
let table = document.querySelector('main')

table.innerHTML = purchased.map((item, index)=>{
    return`
    <tr>
    <td>${index+1}</td>
    <td>${item.name}</td>
    <td>R${item.price}</td>
    <td>${item.description}</td>
    <td><img src='${item.url}'></td>
    <td><button>Clear</button></td>
    </tr>
    `
})
jon
