import { Request, Response } from "express";
import cors from "cors";
import users from "./jsonUsers.json"
import posts from "./jsonPosts.json"

const express = require('express');
const app = express();

app.use(cors());

app.get("/api/v1/user", (req: Request, res: Response) => {
    res.send(users);
});

app.get("/api/v1/user/post", (req: Request, res: Response) => {
    res.send(posts);
});

app.listen(5000, () => {console.log("Server is running port 5000.")})
