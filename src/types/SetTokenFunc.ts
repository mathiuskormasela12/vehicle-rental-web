/* eslint-disable no-unused-vars */
// ========== SetTokenFunc
// import all modules
import { IReduxAuthAction } from '../interfaces';

export type SetTokenFunc = (accessToken: string, refreshToken: string) => IReduxAuthAction
