
var productList = [
    'laptop',
    'mouse',
    'monitor',
    'keyboard',
    'dock',
    'headphones',
    'power supply',
    'batteries'
];

for(let i = 0; i < productList.length; i++){
    $('.item-list').append(`<li class="p-2">${productList[i]}</li>`)
}


