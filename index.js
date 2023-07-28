import express from "express"
import dotenv from "dotenv"
import BlogRoutes from "./Routes/BlogRoutes.js"
import cors from "cors"
import pool from "./db.js"

dotenv.config()

const app = express()
app.use(cors()) 
app.use(express.json()) 
app.use(express.urlencoded({ extended: false })); 

pool.connect()
    .then(()=> console.log("PostgreSql DB connected"))
    .catch((err)=> console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/blog", BlogRoutes)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})