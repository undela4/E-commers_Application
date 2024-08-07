const express=require('express');

const router=express.Router();

const {weather,gemini,image,audio}=require('../Controllers/Ai.js');
const Authenticate = require('../Controllers/Authentication.js');
const {getOTP}=require('../Controllers/getotp.js');
const {Mail}=require('../Controllers/Mail.js');
const {getproducts,get_by_category,get_by_id} = require('../Controllers/getproducts.js');
const {cartupdate,get_cart_items,ClearCart} = require('../Controllers/cartupdate.js');
const  {add_address,get_address,del_address} = require('../Controllers/Add_addresses.js');
const {upload_image} =require('../Controllers/upload_image.js')
const {add_item,del_item}=require('../Controllers/wishlist.js')
const {createOrder,getOrders,cancelOrder} = require('../Controllers/orders.js');
const {addReview,upload,getReviews} = require('../Controllers/review.js')

//http://localhost:5000/v1/products
router.get('/products',getproducts);

//http://localhost:5000/v1/products/:category
router.get('/products/:category',get_by_id);

//http://localhost:5000/v1/review/get
router.get('/review/get',getReviews);



//http://localhost:5000/v1/products/
router.post('/products/',get_by_category);

//http://localhost:5000/v1/sign_up
router.post('/sign_up',Authenticate.sign_up);

//http://localhost:5000/v1/sign_in
router.post('/sign_in',Authenticate.sign_in);

//http://localhost:5000/v1/verify
router.post('/verify',Authenticate.Auth);  

//http://localhost:5000/v1/mail
router.post('/mail',getOTP,Mail);

//http://localhost:5000/v1/get_cartList
router.post('/get_cartList',get_cart_items)


//http://localhost:5000/v1/address/add
router.post('/address/add',add_address)

//http://localhost:5000/v1/address/get
router.post('/address/get',get_address)

//http://localhost:5000/v1/address/del
router.post('/address/del',del_address)

//http://localhost:5000/v1/profile/upload_image/:id
router.post('/profile/upload_image/:id',upload_image)

//http://localhost:5000/v1/wishList/add
router.post('/wishList/add',add_item)

//http://localhost:5000/v1/wishList/del
router.post('/wishList/del',del_item)


//http://localhost:5000/v1/orders/create
router.post('/orders/create',createOrder);

//http://localhost:5000/v1/orders/get
router.post('/orders/get',getOrders);

//http://localhost:5000/v1/orders/cancel
router.post('/orders/cancel',cancelOrder);

//http://localhost:5000/v1/review/add
router.post('/review/add',addReview);

//http://localhost:5000/v1/review/upload
router.post('/review/upload',upload);








//put routes

// http://localhost:5000/v1/forget_password
router.put('/forget_password',Authenticate.Forgetpassword);

// http://localhost:5000/v1/cartupdate
router.put('/cartupdate',cartupdate)

//http://localhost:5000/v1/clear_cart
router.put('/clear_cart',ClearCart)

//http://localhost:5000/v1/editProfile
router.put('/editProfile',Authenticate.EditProfile)







router.post('/weather',weather);
router.post('/gemini',gemini);
router.post('/img',image);
router.post('/audio',audio);



module.exports=router