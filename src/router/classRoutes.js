const express = require('express');
const routerClass = express.Router();
const getDBClass = require('../controllers/ClassController');

routerClass.get('/',  async (req, res) => {
    try{
        const data = await getDBClass.getData()
        // res.json(JSON.stringify(`"status": true, "data" : ${res.json(data)}`))
        // console.log();
        res.json({ status: true, data: data , msg: "Thanh cong"});
    }   
    catch (err){
        err.status(500).json({err: err.message})
    }
} );
routerClass.post('/', async(req, res) => {
    try{
        const postData = req.body;
        const data = await getDBClass.postData(postData);
        res.json(data)
    }
    catch (err) {
        res.status(500).json({err: err.message});
    }
});
routerClass.put('/', async (req, res) => {
    try{
        const putDataId = req.body;
        const data = await getDBClass.putDataId(putDataId)
        res.json(data)
        }   
    catch (err){
        err.status(500).json({err: err.message})
    }
});
routerClass.get('/id', async (req, res) => {
    try{
    const getDataId = req.body;
    const data = await getDBClass.getDataId(getDataId);
    res.json(data);}
    catch (err){
        res.status(500).json({err: err.message})
    }
});

routerClass.delete('/', async( req, res) => {
    try{
        const deleteDataId = req.body;
        const data = await getDBClass.deleteDataId(deleteDataId);
        res.json(data);
    }catch(err){
        res.status(500).json({err: err.message});
    }
})
module.exports = routerClass;
