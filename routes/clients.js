import express from "express";
import {
  // getDonors,
  // getDonor,
  addClient,
  // deleteDonors,
  // updateDonors,
  // donorLogin,
  // getLeaderboard,
} from "../controlles/clients.js";

const router = express.Router();

// router.get("/gets", getDonors);
// router.get("/leaderboard", getLeaderboard);
// router.get("/get/:id", getDonor);
router.post("/addClient", addClient);
// router.delete("/delete/:id", deleteDonors);
// router.put("/update/:id", updateDonors);
// router.post("/login", donorLogin);

export default router;
