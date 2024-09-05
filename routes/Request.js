import express from "express";
import { addRequest, getRequestByTitle, updateRequest, deleteRequestByTitle } from "../controlles/Request.js";

const router = express.Router();

router.post("/add", addRequest);

router.post("/get", getRequestByTitle);

router.put("/update", updateRequest);

router.delete("/delete", deleteRequestByTitle);

export default router;
