import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../shared/sendResponse';
import config from '../../config';
import { authService } from './auth.service';
import { IRefreshTokenResponse } from './auth.interface';

/*

const functionName = catchAsync(async (req: Request, res: Response) => {
*/

const refreshToken = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { refreshToken } = req.cookies;
    const result = await authService.refreshToken(refreshToken);

    // set refresh token into cookie
    const cookieOptions = {
      secure: config.env === 'production',
      httpOnly: true,
    };

    res.cookie('refreshToken', refreshToken, cookieOptions);

    sendResponse<IRefreshTokenResponse>(res, {
      statusCode: 200,
      success: true,
      message: 'New access token generated successfully !',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const authController = {
  refreshToken,
};
