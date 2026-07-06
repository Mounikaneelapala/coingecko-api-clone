const mongoose=require("mongoose");

const CoinSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    symbol:{
        type:String,
        required:true,
        unique:true
    },

    price:{
        type:Number,
        required:true
    },

    marketCap:{
        type:Number,
        required:true
    },

    volume:{
        type:Number,
        required:true
    },

    category:{
        type:String
    }

},{timestamps:true});

module.exports=mongoose.model("Coin",CoinSchema);