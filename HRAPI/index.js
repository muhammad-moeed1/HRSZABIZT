const express = require('express'); 
const cors = require('cors');
const pool = require ('./db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/',async(req,res)=>{
    try{
        res.json('WELCOMW TO HRAPI');
    }catch(err){
        res.status(500).json({Error:arr.message});
    }
});

app.get('/location',async(req,res)=>{
    try{
        const result = await pool.query('select * from locations');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message0});
    }
});

app.get('/getEmplocationCountry',async(req,res)=>{
    try{
        const result = await pool.query('select * from locations');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message0});
    }
});


app.get('/lc',async(req,res)=>{
    try{
        const result = await pool.query('select count(*) from locations');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message0});
    }
});


app.get('/empTotal',async(req,res)=>{
    try{
        const result = await pool.query('select count(employee_id) from employees');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message0});
    }
});

app.get('/cnt',async(req,res)=>{
    try{
        const result = await pool.query('select count(*) from countries');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message0});
    }
});

app.get('/rgn',async(req,res)=>{
    try{
        const result = await pool.query('select count(*) from regions');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message0});
    }
});

app.get('/dep',async(req,res)=>{
    try{
        const result = await pool.query('select count(*) from departments');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message0});
    }
});

app.get('/jh',async(req,res)=>{
    try{
        const result = await pool.query('select count(*) from job_history');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message0});
    }
});

app.get('/job',async(req,res)=>{
    try{
        const result = await pool.query('select count(*) from jobs');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message0});
    }
});

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Connect Successfully...on PORT ${PORT}`);
});