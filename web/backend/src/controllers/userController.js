const bcrypt = require('bcryptjs');

module.exports = {
    async index(req, res) {
        // list users  
    },
    async store(req, res) {
        let { name, bornDay, email, password } = req.body;

        try {
            const passwordHash = await bcrypt.hash(password, 10);
            password = passwordHash;
        } catch (error) {
            console.log(error);
        }

    },
    async show(req, res) {
        // list especific user
    },
    async update(req, res) {
        // alter user data
    },
    async destroy(req, res) {
        // delete user
    }
}