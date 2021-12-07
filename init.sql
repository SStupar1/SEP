CREATE DATABASE sep
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1;

\connect sep;

CREATE SCHEMA IF NOT EXISTS it_firm_schema AUTHORIZATION postgres;

CREATE SCHEMA IF NOT EXISTS paypal_schema AUTHORIZATION postgres;
