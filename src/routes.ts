import * as Router from 'koa-router';

import { ping } from './modules/ping/ping.controller';

const routes = new Router({ prefix: '/api' });

routes.get('/ping', ping);

export default routes;