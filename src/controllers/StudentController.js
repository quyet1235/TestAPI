const { request } = require("express");
const connection = require("../config/database");

const getDBStudent = {
  getData: async () => {
    try {
      const pool = await connection;
      const request = pool.request();
      const query = `Select * from student.Student`;
      const result = await request.query(query);
      return result.recordset;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
  postData: async (data) => {
    try {
      const pool = await connection;
      const request = pool.request();
      const query = `Insert into student.Student 
      values (@id, @name, @code, @birth)`;
      request.input("id", data.id);
      request.input("name", data.name);
      request.input("code", data.code);
      request.input("birth", data.birth);
      const result = await request.query(query);
      console.log(result);
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
  putData: async (data) => {
    try {
      const pool = await connection;
      const request = pool.request();
      const query = `Update student.Student
      Set name = @name, code = @code, birth = @birth
      Where id = @id`;
      request.input("id", data.id);
      request.input("name", data.name);
      request.input("code", data.code);
      request.input("birth", data.birth);
      const result = await request.query(query);
      console.log(result);
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
  getDataID: async (data) => {
    try {
      const pool = await connection;
      const request = pool.request();
      const query = `Select * 
      From student.Student
      Where id = @id`;
      request.input("id", data.id);
      const result = await request.query(query);
      return result.recordset;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
  deleteDataID: async (data) => {
    try {
      const pool = await connection;
      const request = pool.request();
      const query = `Delete from student.Student
    Where id = @id`;
      request.input("id", data.id);
      const result = await request.query(query);
      return result.recordsets
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
};

module.exports = getDBStudent;
