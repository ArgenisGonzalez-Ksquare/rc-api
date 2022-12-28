//Import the models
/*
import { User } from "./User.model"
import { Customer } from "./Customer.model"
*/
import { Role } from "../Role.model"
/*
import { Owner } from "./Owner.model"
import { Client_Address } from "./Client_Address.model"
import { Billing_Details } from "./Billing_Details.model"
*/
import { Restaurant } from "../Restaurant.model"
/*
import { OpeningDays } from "./OpeningDays.model"
import { Opening_times } from "./Opening_times.model"
import { Order } from "./Order.model"
import { Order_items } from "./Order_items.model"
import { Item } from "./Item.model"
import { Order_Status } from "./Order_Status.model"
import { City } from "./City.model"
import { Payment_Methot } from "./Payment_Methot.model"
import { Courier } from "./C Courier.model
*/
export const setupAssocations = () => {
    //------------------- U S E R -------------------
    // USER - ROLE
    //Role.hasOne(User, {foreignKey: 'role_id'});

    // USER - CUSTOMER
    // USER - COURIER
    // USER - OWNER

    //------------------- CUSTOMER -------------------

    // C - OWNER
    // C - CLIENTE_ADDRESS
    // C - ORDER

    //------------------- RESTAURANT -------------------

    // Restaurant - City
    // City.hasOne(Restaurant, {foreignKey: 'city_id'});
    // Restaurant.belongsTo(City);

    // R - ORDER
    // R - OPENING DAYS

    //------------------- OPENING DAYS -------------------

    // OpDays - OPENING TIMES

    //------------------- ORDER -------------------
    
    // O - ORDER ITEMS
    // O - SALE
    // O - ORDER STATUS
    // O - COURIER

    //------------------- ORDER ITEMS -------------------

    // OI - ITEM

    //------------------- SALE -------------------

    // S - PAYMENT METHOD
    // S - CITY

    
}
