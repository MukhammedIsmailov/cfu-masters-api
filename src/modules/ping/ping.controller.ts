export function ping (ctx, next) {
    ctx.response.body = {
        response: 'pong',
    };

    ctx.status = 200;

    next();
}