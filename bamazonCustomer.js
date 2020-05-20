const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3307,
    user: "root",
    password: "root",
    database: "bamazon"
});

let productList = [];

connection.connect();
listItems();

function listItems() {
    connection.query("SELECT item_id, product_name, stock_quantity, price FROM products", function (err, res) {
        if (err) console.log("Error in command.");

        for (let i = 0; i < res.length; i++) {
            productList.push(
                res[i]
            );
            console.log("ID: " + res[i].item_id + ", qty: " + res[i].stock_quantity + ", name: " + res[i].product_name + ", price: $" + res[i].price);
        };
        // console.log(productList.toString() + "\n");
        purchaseItem()
    });
    connection.end();
};

function purchaseItem() {
    inquirer.prompt([
        {
            type: "input",
            message: "What would you like to purchase? (Select product ID)",
            name: "itemID",
            filter: Number
        },
        {
            type: "input",
            message: "How many would you like to purchase today?",
            name: "quantity",
            filter: Number
        },
        // {
        //     type: "confirm",
        //     message: "Is this order correct? " + productList[itemID].product_name + " quantity of " + productList[itemID].stock_quantity,
        //     name: "order",
        //     default: false
        // }
    ])
        .then(function (orderCheck) {
            // if (orderCheck.order) {
            console.log(orderCheck);
            console.log("Your order total is: $" + (orderCheck.quantity * parseInt(productList[orderCheck.itemID-1].price)));
        })
};