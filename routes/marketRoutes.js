const express=require("express");

const router=express.Router();

const {

createMarket,
getMarkets,
getMarket,
updateMarket,
deleteMarket

}=require("../controllers/marketController");

router.post("/",createMarket);

router.get("/",getMarkets);

router.get("/:id",getMarket);

router.put("/:id",updateMarket);

router.delete("/:id",deleteMarket);

module.exports=router;