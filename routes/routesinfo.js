const express = require('express');
const router = express.Router();
const {create, getAllStudInfo, update, deletestud,getStudOne} = require("../controllers/studentinfo.controller")

router.post("/create", create);
router.get("/getAllStu", getAllStudInfo);
router.patch("/update/:id", update);
router.delete("/deletestud/:id", deletestud);
router.get("/getStudOne/:id", getStudOne);

module.exports = router;
