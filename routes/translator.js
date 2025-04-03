const express = require("express")
const router = express.Router()

const translateText=require("../controllers/translator")
router.post("/", translateText);


module.exports=router