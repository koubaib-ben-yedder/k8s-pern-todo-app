import { Pool } from "pg"

const pool: Pool = new Pool({
	user: "postgres",
	password: "aakashjha",
	host: "localhost",
	port: 8000,
	database: "perntodo",
})

export default pool
