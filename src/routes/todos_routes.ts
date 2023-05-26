import express, { Router, Request, Response } from "express";
import pool from "../confing/db";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).json("hello");
});

// create a todo
router.post("/createTodo", async (req: Request, res: Response) => {
  try {
    const {content} = req.body
    const newTodo = await pool.query("INSERT INTO todos(content) VALUES($1)", [
        content
    ]);
    res.status(200).json(newTodo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
});

// update a todo
router.put("/updateTodo/:id",async(req:Request,res:Response)=>{
    try {
        const {id} = req.params
        const {content} = req.body
        const updatedTodo = await pool.query("UPDATE todos SET content =$1 WHERE id = $2",[content,id])
        res.status(200).json(updatedTodo)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred" });
    }
})

// delete a todo 
router.delete("/deleteTodo/:id", async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const deletedTodo = await pool.query("DELETE FROM todos WHERE id = $1", [id]);
      res.status(200).json(deletedTodo);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "An error occurred" });
    }
  });

export default router;
