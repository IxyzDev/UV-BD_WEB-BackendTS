import { createPool, Pool } from 'mysql2/promise'

export async function connect(): Promise<Pool> {
    const connection = createPool({
        host: 'localhost',
        user: 'root',
        password: '7827',
        database: 'proyectoreact',
        connectionLimit: 10
    });
    return connection;
}