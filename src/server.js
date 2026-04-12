import express from "express";
import dotenv from "dotenv";
import prisma from "./client.js";
import cors from "cors";
import selectionRoutes from "./jc_routes/selection.js"; // 추가 (종찬

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

app.get("/", (req, res) => {
  res.json(corps);
});

// 새로운 라우트 추가 (종찬)
app.use("/api", selectionRoutes);

// 에러 핸들러 추가 (종찬)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    success: false,
    error: "서버 오류가 발생했습니다.",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
