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

app.get('/country',async(req,res)=>{
    try{
        const result = await pool.query('select * from countries');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message0});
    }
});

app.get('/employee',async(req,res)=>{
    try{
        const result = await pool.query('select * from employees');
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

app.get('/40',async(req,res)=>{
    try{
        const result = await pool.query('Select e.first_name, e.last_name, l.city, l.postal_code, c.country_name from employees e left join departments d on e.department_id = d.department_id left join locations l on d.location_id = l.location_id left join countries c on l.country_id = c.country_id limit 5');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message0});
    }
});

app.get('/41',async(req,res)=>{
    try{
        const result = await pool.query('Select jh.job_id, jh.start_date, jh.end_date, e.first_name, e.last_name, e.salary from job_history jh join employees e on jh.employee_id = e.employee_id limit 5');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message0});
    }
});

app.get('/42',async(req,res)=>{
    try{
        const result = await pool.query('Select e.first_name, e.last_name, e.salary, jh.job_id, jh.start_date, jh.end_date from employees e join job_history jh on e.employee_id = jh.employee_id limit 5');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message0});
    }
});
 
app.get('/43',async(req,res)=>{
    try{
        const result = await pool.query('Select e.first_name, e.last_name, e.salary, jh.job_id, jh.start_date, jh.end_date, d.department_name from employees e join job_history jh on e.employee_id = jh.employee_id join departments d on jh.department_id = d.department_id limit 5');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message0});
    }
});
 
app.get('/44',async(req,res)=>{
    try{
        const result = await pool.query('Select e.first_name, e.last_name, e.salary, jh.job_id, jh.start_date, d.department_name, l.city, l.postal_code from employees e join job_history jh on e.employee_id = jh.employee_id join departments d on jh.department_id = d.department_id join locations l on d.location_id = l.location_id limit 5');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message0});
    }
});
 
app.get('/45',async(req,res)=>{
    try{
        const result = await pool.query('Select e.first_name, e.last_name, e.salary, jh.job_id, jh.start_date, c.country_name from employees e join job_history jh on e.employee_id = jh.employee_id join departments d on jh.department_id = d.department_id join locations l on d.location_id = l.location_id join countries c on l.country_id = c.country_id limit 5');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message0});
    }
});

app.get('/46',async(req,res)=>{
    try{
        const result = await pool.query('Select jh.job_id, jh.start_date, e.first_name, e.last_name, e.salary, d.department_name from job_history jh join employees e  on jh.employee_id = e.employee_id join departments d on e.department_id = d.department_id limit 5');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message0});
    }
});

app.get('/47',async(req,res)=>{
    try{
        const result = await pool.query('Select jh.start_date, jh.end_date, e.first_name, e.last_name, e.salary, j.job_id, j.job_title from job_history jh join employees e  on jh.employee_id = e.employee_id join jobs j on e.job_id = j.job_id limit 5');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message0});
    }
});
 
app.get('/48',async(req,res)=>{
    try{
        const result = await pool.query('Select jh.start_date, jh.end_date, e.first_name, e.last_name, e.salary, j.job_id, j.job_title, d.department_name from jobs j join job_history jh on j.job_id = jh.job_id join employees e on jh.employee_id = e.employee_id join departments d on e.department_id = d.department_id limit 5');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message0});
    }
});

app.get('/49',async(req,res)=>{
    try{
        const result = await pool.query('Select jh.start_date, jh.end_date, e.first_name, e.last_name, e.salary, d.department_name, l.city, l.postal_code from job_history jh join employees e on jh.employee_id = e.employee_id join departments d on e.department_id = d.department_id join locations l on d.location_id = l.location_id limit 5');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message0});
    }
});

app.get('/50',async(req,res)=>{
    try{
        const result = await pool.query('Select jh.start_date, jh.end_date, e.first_name, e.last_name, e.salary, d.department_name, c.country_name from job_history jh join employees e on jh.employee_id = e.employee_id join departments d on e.department_id = d.department_id join locations l on d.location_id = l.location_id join countries c on l.country_id = c.country_id limit 5');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message0});
    }
});

app.get('/51',async(req,res)=>{
    try{
        const result = await pool.query('Select r.region_id, r.region_name, c.country_name, l.city, l.postal_code from locations l join countries c on l.country_id = c.country_id join regions r on c.region_id = r.region_id limit 5');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message0});
    }
});

app.get('/52',async(req,res)=>{
    try{
        const result = await pool.query('select c.country_name, r.region_name, l.city from countries c join regions r on c.region_id = r.region_id join locations l on c.country_id = l.country_id limit 5');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message0});
    }
});

app.get('/53',async(req,res)=>{
    try{
        const result = await pool.query('select l.city, c.country_name, r.region_name from locations l join countries c on l.country_id = c.country_id join regions r on c.region_id = r.region_id limit 5');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message0});
    }
});

app.get('/54',async(req,res)=>{
    try{
        const result = await pool.query('select d.department_name, e.first_name, e.last_name, l.city from departments d join employees e on d.department_id = e.department_id join locations l on d.location_id = l.location_id limit 5');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message0});
    }
});

app.get('/55',async(req,res)=>{
    try{
        const result = await pool.query('select e.first_name, e.last_name, d.department_name, l.city, c.country_name from employees e join departments d on e.department_id = d.department_id join locations l on d.location_id = l.location_id join countries c on l.country_id = c.country_id limit 5');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message0});
    }
});

app.get('/56',async(req,res)=>{
    try{
        const result = await pool.query('select e.first_name, e.last_name, m.first_name as manager_first, m.last_name as manager_last, d.department_name, l.city from employees e left join employees m on e.manager_id = m.employee_id join departments d on e.department_id = d.department_id join locations l on d.location_id = l.location_id limit 5');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message0});
    }
});

app.get('/57',async(req,res)=>{
    try{
        const result = await pool.query('select e.first_name, e.last_name, j.job_title, d.department_name, l.city from employees e join jobs j on e.job_id = j.job_id join departments d on e.department_id = d.department_id join locations l on d.location_id = l.location_id limit 5');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message0});
    }
});

app.get('/58',async(req,res)=>{
    try{
        const result = await pool.query('select e.first_name, e.last_name, j.job_title, d.department_name, m.first_name as manager_first, m.last_name as manager_last from employees e join jobs j on e.job_id = j.job_id join departments d on e.department_id = d.department_id left join employees m on e.manager_id = m.employee_id limit 5');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message0});
    }
});

app.get('/59',async(req,res)=>{
    try{
        const result = await pool.query('select e.first_name, e.last_name, j.job_title, d.department_name, m.first_name as manager_first, m.last_name as manager_last, l.city from employees e join jobs j on e.job_id = j.job_id join departments d on e.department_id = d.department_id join locations l on d.location_id = l.location_id left join employees m on e.manager_id = m.employee_id limit 5');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message0});
    }
});

app.get('/60',async(req,res)=>{
    try{
        const result = await pool.query('select country_name from countries where region_id = 1');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message0});
    }
});

 app.get('/61', async (req, res) => {
     try {
         const result = await pool.query(`
         Select d.department_id, d.department_name, l.city from departments d join
         locations l on d.location_id = l.location_id where l.city like 'N%' limit 5;
         `);
         res.json(result.rows);
     } catch (err) {
         res.status(500).json({ Error: err.message });
     }
});


app.get('/62',async(req,res)=>{
    try{
        const result = await pool.query('select e.first_name, e.last_name, e.salary, d.department_name, e.commission_pct from employees e join departments d on e.department_id = d.department_id join employees em on d.manager_id = em.manager_id where e.commission_pct > 0.15 limit 5');
        res.json(result.rows);
    }catch(eXrr){
        res.status(500).json({Error:err.message0});
    }
});

app.get('/63',async(req,res)=>{
    try{
        const result = await pool.query('select distinct j.job_title, e.first_name, e.last_name from employees e join jobs j on e.job_id = j.job_id where e.employee_id in (select distinct manager_id from employees where manager_id is not null) limit 5');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message0});
    }
});

 app.get('/64', async (req, res) => {
     try {
         const result = await pool.query(`
             select l.postal_code, c.country_name, r.region_name
             from locations l join countries c on l.country_id = 
             c.country_id join regions r on c.region_id = r.region_id
             where r.region_name = 'asia' limit 5;
         `);
         res.json(result.rows);
     } catch (err) {
         res.status(500).json({ Error: err.message });
     }
 });


app.get('/65',async(req,res)=>{
    try{
        const result = await pool.query('Select d.department_name, e.first_name, e.commission_pct from departments d join employees e on d.department_id = e.department_id where commission_pct < (Select avg (commission_pct) as avg_com from employees where commission_pct is not null) limit 5');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message0});
    }
});

app.get('/66',async(req,res)=>{
    try{
        const result = await pool.query('select e.first_name, e.last_name, e.salary, j.job_title  from employees e join jobs j on e.job_id = j.job_id where e.salary > (select avg(e2.salary) from employees e2 where e2.department_id = e.department_id) limit 5');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message0});
    }
});
app.get('/67',async(req,res)=>{
    try{
        const result = await pool.query('select employee_id from employees where department_id is null');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message0});
    }
});

app.get('/68',async(req,res)=>{
    try{
        const result = await pool.query('select e.first_name, e.last_name from employees e where exists ( select 1 from job_history jh where jh.employee_id = e.employee_id group by jh.employee_id having count(*) > 1) limit 5');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message0});
    }
});

app.get('/69',async(req,res)=>{
    try{
        const result = await pool.query('Select department_id, count(department_id) as dept_count from employees group by department_id limit 5');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message0});
    }
});

app.get('/70',async(req,res)=>{
    try{
        const result = await pool.query('select j.job_id, j.job_title, sum(e.salary) as total_salary from jobs j join employees e on j.job_id = e.job_id group by j.job_id, j.job_title limit 5');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message0});
    }
});

app.get('/71',async(req,res)=>{
    try{
        const result = await pool.query('select d.department_id, d.department_name, avg (e.commission_pct) as avg_commission from departments d join employees e on d.department_id = e.department_id group by d.department_id, d.department_name limit 5');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message0});
    }
});

app.get('/72',async(req,res)=>{
    try{
        const result = await pool.query('select c.country_id, max(e.salary) as max_salary from employees e join departments d on e.department_id = d.department_id join locations l on d.location_id = l.location_id join countries c on l.country_id = c.country_id group by c.country_id limit 5');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message0});
    }
});

 app.get('/73', async (req, res) => {
     try {
         const result = await pool.query(`
             select j.job_title, d.department_name, concat(e.first_name , ' ' , e.last_name)
             as full_name, jh.start_date from job_history jh join employees e on jh.employee_id 
             = e.employee_id join jobs j on jh.job_id = j.job_id join departments d on jh.department_id
             = d.department_id where jh.start_date >= '1993-01-01' and jh.end_date <= '1997-08-31'
             Limit 5;
         `);
         res.json(result.rows);
     } catch (err) {
         res.status(500).json({ Error: err.message });
     }
 });


app.get('/74',async(req,res)=>{
    try{
        const result = await pool.query('select c.country_name, l.city, count(d.department_id) as department_count from employees e join departments d on e.department_id = d.department_id join locations l on d.location_id = l.location_id join countries c on l.country_id = c.country_id group by c.country_name, l.city having count(e.employee_id) >= 2 limit 5');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message0});
    }
});

 app.get('/75', async (req, res) => {
     try {
         const result = await pool.query(`
             select concat(e.first_name, ' ' ,e.last_name )as full_name, j.job_title,
             jh.start_date, jh.end_date from employees e join job_history jh on  
             e.employee_id = jh.employee_id join jobs j on jh.job_id = j.job_id
             where e.commission_pct is null and jh.end_date = (select max
             (jh2.end_date) from job_history jh2 where jh2.employee_id = 
             e.employee_id) limit 5;
         `);
         res.json(result.rows);
     } catch (err) {
         res.status(500).json({ Error: err.message });
     }
 });

 app.get('/76', async (req, res) => {
     try {
         const result = await pool.query(`
             select concat(e.first_name, ' ', e.last_name) as full_name,
             c.country_id, c.country_name from employees e join departments 
             d on e.department_id = d.department_id join locations l on 
             d.location_id = l.location_id join countries c on l.country_id
             = c.country_id limit 5;
         `);
         res.json(result.rows);
     } catch (err) {
         res.status(500).json({ Error: err.message });
     }
 });

 app.get('/77', async (req, res) => {
     try {
         const result = await pool.query(`
             select concat(e.first_name, ' ', e.last_name) as full_name, e.salary, 
             e.department_id from employees e where e.salary in (select min
             (e2.salary) from employees e2 group by e2.department_id) limit 5;
         `);
         res.json(result.rows);
     } catch (err) {
         res.status(500).json({ Error: err.message });
     }
 });


app.get('/78', async (req, res) => {
    try {
         const result = await pool.query(`
             select * from employees where salary = ( select distinct salary
             from employees order by salary desc offset 2 rows fetch next
             1 row only );
         `);
        res.json(result.rows);
     } catch (err) {
         res.status(500).json({ Error: err.message });
     }
 });


 app.get('/79', async (req, res) => {
     try {
         const result = await pool.query(`
             select e.employee_id, concat(e.first_name,' ' ,e.last_name) as 
             full_name, e.salary from employees e where salary > (select 
             avg(salary) from employees) and department_id in ( select 
             department_id from employees where first_name like '%J%' 
             or last_name like '%J%') limit 5;
         `);
         res.json(result.rows);
     } catch (err) {
         res.status(500).json({ Error: err.message });
     }
 });


app.get('/80', async (req, res) => {
    try {
        const result = await pool.query(`
            select concat(e.first_name, ' ', e.last_name) as full_name, e.employee_id,
            j.job_title, l.city from jobs j join employees e on j.job_id = e.job_id 
            join departments d on e.department_id = d.department_id join locations 
            l on d.location_id = l.location_id where l.city = 'toronto' limit 5;
        `);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});










const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Connect Successfully...on PORT ${PORT}`);
});