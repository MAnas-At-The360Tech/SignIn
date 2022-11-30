const nodemailer = require('nodemailer');
const { default: User } = require('./User');


module.exports.SingIn = async (req, res) => {
    let { email, name, password } = req.body
    let code = getRandomInt(1000, 9999)
    // For Gmail
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'm.anas.the360tech@gmail.com',
            pass: 'gugoqdbonfvpvesy'
        }
    });

    // For Custum Email
    // let transporter = nodemailer.createTransport({
    //     host: "mail.the360technologies.com",
    //     port: 465,
    //     secure: true, // true for 465, false for other ports
    //     auth: {
    //       user: 'm.anaslatif@the360technologies.com', // generated ethereal user
    //       pass: 'Anas@work1', // generated ethereal password
    //     },
    //   });

    let mailOptions = {
        from: "m.anaslatif@the360technologies.com",
        to: email,
        subject: 'Email Verification',
        text: `Hi ${name} your Verification code is  ${code}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(401).json({ Psot: "error" })
        }
    });

    const user = new User({
        name,
        email,
        password,
        code
    });

    try {
        const result = await user.save()
        const data = {
            name: result.name,
            email: result.email,
            email_status: result.email_status,
        }
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}