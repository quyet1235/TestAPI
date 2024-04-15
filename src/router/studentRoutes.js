const express = require("express");
const routerStudent = express.Router();
const getDBStudent = require("../controllers/StudentController");

routerStudent.get("/", async (req, res) => {
  try {
    const data = await getDBStudent.getData();
    res.json(data);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});
routerStudent.post("/", async (req, res) => {
  try {
    const postData = req.body;
    const data = await getDBStudent.postData(postData);
    res.json(data);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});
routerStudent.put("/", async (req, res) => {
  try {
    const putData = req.body;
    const data = await getDBStudent.putData(putData);
    res.json(data);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});
routerStudent.get("/id/", async (req, res) => {
  try {
    const getDataID = req.body;
    const data = await getDBStudent.getDataID(getDataID);
    res.json(data);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});
routerStudent.delete("/", async (req, res) => {
  try {
    const deleteDataID = req.body;
    const data = await getDBStudent.deleteDataID(deleteDataID);
    console.log(data);
  } catch {
    res.status(500).json({ err: err.message });
  }
});

module.exports = routerStudent;
