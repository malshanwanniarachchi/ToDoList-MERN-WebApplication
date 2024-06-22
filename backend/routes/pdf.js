const express = require("express");
const { addPdf, getAllPdf, viewPdf,  deletePdf, updatePdf, getDataById } = require("../controllers/pdf-controller");
const { verifyToken } = require("../helpers/auth-middleware");
const multer = require('multer');

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/create", upload.single('file'), addPdf);
router.get("/",getAllPdf);
router.get("/:id", viewPdf);
router.delete("/:id",  deletePdf);
router.put("/update/:id",  updatePdf);
router.get("/pdf/:id",  getDataById);

module.exports = router;

