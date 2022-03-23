import mysql from 'mysql2'

const db = mysql.createPool({
    connectionLimit: 10,
    charset: 'utf8mb4',
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DATABASE,
});

export const getMeeps = async () => {
    try {
        const data = await db.promise().query('SELECT * FROM meeps');
        return {
            error: false,
            data: data[0]
        }
    } catch(err) {
        return { error: true, data: null }
    }
}

export default db;