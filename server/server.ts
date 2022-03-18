import express from "express"
import cors from "cors"

const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

const TodoRouter = require("./routes/todo.route")

app.use("/", TodoRouter)

app.listen(PORT, () => console.info(`Server running on port ${PORT}`))
