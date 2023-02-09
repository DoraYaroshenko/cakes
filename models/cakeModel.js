const mongoose = require("mongoose");
const joi = require("joi");

const cakeSchema = new mongoose.Schema({
    name:String,
    cals:Number,
    price:Number,
    category_id:String,
    date_created:{
        type:Date, default:Date.now
    }
})

exports.CakeModel = mongoose.model("cakes", cakeSchema);

exports.validateCake = (_reqBody) => {
    let joiSchema = joi.object({
        name:joi.string().min(2).max(100).required(),
        cals:joi.number().min(1).max(9999).allow(null,""),
        price:joi.number().min(1).max(999).required(),
        category_id:joi.string().min(1).max(100).required()
    })
    return joiSchema.validate(_reqBody);
}