const redis = require('redis');
const jwt = require('jsonwebtoken');

//setup Redis:
const redisClient = redis.createClient(process.env.REDIS_URI);

//In service.js everytime endpoint gets called, it recieve req and res and next
// the 'next' can be returned so server.js keeps running next functions after requireAuth
const requireAuth = (req, res, next) => {
    const { authorization } = req.headers;

    if(!authorization) {
        return res.status(401).json('Unauthorized');
    }

    return redisClient.get(authorization, (err, reply) => {
        if(err || !reply) {
            return res.status(401).json('Unauthorized');
        }
        console.log('You shall pass');
        return next(); //All good, let's keep going!
    })
}

const signToken = (email) => {
    const jwtPayload = { email };
    return jwt.sign(jwtPayload, process.env.JWT_SECRET, { expiresIn: '2 days'});
}
  
const setToken = (key, value) => {
return Promise.resolve(redisClient.set(key, value))
}

const createSessions = (user) => {
    // Create a JWT token, return user data
    const { email, id } = user;
    const token = signToken(email);
    return setToken(token, id)
        .then(() => {
        return { success: 'true', userId: id, token }
        })
        .catch(err => console.log(err));
} 

module.exports = {
    redisClient: redisClient,
    requireAuth: requireAuth,
    createSessions: createSessions
}