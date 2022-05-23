import * as dotenv from 'dotenv';

dotenv.config();

/* ----------------------- ENVIRONMENT ----------------------- */
export const NODE_ENV = process.env.NODE_ENV;

/* --------------------------- API --------------------------- */
export const API_HOST        = process.env.API_HOST;
export const API_PROTOCOL    = process.env.API_PROTOCOL;
export const API_PORT        = process.env.API_PORT;
export const API_URL         = `${API_PROTOCOL}://${API_HOST}:${API_PORT}`;
export const APP_KEY         = process.env.APP_KEY;

/* ------------------------ POSTGRESQL ----------------------- */
export const POSTGRESQL_CONNECTION = process.env.POSTGRESQL_CONNECTION;
export const POSTGRESQL_HOST       = process.env.POSTGRESQL_HOST;
export const POSTGRESQL_PORT       = process.env.POSTGRESQL_PORT;
export const POSTGRESQL_USER       = process.env.POSTGRESQL_USER;
export const POSTGRESQL_PASSWORD   = process.env.POSTGRESQL_PASSWORD;
export const POSTGRESQL_DATABASE   = process.env.POSTGRESQL_DATABASE;
export const POSTGRESQL_POOL_SIZE  = process.env.POSTGRESQL_POOL_SIZE;
export const POSTGRESQL_SSL        = process.env.POSTGRESQL_SSL;
