(function () {


const mockDatabase= [
    {
        price: 59.00,
        product: "Fruit",
        name: "Apple",
        image: "img/apple.jpg"
    },
    {
        price: 380.00,
        product: "Technology",
        name: "Iphone",
        image: "img/iphone.jpg"
    },
    {
        price: 7.00,
        product: "Fruit",
        name: "Orange",
        image: "img/orange.jpg"
    },
    {
        price: 4.00,
        product: "Medicine",
        name: "Advil",
        image: "img/advil.jpg"
    },
    {
        price: 298.00,
        product: "Technology",
        name: "Samsung",
        image: "img/samsung.jpg"
    },
    {
        price: 6.00,
        product: "Medicine",
        name: "Tylenol",
        image: "img/tylenol.jpg"
    },
    {
        price: 3.00,
        product: "Fruit",
        name: "Banana",
        image: "img/banana.jpg"
    },
];




    function renderList (mockDatabase) {
        var productList = document.querySelector('#products');
        productList.innerHTML = '';
        var productMap = mockDatabase.map(function (mockDatabase) {
            return '<div></div>' + mockDatabase.name + '<img style="width: 20%;" src="' + mockDatabase.image +'" >' +  '<div></div>'
            + mockDatabase.product + '<div></div> $' + mockDatabase.price;
        });
        productMap.forEach(function (card) {
            productList.innerHTML += card;
        });
        var foo = 'renderList';
        console.log(foo);
    }
    renderList(mockDatabase);










function orderBy(sortValue) {

        var sortedResults = (sortValue === 'name') ?
            mockDatabase.sort(function (a, b) {
                var nameA = a.name.toUpperCase();
                var nameB = b.name.toUpperCase();

                if (nameA < nameB) {
                    return -1;
                }
                else if (nameA > nameB) {
                    return 1;
                } else {
                    return 0;
                }
            }) :
            mockDatabase.sort(function (a, b) {
                return a[sortValue] - b[sortValue];
            });
        renderList(sortedResults);
    }

    document.querySelector('#orderBy').addEventListener('change', function(name){

        orderBy(name.target.value);


});











function priceRange (priceDescrip) {
    var priceRanges = {cheap: [0, 10], medium :[10, 70], expensive:[70, 420]};
    var range = priceRanges[priceDescrip];

    if (!range) return renderList(mockDatabase);

    var filteredResults = mockDatabase.filter(function (row) {
        return row.price > range[0] && row.price < range[1];
    });
    renderList(filteredResults);
}

document.querySelector('#priceRange').addEventListener('change', function (event) {
    priceRange(event.target.value);


});



function filterCategory (product) {

    if (!product) return renderList(mockDatabase);

    var filteredResults = mockDatabase.filter(function (row) {
        return row.product === product;
    });
    renderList(filteredResults);
}

document.querySelector('#product').addEventListener('change', function (event) {
    filterCategory(event.target.value);
});







})();








