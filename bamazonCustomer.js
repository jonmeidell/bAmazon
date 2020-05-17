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
    connection.query("SELECT item_id, product_name, price FROM products", function (err, res) {
        if (err) console.log("Error in command.");

        for (let i = 0; i < res.length; i++) {
            productList.push(
                [res[i].item_id, res[i].product_name, res[i].price]
            );
        };
        console.log(productList.toString() + "\n");
        purchaseItem()
    });
    connection.end();
};

function purchaseItem(); {
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
        {
            type: "confirm",
            message: "Is this order correct?" + itemID.name + "Quantity of " + itemID.quantity,
            name: "order",
            default: false
        }
    ])
        .then(function (orderCheck) {
            if (orderCheck.order) {

            }
        })
};