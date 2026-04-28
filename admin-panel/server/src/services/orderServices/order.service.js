import { cartItemModel } from "../../models/cartItems.model.js";
import { cartModel } from "../../models/cart.model.js";
import { orderModel } from "../../models/order.model.js";
import { orderItemModel } from "../../models/orderItems.model.js";
import { productModel } from "../../models/product.model.js";
import { colorModel } from "../../models/color.model.js";

export const orderAddService = async (data, userId) => {
    try {
        // console.log("fdf");
        const {
            fullName,
            phone,
            addressLine1,
            addressLine2,
            city,
            state,
            postalCode,
            country,
            paymentMethod
        } = data;

        const cart = await cartModel.findOne({
            where: {
                userId
            }
        })
        // console.log(cart);

        if (!cart) {
            return {
                status: false,
                statusCode: 404,
                message: "Cart Not Found....!!"
            };
        }

        const cartItems = await cartItemModel.findAll({
            where: {
                cartId: cart.id
            }
        })
        // console.log(cartItems);

        if (!cartItems.length) {
            return {
                status: false,
                statusCode: 400,
                message: "Cart Is Empty....!!"
            };
        }
        const total = cartItems.reduce((acc, cuu) => acc + cuu.productPrice * cuu.quantity, 0)

        const order = await orderModel.create({
            userId,
            totalAmount: total,
            paymentMethod,
            fullName,
            phone,
            addressLine1,
            addressLine2,
            city,
            state,
            postalCode,
            country
        });
        // console.log(order);

        const orderItems = cartItems.map((value, index) => {
            return {
                orderId: order.id,
                productId: value.productId,
                colorId: value.colorId,
                quantity: value.quantity,
                priceAtPurchase: value.productPrice
            }
        })
        // console.log(orderItems);
        const addOrderItems = await orderItemModel.bulkCreate(orderItems)
        await cartItemModel.destroy({
            where: { cartId: cart.id }
        });
        return {
            status: true,
            statusCode: 201,
            message: "Order placed successfully",
            dataRes: order
        };
    } catch (error) {
        throw error
    }
}

export const orderViewService = async (userId) => {
    try {
        const data = await orderModel.findAll({
            where: {
                userId
            },
            include: [
                {
                    model: orderItemModel,
                    as: "items",
                    include: [
                        {
                            model: productModel,
                            as: "product",
                            attributes: ["id", "name", "image", "actualPrice"]
                        },
                        {
                            model: colorModel,
                            as: "color",
                            attributes: ["id", "name"]
                        }
                    ]
                }
            ],
            order: [["createdAt", "DESC"]]
        })
        return data
    } catch (error) {
        throw error
    }
}