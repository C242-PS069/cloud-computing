const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET = process.env.SECRET_KEY;

const verifyJWT = (request, h) => {
    try {
        let token = request.headers['authorization'];

        if (!token) {
            return h
                .response({ error: 'Token is missing' })
                .code(401)
                .takeover();
        }

        if (token.startsWith('Bearer ')) {
            token = token.slice(7, token.length);
        }

        const decoded = jwt.verify(token, JWT_SECRET);

        if (!decoded.uid) {
            return h.response({ error: 'Invalid token' }).code(401).takeover();
        }

        request.app.uid = decoded.uid;

        return h.continue;
    } catch (err) {
        return h.response({ error: err.message }).code(401).takeover();
    }
};

module.exports = verifyJWT;
