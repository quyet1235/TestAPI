// const express = require("express");
const connection = require('../config/database')


const getDBClass = {
  getData: async () => {
    try {
      const pool = await connection;
      const request = pool.request();
      const query =
      `Select * 
      From student.Class`
      const result = await request.query(query);
      return result.recordset

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  postData: async (data) => {
    try{
      const pool = await connection;
      const request = pool.request();
      const query = 
      `Insert into student.Class
      Values (@id, @name, @code, @maxStudent)`;
      request.input("id", data.id);
      request.input("name", data.name);
      request.input("code", data.code);
      request.input("maxStudent", data.maxStudent);
      const result = await request.query(query);
      console.log(request);

    }
    catch (err) {
      console.error(err);
      throw err;
    }
  },
putDataId: async (data) => {
    try{
      const pool = await connection;
      const request = pool.request();
      const query = 
      `Update student.Class
      Set name = @name, code = @code, maxStudent = @maxStudent 
      Where id = @id`;
      request.input("id", data.id);
      request.input("name", data.name);
      request.input("code", data.code);
      request.input("maxStudent", data.maxStudent);
      const result = await request.query(query);
      console.log(result); 
    }
    catch (err) {
      console.error(err);
      throw err;
    }
  },
  getDataId: async (data) => {
    try{
      const pool = await connection;
      const request = pool.request();
      const query = 
      `Select * 
      From student.Class
      Where id = @id`;
      request.input("id", data.id);
      const result = await request.query(query);
      return result.recordset
    }
    catch (err){
      console.error(err);
      throw err;
    }
  },
  deleteDataId: async (data) => {
    try{
      const pool = await connection;
      const request = pool.request();
      const query = 
      `Delete from student.classStudent
      Where idClass = @id
      Delete from student.Class
      Where id = @id`;
      request.input("id", data.id);
      const result = await request.query(query)
      console.log(result);
    }catch(err) {
        console.error(err);
        throw err;
    }
  }
};

module.exports = getDBClass;
