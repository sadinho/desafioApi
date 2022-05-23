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

/* ----------------------- ARMAZENAMENTO ---------------------- */
export const FILES_AZURE_KEY       = process.env.FILES_AZURE_KEY;
export const FILES_AZURE_SECRET    = process.env.FILES_AZURE_SECRET;
export const FILES_AZURE_CONTAINER = process.env.FILES_AZURE_CONTAINER;

/* -------------------------- E-MAIL -------------------------- */
export const E_MAIL_PORT            = process.env.E_MAIL_PORT;
export const E_MAIL_HOST            = process.env.E_MAIL_HOST;
export const E_MAIL_USERNAME        = process.env.E_MAIL_USERNAME;
export const E_MAIL_PASSWORD        = process.env.E_MAIL_PASSWORD;
export const E_MAIL_CONNECTION      = process.env.E_MAIL_CONNECTION;
export const E_MAIL_ADRESS          = process.env.E_MAIL_ADRESS;
export const E_MAIL_MAX_CONNECTIONS = process.env.E_MAIL_MAX_CONNECTIONS
export const E_MAIL_MAX_MESSAGES    = process.env.E_MAIL_MAX_MESSAGES;
export const E_MAIL_RATE_LIMIT      = process.env.E_MAIL_RATE_LIMIT;

/* ------------------------- JWT-AUTH ------------------------- */
export const JWT_SECRET             = process.env.JWT_SECRET;
export const TOKEN_EXPIRES_IN       = process.env.TOKEN_EXPIRES_IN;
export const TOKEN_ORIGINACAO       = process.env.TOKEN_ORIGINACAO;