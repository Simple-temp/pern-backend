import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: "aziz",
    port: 5432,
    database: "blogdb",
})

export default pool