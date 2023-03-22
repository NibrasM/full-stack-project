const jwt = require('jsonwebtoken');
require('dotenv').config();


function createToken(userType) {
    const token = jwt.sign({ name: 'yishai', userType }, process.env.SECRET, { expiresIn: '1h' });
    console.log('token', token);
    return token;
}

function validateToken(token) {
    try {
        const decryptedToken = jwt.verify(token, process.env.SECRET);
        // 4) check userType (authorization)
        if (decryptedToken.userType === "admin") {
            return true;
        }
        return false;
    } catch (error) {
        console.log('error', error);
        return false;
    }
}
​
​
module.exports = { createToken, validateToken };