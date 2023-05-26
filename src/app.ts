import express from "express";
import errorHandler from "./middleware/errorhandler";
import router from "./routes/todos_routes";
import dotenv from 'dotenv'

dotenv.config()

const port:number = 5000

const app = express()

// middlewares
app.use(express.json())
app.use("/api",router)

// error handler
app.use(errorHandler)

app.listen(port,()=>{
    console.log(`Server listening on port ${port}`)
})