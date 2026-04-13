import express from "express";
import prisma from "../client";

const router = express.Router();

export const getInvestList = async (req, res) => {
  try {
    const corps = await prisma.corp.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.status(200).json({ success: true, data: corps });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getVMS = async (req, res) => {
  try {
    const investors = await prisma.investor.findMany();
    res.status(200).json({ success: true, data: investors });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

router.get("/api/corporations", getInvestList);
router.get("/api/corporations/:id/investors", getVMS);

export default router;
