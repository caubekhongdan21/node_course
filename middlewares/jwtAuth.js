const jwt = require("jsonwebtoken");

const jwtAuth = (req, res, next) => {
    const headerToken = req.headers.authorization;
    // console.log(headerToken);
    if (!headerToken || !headerToken.startsWith("Bearer")) {
        return res.status(401).json({
            succes: false,
            message: "Unauthorized",
        });
    }
    const token = headerToken.split(" ")[1];
    // if (!token) {
    //     return res.status(401).json({
    //         succes: false,
    //         message: "Unauthorized",
    //     });
    // } else {
    //     const user = jwt.verify(token, "secret-key");
    //     req.user = user;
    //     console.log(req.user);
    //     next();
    // }
    try {
        const user = jwt.verify(token, env.SECRET_KEY);
        req.user = user;
        console.log(req.user);
        next();
    } catch (error) {
        return res.status(401).json({
            succes: false,
            message: "Unauthorized",
        });
    }
};

module.exports = jwtAuth;
