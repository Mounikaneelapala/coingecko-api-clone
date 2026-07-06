const Market=require("../models/Market");

exports.createMarket=async(req,res)=>{

const market=await Market.create(req.body);

res.json(market);

};

exports.getMarkets=async(req,res)=>{

const markets=await Market.find().populate("coin");

res.json(markets);

};

exports.getMarket=async(req,res)=>{

const market=await Market.findById(req.params.id).populate("coin");

res.json(market);

};

exports.updateMarket=async(req,res)=>{

const market=await Market.findByIdAndUpdate(

req.params.id,
req.body,
{new:true}

);

res.json(market);

};

exports.deleteMarket=async(req,res)=>{

await Market.findByIdAndDelete(req.params.id);

res.json({

message:"Deleted"

});

};