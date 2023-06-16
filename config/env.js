exports.env = {
    PORT: process.env.PORT || 3000,
    SECRET_KEY: process.env.SECRET_KEY || "123456",
    MONGO_URL: process.env.MONGO_URL || "mongodb://127.0.0.1:27017/aothenhi",
    EXPIRED_IN: process.env.EXPIRED_IN || "1d",
};
