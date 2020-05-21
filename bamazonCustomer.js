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
            console.log("ID: " + res[i].item_id + ", price: $" + res[i].price.toFixed(2) + ", quantity left: " + res[i].stock_quantity + ", product name: " + res[i].product_name);
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
    ]).then(function (orderCheck) {
        console.log("Your order: " + productList[orderCheck.itemIDproduct_name - 1] + ", quantity: " + orderCheck.quantity);
        console.log("Your order total is: $" + (orderCheck.quantity * (productList[orderCheck.itemID - 1].price)).toFixed(2));
        // still not showing cents in price
        inquirer.prompt([
            {
                type: "expand",
                message: "Is this order correct? (Y/N)",
                name: "confirm",
                choices: [
                    {
                        key: "y",
                        value: "yes",
                    },
                    {
                        key: "n",
                        value: "no",
                    },
                ],
            },

        ]).then(function (choicesConfirm) {
            if (choicesConfirm.confirm === "yes") {
                processOrder();
            } else {
                purchaseItem();
            };
        }
        );
    });
};

function processOrder() {
    res[i].stock_quantity - orderCheck.quantity;
    inquirer.prompt([
        {
            type: "expand",
            message: "Would you like to place another order? (Y/N)",
            name: "anotherOrder",
            choices: [
                {
                    key: "y",
                    value: "yes",
                },
                {
                    key: "n",
                    value: "no",
                },
            ],
        },
    ]).then(function (choicesAnotherOrder) {
        if (choicesAnotherOrder.anotherOrder === "yes");
        purchaseItem();
    },
        console.log("Thank you for shopping with us!")
    );
};