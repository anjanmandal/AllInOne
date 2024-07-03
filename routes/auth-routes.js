const router =require('express').Router();

const {loginPage}=require('../controllers/authController')
router.get("/login",loginPage)

module.exports=router;