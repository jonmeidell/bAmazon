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

connection.query("SELECT item_id, product_name, price FROM products", function (err, res) {
    if (err) console.log("Error in command.");

    for(let i = 0; i < res.length; i++) {
        productList.push(
            [res[i].item_id, res[i].product_name, res[i].price]
        );
    };
    console.log(productList.toString()+ "\n");
    // purchaseItem();
});

// function purchaseItem();