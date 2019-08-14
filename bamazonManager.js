var sqlPass = require('./keys.js');
var mysql = require('mysql');
var inquirer = require('inquirer');

let connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: sqlPass.pass,
    database: 'bamazon'
});
function start(){
inquirer.prompt([
    {
        type: 'list',
        message: 'What do you want to do?',
        choices: ['View Products for Sale', 'View Low Inventory', 'Add to Inventory', 'Add New Product'],
        name: 'choice'
    }
]).then(function(response){
    switch(response.choice){
        case 'View Products for Sale':
            connection.query('SELECT * FROM products', 
            function(err, response){
                if(err) throw err;
                for (let i = 0; i < response.length; i++) {
                    console.log(`Item ID: ${response[i].item_id}\nProduct Name: ${response[i].product_name}\nPrice: ${response[i].price}\nStock: ${response[i].stock_quantity}\n\n`)
                }
                setTimeout(start, 2000);
            })

        break;

        case 'View Low Inventory':
            connection.query('SELECT * FROM products WHERE stock_quantity <= 30',
            function(err, response){
                if(err) throw err;
                for(let i = 0; i < response.length; i++){
                    console.log(`Item ID: ${response[i].item_id}\nProduct Name: ${response[i].product_name}\nPrice: ${response[i].price}\nStock: ${response[i].stock_quantity}\n\n`)
                }
                setTimeout(start, 2000);
            })

        break;

        case 'Add to Inventory':

        inquirer.prompt([
            {
                type: 'input',
                message: 'Which item ID would you like to add to?',
                name: 'itemID'
            },
            {
                type: 'input',
                message: 'How much would you like to add to the inventory?',
                name: 'amount'
            }
        ]).then(function(res){

            connection.query(`UPDATE products SET stock_quantity = stock_quantity + ${res.amount} WHERE item_id = ${res.itemID}`, 
            function(err){
                if(err) throw err;
                console.log(`${res.amount} stock added to inventory`);
                setTimeout(start, 2000);
            })
        })

        break;

        case 'Add New Product':
        inquirer.prompt([
            {
                type: 'input',
                message: 'Item Name?',
                name: 'name'
            },
            {
                type: 'input',
                message: 'Item Department?',
                name: 'department'
            },
            {
                type: 'input',
                message: 'Item Price?',
                name: 'price'
            },
            {
                type: 'input',
                message: 'Quantity added?',
                name: 'stock'
            }
        ]).then(function(res){
            connection.query(`INSERT INTO products SET ?`,
            {
                product_name: res.name,
                department_name: res.department,
                price: res.price,
                stock_quantity: res.stock
            }
            ,function(err){
                if(err) throw err;
                console.log('Item Added')
                setTimeout(start, 2000);
            })
        })
        break;
    }
})
};

start();
