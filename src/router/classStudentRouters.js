const getDBClassStudent = require('../controllers/ClassStudentController');
const express = require('express');
const routerClassStudent = express.Router();

//
routerClassStudent.get('/', async (req, res) => {
    try{
    const data = await getDBClassStudent.getData();
    res.json(data)}
    catch (err){ 
        res.status(500).json({err: err.message})
    }
});

routerClassStudent.post('/', async (req, res) => {
    try{
        const postData = req.body;
        const data = await getDBClassStudent.postData(postData);
        res.json(data)
    }
    catch(err){
        res.status(500).json({err: err.message})
    }
});

routerClassStudent.get('/id', async(req, res) => {
    try{
        const getDataIdClass = req.body;
        const data = await getDBClassStudent.getDataIdClass(getDataIdClass)
        res.json(data)
    }catch (err){
        res.json({err: err.message})
    }
})

module.exports = routerClassStudent;