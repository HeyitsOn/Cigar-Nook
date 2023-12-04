let purchased =[]

let main = document.querySelector('main')

let items = JSON.parse(localStorage.getItem('items'))

main.innerHTML=items.map(function(item,index){
    return`
    <div>
    <h2>${item.name}</h2>
    <P>${item.description}</P>
    <P>R${item.price}</P>
    <button value='${index}' data-add>Add To Cart</button>


    </div>
    `
}).join('')
function add (index){

    purchased.push(items[index])
    localStorage.setItem('purchased',JSON.stringify
    (purchased))
}

main.addEventListener('click', function(){
    if(event.target.hasAttribute('data-add')){
//alert('button pressed')
        add(event.target.value)
    }
})