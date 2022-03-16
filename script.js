const wasCar = document.getElementById('was-car')
const mowLawn = document.getElementById('mow-lawn')
const pullWeed = document.getElementById('pull-weeds')
let listTaks = document.getElementById('listTaks')
let cost = document.getElementById('cost')
let price = 0;
wasCar.addEventListener('click', function(){
    price = 10;
    listTaks.innerHTML += `<li>Was Car</li>`;
    cost.innerHTML += `<li class='price'>${price}</li>`
    total()
})


mowLawn.addEventListener('click', function(){
    price = 20;
    listTaks.innerHTML += `<li>Mow Lawn</li>`;
    cost.innerHTML += `<li class='price'>${price}</li>`
    total()
})

pullWeed.addEventListener('click', function(){
    price = 30;
    listTaks.innerHTML += `<li>Pull Weed</li>`;
    cost.innerHTML += `<li class='price'>${price}</li>`
    total()
})

// let total = document.getElementById('total')

function total(){
    var matches = document.querySelectorAll(".price");
    var totalprice = 0;

    for (var i = 0; i < matches.length; i++) {
         totalprice += (matches[i].innerHTML * 1);
    }
    document.getElementById('full-price').innerHTML = totalprice;
}
