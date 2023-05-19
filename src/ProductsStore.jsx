const ProductsArray = [
    {
        id: "1",
        title: 'product-1',
        image: "./images/1.jpg",
        price: 4.99
    },
    {
        id: "2",
        title: 'product-2',
        image: "./images/7.jpg",
        price: 4.99
    },
    {
        id: "3",
        title: 'product-3',
        image: "./images/2.jpg",
        price: 4.99
    },
    {
        id: "4",
        title: 'product-4',
        image: "./images/3.jpg",
        price: 4.99
    },
    {
        id: "5",
        title: 'product-5',
        image: "./images/4.jpg",
        price: 4.99
    },
    {
        id: "6",
        title: 'product-6',
        image: "./images/5.jpg",
        price: 4.99
    },
    {
        id: "7",
        title: 'product-7',
        image: "./images/6.jpg",
        price: 4.99
    },
    {
        id: "8",
        title: 'product-8',
        image: "./images/8.jpg",
        price: 4.99
    },
    {
        id: "9",
        title: 'product-9',
        image: "./images/9.jpg",
        price: 4.99
    },
    {
        id: "10",
        title: 'product10',
        image: "./images/9.jpg",
        price: 4.99
    },
    {
        id: "11",
        title: 'product-11',
        image: "./images/1.jpg",
        price: 4.99
    },
    {
        id: "11",
        title: 'product-12',
        image: "./images/1.jpg",
        price: 4.99
    }
]


function getProductData(id) {
    let productData = ProductsArray.find(product => product.id === id)

    if (productData == undefined ) {
        console.log('product data does not exist for ID: ' + id)
    }
    return productData;
}

export  { ProductsArray, getProductData } ;