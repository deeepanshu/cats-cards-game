export const userMiddleware = (request, response, next) => {
    const principal = request.headers['username'];
    request['principal'] = principal;
    next();
};