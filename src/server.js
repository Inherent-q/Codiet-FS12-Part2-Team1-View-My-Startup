import express from "express";
import dotenv from "dotenv";
import cors from "cors";
<<<<<<< HEAD
import detailRouter from "./components/detail.js";
=======
import corpsRouter from "./components/corporations.js";
import selectionRoutes from "./components/selection.js"; // 추가 (종찬)
import { errorHandler } from "./middleware/errorHandler.js"; // 추가 (종찬)
>>>>>>> 52238a34a5d1a20bf94d89b2cbabd9cbdf533155

dotenv.config();
BigInt.prototype.toJSON = function () {
  return this.toString();
};

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use("/", detailRouter);

app.use("/api/corporations", corpsRouter);
app.get("/", (req, res) => {
  res.json(corps, investors);
});

// 새로운 라우트 추가 (종찬)
app.use("/api", selectionRoutes);

// 에러 핸들러 추가 (종찬)
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
