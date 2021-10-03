export const userMiddleware = (request, response, next) => {
    const principal = request.headers['username'];
    if(!principal) {return next("Invalid User")}
    request['principal'] = principal;
    next();
};