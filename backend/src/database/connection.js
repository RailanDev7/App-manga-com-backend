import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();


export default async function ConectarBanco() {
    const conexao = mysql.createPool({
        host: process.envhost_db,
        user: process.env.user_db,
        password: process.env.password_db,
        database: process.env.database_db
    });
    
}