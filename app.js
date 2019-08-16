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



start();




function start(){
    connection.query('SELECT * FROM products', function(err, response){
        if(err){
            throw err;
        };
        for (let i = 0; i < response.length; i++) {
            if(response[i].stock != 0){
                console.log(`Product ID: ${response[i].item_id}\nProduct Name: ${response[i].product_name}\nPrice: $${response[i].price}\nAmount in stock: ${response[i].stock_quantity}\n\n\n`)
            }
            
        }
        sale();
    
    });
}

function sale(){
    inquirer.prompt([
        {
            type: 'input',
            message: 'Which item ID would you like to buy?',
            name: 'itemID'
        },
        {
            type: 'input',
            message: 'how many would you like to buy?',
            name: 'amount'
        }
    ]).then(function(res){
        let itemID = res.itemID;
        let amount = res.amount;
        let total;
        connection.query(`SELECT stock_quantity, price FROM products WHERE item_id = ${itemID}`,
         function(err, response){
            if(err){
                throw err;
            }
            if(response[0].stock_quantity <= 0 || amount > response[0].stock_quantity){
                console.log('Insufficient quantity! Order Cancled.')
                setTimeout(start, 5000);
            }else{
                total = amount * response[0].price;
                amount = response[0].stock_quantity - amount;
                connection.query(`UPDATE products SET stock_quantity = ${amount}  WHERE item_id = ${itemID}`,
                function(err){
                    if(err){
                        throw err;
                    }
                    console.log(`You\'re total today is: ${total}`);
                    setTimeout(start, 5000);
                })
            }
        });
    })
}