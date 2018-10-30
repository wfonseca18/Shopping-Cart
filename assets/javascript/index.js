
var productList = [
    {
        'category': 'Technology',
        'name': 'Laptop'
    },
    {
        'category': 'Technology',
        'name': 'Mouse'
    },
    {
        'category': 'Technology',
        'name': 'Monitor'
    },
    {
        'category': 'Technology',
        'name': 'Keyboard'
    },
    {
        'category': 'Technology',
        'name': 'Dock'
    },
    {
        'category': 'Supplies',
        'name': 'Pencil'
    },
    {
        'category': 'Supplies',
        'name': 'Pen'
    },
    {
        'category': 'Supplies',
        'name': 'Tape'
    },
    {
        'category': 'Supplies',
        'name': 'Staples'
    },
    {
        'category': 'Refreshments',
        'name': 'Chips'
    },
    {
        'category': 'Refreshments',
        'name': 'Candy Bars'
    },
    {
        'category': 'Refreshments',
        'name': 'Coke'
    },
    {
        'category': 'Refreshments',
        'name': 'Sprite'
    }
];

var categories = [];

function duplicateCheck(name, index){
    var cartList = $('.cart-list'), item = $(`#btn-${index}`);
    console.log(cart.length);
    for(let i = 0; i < cartList.length; i++){
        if(cart.text() === name){
            alert(name + ' already exists in cart!');
        }else{
            cartList.append(`<button id="btn-${index}" class="cart m-2 btn-${index}">${name}</button>`);
        }
    }
}

for (let i = 0; i < productList.length; i++) {
    $('.item-list').append(`<button class="product m-2 btn-${i} ${productList[i].category}">${productList[i].name}</button>`);
    $(`.btn-${i}`).on('click', function () {
        duplicateCheck(productList[i].name, i);
    });
}

productList.forEach(item => {
    let exists = false;
    categories.forEach(category => {
        if(item.category === category){exists = true;}
    });
    if(!exists){
        categories.push(item.category);
        $('.categories').append(`<button class="m-2" id="${item.category}">${item.category}</button>`);
        $(`#${item.category}`).on('click', function(){
            $('.product').hide();
            $(`.${item.category}`).show();
        });
        exists = false;
    }
});

$('#all').on('click', function(){
    $('.product').show();
});

