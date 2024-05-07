const Order = require('../models/Order');
const Flower = require('../models/Flower')
const {StatusCodes} = require('http-status-codes');
const CustomError = require('../errors');
const {checkPermissions} = require('../utils');

const fakeStripeAPI = async ({amount, currency}) => {
    const client_secret = 'someRandomValue';
    return {client_secret, amount};
};

const createOrder = async (req, res) => {
    const {items: cartItems} = req.body;

    if(!cartItems || cartItems.length < 1){
        throw new CustomError.BadRequestError('No cart items provided')
    };

    let orderItems = [];
    let subtotal = 0;

    for(const item of cartItems){
        const dbFlower = await Flower.findOne({_id:item.flower});
        if(!dbFlower){
            throw new CustomError.NotFoundError(`No flower with id: ${item.flower}`)
        }

        const {name, price, _id} = dbFlower;
        const singleOrderItem = {
            amount: item.amount,
            name, price, flower:_id
        };
        //add item to order
        orderItems = [...orderItems, singleOrderItem]

        //calculate subtotal
        subtotal += item.amount * price;
    }
    //tax
    const tax = 0.07 * subtotal;

    let shippingFee = 0;
    if (subtotal < 10000){
        shippingFee = 1000;
    }

    //calculate total
    const total = tax + shippingFee + subtotal;

    //get client secret
    const paymentIntent = await fakeStripeAPI({
        amount:total, currency:'usd'
    });
    const order = await Order.create({
        orderItems,
        total,
        subtotal,
        tax,
        shippingFee,
        clientSecret:paymentIntent.client_secret,
        user:req.user.userId
    })

    res.status(StatusCodes.CREATED).json({order, clientSecret:order.clientSecret});
};

const getAllOrders = async (req, res) => {
    const orders = await Order.find({});
    res.status(StatusCodes.OK).json({orders, count: orders.length});
};

const getSingleOrder = async (req, res) => {
    const {id:orderId} = req.params;
    const order = await Order.findOne({_id:orderId});
    if(!order){
        throw new CustomError.NotFoundError(`No order with id: ${orderId}`)
    }
    checkPermissions(req.user, order.user);
    res.status(StatusCodes.OK).json({order});
};

const getCurrentUserOrders = async (req, res) => {
    const orders = await Order.find({user:req.user.userId});
    res.status(StatusCodes.OK).json({orders, count: orders.length});
};

const updateOrder = async (req, res) => {
    const {id:orderId} = req.params;
    const {paymentIntentId} = req.body;

    const order = await Order.findOne({_id:orderId});
    if(!order){
        throw new CustomError.NotFoundError(`No order with id: ${orderId}`)
    }
    checkPermissions(req.user, order.user);

    order.paymentIntentId = paymentIntentId;
    order.status = 'paid';
    await order.save();

    res.status(StatusCodes.OK).json({order});
};

module.exports = {
    getAllOrders,
    getSingleOrder,
    getCurrentUserOrders,
    createOrder,
    updateOrder
}