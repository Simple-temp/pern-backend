import express from "express"
import pool from "../db.js"
import { v4 as uuidv4 } from 'uuid';

const BlogRoutes = express.Router()

BlogRoutes.get("/getblog", async (req, res) => {
    try {
        const blog = await pool.query("SELECT * FROM blog")
        res.status(201).json({ message: "Blog is gotted", data: blog.rows })
    } catch (err) {
        res.json({ err: err.message })
    }
})

BlogRoutes.get("/getblogbyid/:id", async (req, res) => {
    try {
        const { id } = req.params
        const blogById = await pool.query("SELECT * FROM blog WHERE id=$1",[id])
        // res.status(201).json({ message: "Blog is gotted by id", data: blogById.rows[0] })
        res.status(201).json(blogById.rows[0])
    } catch (err) {
        res.json({ err: err.message })
    }
})

BlogRoutes.post("/postblog", async (req, res) => {

    const { name, des } = req.body
    const id = uuidv4();
    const newBlog = await pool.query("INSERT INTO blog (id, name, des) VALUES ($1, $2, $3) RETURNING *", [id, name, des])
    res.status(201).json({ message: "Blog is created", data: newBlog.rows })

})

BlogRoutes.delete("/deleteblog/:id", async (req, res) => {

    try {
        const { id } = req.params
        const blogById = await pool.query("DELETE FROM blog WHERE id=$1",[id])
        res.status(201).json({ message: "Blog is Deleted", data: blogById.rows })
    } catch (err) {
        res.json({ err: err.message })
    }
})

BlogRoutes.put("/updateblog/:id", async (req, res) => {
    try {
        const { id } = req.params
        const { name, des } = req.body
        const blogById = await pool.query("UPDATE blog SET name=$1, des=$2 WHERE id=$3 RETURNING *",[name, des, id])
        res.status(201).json({ message: "Blog is Updated", data: blogById.rows })
    } catch (err) {
        res.json({ err: err.message })
    }
})

export default BlogRoutes;