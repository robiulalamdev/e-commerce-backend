/* eslint-disable consistent-type-definitions */
import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AuthValidation } from '../users/user.zodHanadler';
import { authController } from './auth.controller';
import auth from '../../middlewares/auth';
const router = express.Router();

/*
 validateRequest(AuthValidation.createUserZodValidate),

*/

export const authRoutes = router;
