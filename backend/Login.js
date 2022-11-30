const { default: User } = require('./User');

module.exports.Login = async (req, res) => {
    let { email, password } = req.body
    try {
        const result = await User.findOne({ email });

        if (!result) {
            return res.status(404).send('Not Found')
        }

        if (result.password === password) {
            res.status(200).json({
                name: result.name,
                email: result.email,
                email_status: result.email_status
            })

        } else {
            res.status(401).send('Unauthorized')
        }

    } catch (error) {
        console.log(error)
        res.status(500).send('Internal Server Error')
    }
}