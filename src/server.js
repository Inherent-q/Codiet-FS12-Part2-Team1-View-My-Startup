import express from "express";
import dotenv from "dotenv";
import prisma from "./client.js";
import cors from "cors";
import detailRouter from "./components/detail.js";

dotenv.config();
BigInt.prototype.toJSON = function () {
  return this.toString();
};

const app = express();
const PORT = process.env.PORT || 3000;
const corps = await prisma.corp.findMany();
const investors = await prisma.investor.findMany();

app.use(express.json());
app.use(cors());
app.use("/", detailRouter);

app.get("/", (req, res) => {
  res.json(corps, investors);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
