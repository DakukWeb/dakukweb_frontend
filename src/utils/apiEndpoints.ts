import Env from './env';

export const SERVER_ENDPOINT: string = Env.SERVER_ENDPOINT;
export const API_URL: string = `${SERVER_ENDPOINT}/api`;
export const LOGIN_URL: string = `${API_URL}/login`;
export const SIGNUP_URL: string = `${API_URL}/signup`;