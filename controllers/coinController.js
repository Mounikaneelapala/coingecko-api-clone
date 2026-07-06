const Coin=require("../models/Coin");

exports.createCoin = async (req, res) => {
    try {
        let coins;

        if (Array.isArray(req.body)) {
            coins = await Coin.insertMany(req.body);
        } else {
            coins = await Coin.create(req.body);
        }

        res.status(201).json(coins);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getCoins=async(req,res)=>{

try{

const {

search,
category,
sortBy,
order,
page=1,
limit=5

}=req.query;

let query={};

if(search){

query.$or=[
{name:new RegExp(search,"i")},
{symbol:new RegExp(search,"i")}
];

}

if(category){

query.category=category;

}

let sort={};

if(sortBy){

sort[sortBy]=order==="desc"?-1:1;

}

const coins=await Coin.find(query)
.sort(sort)
.skip((page-1)*limit)
.limit(Number(limit));

const total=await Coin.countDocuments(query);

res.json({

total,
page:Number(page),
coins

});

}
catch(err){

res.status(500).json({message:err.message});

}

};

exports.getCoin=async(req,res)=>{

try{

const coin=await Coin.findById(req.params.id);

res.json(coin);

}
catch(err){

res.status(500).json({message:err.message});

}

};

exports.updateCoin=async(req,res)=>{

try{

const coin=await Coin.findByIdAndUpdate(

req.params.id,
req.body,
{new:true}

);

res.json(coin);

}
catch(err){

res.status(500).json({message:err.message});

}

};

exports.deleteCoin=async(req,res)=>{

try{

await Coin.findByIdAndDelete(req.params.id);

res.json({

message:"Deleted Successfully"

});

}
catch(err){

res.status(500).json({message:err.message});

}

};