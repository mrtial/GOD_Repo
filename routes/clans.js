const express = require("express");
const router = express.Router();
const knex = require("../db/knex")



router.get('/',function(req,res){
  res.render("clans")
})

router.get('/',function(req,res){
  res.render("clans")
})




module.exports = router;