const nodemailer=require('nodemailer');

const nodeConfig={
        service:"gmail",
        secure:false,
        auth:{
            user:'muraliundela29@gmail.com',
            pass:'mlgp kyvr sgqt xafv'
        }
}

const transpoter=nodemailer.createTransport(nodeConfig);

exports.Mail=async(req,res)=>{


    const {email,name}=req.body;
    console.log(req.body);

    const info=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Undela's Point!</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            background-color: #f0f0f0;
            padding: 20px;
            margin: 0;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 5px;
            font-family: 'Times New Roman', Times, serif;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            background-color: #2C5F2D;
            color: white;
            padding: 20px;
            border-radius: 5px 5px 0 0;
            text-align: center;
        }
        .header img {
            max-width:200px;
            height:32px;
        }
        .content {
            padding: 20px;
            text-align: center;
        }
        .otp-container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 10px;
        }
        .otp {
            height: 40px;
            width: 300px;
            background-color: #2C5F2D;
            color: white;
            text-align: center;
            font-size: 22px;
            padding: 10px;
            letter-spacing: 5px;
            border-radius: 5px;
        }
        .note {
            margin-top: 10px;
        }
        .footer {
            background-color: #2C5F2D;
            color: white;
            padding: 10px;
            text-align: center;
            border-radius: 0 0 5px 5px;
        }
        .footer p {
            margin: 0;
        }
        .footer img {
            width: 100px;
            height: auto;
            margin-bottom: 10px;
        }
      .body-img{
        display:flex;
        justify-content: center;
      }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="https://firebasestorage.googleapis.com/v0/b/react-647c1.appspot.com/o/E-mail%20pics%2FEmart_Logo.svg.png?alt=media&token=015b991b-a7b9-4ea5-8930-716b6896cafb" alt="Header Image">
        </div>
      <div class="body-img">
        <img src="https://firebasestorage.googleapis.com/v0/b/react-647c1.appspot.com/o/E-mail%20pics%2Felectronics-mart-india-ipo.webp?alt=media&token=895856f2-22a7-4522-b73d-e70db068f115" style="max-width: 100%; height: auto; object-fit: contain;" alt="Main Image">
      </div>
        <div class="content">
            <p>Hi <b>${name ? name:"Customer" }</b>,</p>
            <p>Welcome to Undela's Point!</p>
            <p>Your one-stop shop for the latest mobiles, laptops, TVs, and other electronics accessories.</p>
            <p>You can complete your registration by entering the following OTP:</p>
            <div class="otp-container">
                <div class="otp">${req.app.locals.OTP}</div>
            </div>
            <p class="note"><b>Note:</b> The OTP will expire in 10 minutes and can only be used once.</p>
            <p>Here are some tips to keep your OTP secure:</p>
            <ul style="text-align: left; padding-left: 20px;">
                <li>Do not share your OTP with anyone.</li>
                <li>Ensure that you enter the OTP only on our official website.</li>
                <li>If you receive an OTP that you did not request, please ignore this message.</li>
            </ul>
            <p>Thank you,</p>
            <p>The Undela's Point Team</p>
            <p class="note">If you did not make this request, you can safely ignore this message.</p>
        </div>
        <div class="footer">
            <img src="https://firebasestorage.googleapis.com/v0/b/react-647c1.appspot.com/o/E-mail%20pics%2FEmart_Logo.svg.png?alt=media&token=015b991b-a7b9-4ea5-8930-716b6896cafb" alt="Logo" >
            <p>&copy; 2024 Undela's Point. All rights reserved.</p>
            <p>123 Electronics Ave, Tech City, TX 12345</p>
        </div>
    </div>
</body>
</html>
<!-- do not change the markup -->
<a href="#">
  Checkout
</a>

<!-- 
1. make look like a button
2. change text color red on hover

Cannot change html, only css.
Look closely at
-->  

<div></div>
<div></div>
<div></div>`
    const message={
        from:'muraliundela29@gmail.com', 
        to:email,
        subject:"Electronic Mart Authentiion",
        html:info
    }

 transpoter.sendMail(message).then((r)=>{

    res.status(200).send({status:true,otp:req.app.locals.OTP});


})
.catch((err)=>{
    console.log('hello')
    console.log(err.message)
    res.status(200).send({status:false,msg:'Otp Unsend'});
})


   

}