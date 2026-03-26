const mongoose = require("mongoose");
const {Schema} = mongoose;

main()
   .then(() => console.log("connection successful"))
   .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDem");

}

const orderSchema = new Schema({
    item: String,
    price: Number,

});

const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order"
        },
    ],
});

// customerSchema.pre("findOneAndDelete", async () => {
//     console.log("PRE MIDDLEWARE");
// });

customerSchema.post("findOneAndDelete", async (customer) => {
    if(customer.orders.length){
        let res = await Order.deleteMany({_id: { $in: customer.orders } });
        console.log(res);
    }
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

//function
const findCustomer = async () => {
    let result = await Customer.find({}).populate("orders");
    console.log(result[0]);
};

const addCustomer = async () => {
    let newCust1 = new Customer({
        name: "Rahul Kumar",
    });

    let newOrder = new Order({
        item: "Pizza",
        price: 250,
    })

    newCust1.orders.push(newOrder);

    await newOrder.save();
    await newCust1.save();

    console.log("added new customer");
};

const delCust = async () => {
    let data = await Customer.findByIdAndDelet("6520f584d5cb5e2f03c4adc6");
    console.log(data);
}
 
delCust();

findCustomer();
// const addOrders = async () => {
//     let res = await Order.insertMany( [ 
//         {item: "Somasa" , price: 12},
//         {item: "Chips", price: 10},
//         {item: "Chocolate" , price: 40}
//     ]);
//     console.log(res);
// };

addOrders();