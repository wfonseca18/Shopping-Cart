
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

for (let i = 0; i < productList.length; i++) {
    $('.item-list').append(`<button class="m-2 btn-${i}">${productList[i].name}</button>`);
    $(`.btn-${i}`).on('click', function () {
        $('.cart-list').append(`<button id="btn-${i}" class="m-2 btn-${i}">${productList[i].name}</button>`);
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
            console.log(item.category);
            let products = $('.item-list');
            products.forEach(product => {
                // 
            });

        });
        exists = false;
    }
});


