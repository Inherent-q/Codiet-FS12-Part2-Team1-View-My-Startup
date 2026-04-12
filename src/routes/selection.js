import express from "express";
import * as controller from "../jc_controllers/selectionController.js";

const router = express.Router();

router.get("/my-selection", controller.getMySelection);
router.post("/my-selection", controller.postMySelection);
router.get("/comparison-selections", controller.getComparisonSelections);
router.post("/comparison-selections", controller.postComparisonSelections);

export default router;
