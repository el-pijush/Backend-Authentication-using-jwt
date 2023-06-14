const {Router}=require('express')
const router=Router()
const authController=require("../controllers/authControllers")
//sign up
router.get('/signup',authController.signup_get)
router.post('/signup',authController.signup_post)
//log in
router.get('/login',authController.login_get)
router.post('/login',authController.login_post)
//logout
router.get('/logout',authController.logout_get)
//export
module.exports=router