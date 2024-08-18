import * as controller from '../api/controller.auth.js'
import express from 'express'

const authRoute = express.Router()


authRoute.get(
    '/',
    controller.Test
);
authRoute.get(
    '/users',
    controller.getUsers
);
authRoute.post(
    '/users',
    controller.postUsers
);
authRoute.patch(
    '/users',
    controller.patchUsers
);

authRoute.delete(
    '/users',
    controller.deleteUsers
);



export default authRoute;