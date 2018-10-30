
// Declaring array
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

// Declaring the categories array.
var categories = [];

// Recieve the name and index as parameters.
function duplicateCheck(name, index){
    // Get all items that are currently in the cart.
    var cartList = $('.cart-list'), item = $(`#btn-${index}`);
    // For each item in the cart list, check to see if the given name matches.
    for(let i = 0; i < cartList.length; i++){
        if(item.text() === name){
            // Alert the user if it already exists.
            alert(name + ' already exists in cart!');
        }else{
            // Create the button and event listener for the button that's in the shopping cart.
            cartList.append(`<button id="btn-${index}" class="cart m-2 btn-${index} btn-outline-danger">${name}</button>`);
            $(`#btn-${index}`).on('click', function(){
                // Removes the button from the shopping cart.
                $(`#btn-${index}`).remove();
            });
        }
    }
}

// For each item in productList, create the button for it.
for (let i = 0; i < productList.length; i++) {
    $('.item-list').append(`<button class="product m-2 btn-${i} ${productList[i].category}">${productList[i].name}</button>`);
    // Create the event listener that checks the shopping cart for duplicates.
    $(`.btn-${i}`).on('click', function () {
        duplicateCheck(productList[i].name, i);
    });
}
//
// For each item in productList, dynamically populate categories array.
productList.forEach(item => {
    let exists = false;

    // For each category that is in the array, check to see if the item's
    // category already exists in the categories array.
    categories.forEach(category => {
        if(item.category === category){exists = true;}
    });
    // If it doesn't exist, push the new category to the categories array.
    if(!exists){
        categories.push(item.category);
        // Create the button for the new category.
        $('.categories').append(`<button class="m-2" id="${item.category}">${item.category}</button>`);

        // Create the event listener for the category button.
        $(`#${item.category}`).on('click', function(){
            // Hide all products.
            $('.product').hide();
            // Only show the products that have the class that matches the category button.
            $(`.${item.category}`).show();
        });
        exists = false;
    }
});

// When all gets clicked, show all products button
$('#all').on('click', function(){
    $('.product').show();
});

