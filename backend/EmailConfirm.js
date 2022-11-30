const { default: User } = require('./User');

module.exports.EmailConfirm = async (req, res) => {
    let { email, code } = req.body
    try {
        const result = await User.findOne({ email });

        if (!result) {
            return  res.status(404).send('Not Found')
        }

        if (result.code == code) {

            const result = await User.findOneAndUpdate({ email }, {
                // ...result,
                email_status: "verify"
            });

            res.status(200).send('Ok')

        } else {
            res.status(406).send('Not Acceptable')
        }

    } catch (error) {
        console.log(error)
        res.status(500).send('Internal Server Error')
    }
}