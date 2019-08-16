# bamazon
Amazon like sql database and app

contributors: John Remeto

This app will provide you with a database to keep track of products, stock, cost, and department. With easy to use options, you can quickly find a product and purchase it. For managers in the store you can also add items, view items with low stock, or update stock on existing items.

To use this app clone the repositroy to your system. You will need your own sql account and to download the packages listed in the package.json file along with mySQL database. Once this is all complete run the app in your terminal by going to the app location and typing in node app.js or node bamazonManage.js.


When you run the app you will see a list of current items in stock
![Item list](/images/Item-List.jpg)

You can then input the item ID of the item you want and how much of that item you want to buy.

![Item Bought](/images/Bought.jpg)

Stock will be auto updated.

![Item Bought](/images/Updated.jpg)

If the item is out of stock you will be notified and the order will be cancelled.

![Item out of stock](/images/No-Stock.jpg)


As a manager you have more options. 

![Item Bought](/images/Options.jpg)

Option one will allow you to see all products for sale.

![Item Bought](/images/Option-one.jpg)

Option two will show you all products with less than 30 stock.

![Item Bought](/images/Option-two.jpg)

Option three will allow you to add more stock to a certain item.

![Item Bought](/images/Option-three.jpg)

![Item Bought](/images/Option-three-updated.jpg)

Option four will allow you to add a whole new item to your store.

![Item Bought](/images/Option-four.jpg)

![Item Bought](/images/Option-four-updated.jpg)
