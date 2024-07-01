const bcrypt = require("bcrypt");

const encryptedPassword = async (plainTextPassword) => {
    try {
        return await bcrypt.hash(plainTextPassword, 8);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const checkPassword = async (plainTextPassword, encryptedPassword) => {
    return bcrypt.compare(plainTextPassword, encryptedPassword);
}

module.exports = { checkPassword, encryptedPassword };