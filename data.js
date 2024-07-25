const bcrypt = require('bcryptjs');

const data = {
    users: [
        {
            name: "Kassie",
            email: "adminTest@gmail.com",
            displayName:"Kassie",
            displayRoleType: "Admin",
            displayImage: "",
            greeting: "Welcome I am Kassie Your Admin!",
            password: bcrypt.hashSync('', 10),
            isAdmin: true,
        },
        {
            name: "Karla",
            email: "adminTest2@gmail.com",
            displayName:"Karla",
            displayRoleType: "Admin",
            displayImage: "",
            greeting: "Welcome I am Karla Your Admin!",
            password: bcrypt.hashSync('', 10),
            isAdmin: true
        },
        {
            name: "Tommy",
            email: "tommyTest@gmail.com",
            displayName:"Tommy",
            displayRoleType: "User",
            displayImage: "",
            greeting: "Welcome I am Tommy!",
            password: bcrypt.hashSync('testing123', 10),
            isAdmin: false
        },
        {
            name: "Sally",
            email: "sallyTest@gmail.com",
            displayName:"Sally",
            displayRoleType: "User",
            displayImage: "",
            greeting: "Welcome I am Sally!",
            password: bcrypt.hashSync('testing1234', 10),
            isAdmin: false
        },
        {
            name: "Billy",
            email: "billy@gmail.com",
            displayName:"Billy",
            displayRoleType: "User",
            displayImage: "",
            greeting: "Welcome I am Billy!",
            password: bcrypt.hashSync('testing12345', 10),
            isAdmin: false
        }
    ],

    products: [
        {
            name: 'Nike Slim Shirt',
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            name: 'Adidas Fit Shirt',
            category: 'Shirts',
            image: '/images/p2.jpg',
            price: 100,
            countInStock: 20,
            brand: 'Adidas',
            rating: 4.0,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            name: 'Lacoste Free Shirt',
            category: 'Shirts',
            image: '/images/p3.jpg',
            price: 220,
            countInStock: 0,
            brand: 'Lacoste',
            rating: 4.8,
            numReviews: 17,
            description: 'high quality product'
        },
        {
            name: 'Nike Slim Pants',
            category: 'Pants',
            image: '/images/p4.jpg',
            price: 78,
            countInStock: 15,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 14,
            description: 'high quality product'
        },
        {
            name: 'Puma Slim Pants',
            category: 'Pants',
            image: '/images/p5.jpg',
            price: 65,
            countInStock: 5,
            brand: 'Puma',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            name: 'Adidas Fit Pants',
            category: 'Pants',
            image: '/images/p6.jpg',
            price: 139,
            countInStock: 12,
            brand: 'Adidas',
            rating: 4.5,
            numReviews: 15,
            description: 'high quality product'
        }
    ]
};

module.exports = data;