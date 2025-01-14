let orders = ["cake", "pizza", "chocolate", "coke"]
let completeorders = []
let action = "filter"
let newOrder = "Ice cream"
let Filtering="o"

switch (action) {
    case "add":
        orders.push(newOrder.trim());
        console.log(orders.includes("pizza"));
        console.log(`Neworder placed:${newOrder.trim()}`);
        console.log("Complete ordered items", orders);
        break;
    case "cancelling":
        orders.pop();
        console.log("confirm my order", orders);
    case "complete order":
        if (orders.length > 0) {
            let completeorder= orders.shift(); // Remove the first order
            completeorders.push(completeorder);
            console.log(`Order completed: ${completeorders}`);
        } else {
            console.log("No orders to complete!");
        }
        console.log("Remaining Orders:", orders);
        console.log("Completed Orders:", completeorders);
        break;

    case "filter":
        let filteredOrders = orders.filter(order => order.toLowerCase().includes(Filtering.toLowerCase()));
        console.log(`Orders containing '${Filtering}':`, filteredOrders);
        break;
    default:
        console.log("orders not placed");
}
