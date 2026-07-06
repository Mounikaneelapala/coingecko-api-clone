const mongoose=require("mongoose");

const MarketSchema=new mongoose.Schema({

    exchange:{
        type:String,
        required:true
    },

    coin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Coin"
    },

    pair:{
        type:String
    },

    price:{
        type:Number
    },

    volume:{
        type:Number
    }

});

module.exports=mongoose.model("Market",MarketSchema);