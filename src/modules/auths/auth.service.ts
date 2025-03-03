/* eslint-disable consistent-type-definitions */
import { Secret } from 'jsonwebtoken';
import config from '../../config';
import { jwtHelpers } from '../../helpers/jwtHelpers';
import { User } from '../users/user.model';
import ApiError from '../../errors/ApiError';
import httpStatus from 'http-status';
import {
  ILoginUserResponse,
  IRefreshTokenResponse,
  IUserLogin,
} from './auth.interface';
import bcrypt from 'bcrypt';

const refreshToken = async (token: string): Promise<IRefreshTokenResponse> => {
  let verifiedToken = null;
  try {
    verifiedToken = jwtHelpers.verifyToken(
      token,
      config.jwt.refresh_secret as Secret,
    );
  } catch (err) {
    throw new ApiError(httpStatus.FORBIDDEN, 'Invalid Refresh Token');
  }

  const { userId } = verifiedToken;

  const isUserExist = await User.findById({ _id: userId });
  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
  }
  const newAccessToken = jwtHelpers.createToken(
    {
      id: isUserExist.id,
    },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string,
  );

  return {
    accessToken: newAccessToken,
  };
};

export const authService = {
  refreshToken,
};
