import { Pool } from 'pg';

const pool = new Pool({
    user: process.env.DB_USER || "your db user",
    password: process.env.DB_PASSWORD?.trim() || "your db password",
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT || "your port" ),
    database: process.env.DB_DATABASE || "your database name",
  });

export default pool;
