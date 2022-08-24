const logger = (req, res, next) => {
    const ip =
        req.headers["x-forwarded-for"] || req.socket.remoteAddress || null;
    const url = req.url;
    const date = new Date().toISOString();
    const method = req.method;

    console.log(ip, url, date, method);
    next();
};


module.exports = logger;