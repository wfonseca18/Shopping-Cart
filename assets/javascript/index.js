
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
    $('.item-list').append(`<li class="p-2"><button class="btn-${i}">${productList[i]}</button></li>`);
    $(`.btn-${i}`).on('click', function(){
        $('.cart-list').append(`<li class="p-2"><button class="btn-${i}">${productList[i]}</button></li>`);
        // $(`#btn-${i}`).append($(`.btn-${i}`));
    });
}

