const connection = require("../config/database");

const getDBClassStudent = {
  getData: async () => {
    try {
      const pool = await connection;
      const request = pool.request();
      const query = `Select * 
        From student.classStudent`;
      const result = await request.query(query);
      return result.recordset;
    } catch (err) {
      console.error(err);
    }
  },
  postData: async (data) => {
    try {
      const pool = await connection;
      const request = pool.request();
      const query = 
      `Insert into student.classStudent
        Values (@id, @idClass, @idStudent)`;
      request.input("id", data.id);
      request.input("idClass", data.idClass);
      request.input("idStudent", data.idStudent);
      const result = await request.query(query);
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  },
  getDataIdClass: async (data) => {
    try {
      const pool = await connection;
      const request = pool.request();
      const query = `select A.*
        from student.Student  as A 
        inner join student.classStudent as B 
        ON A.id = B.idStudent
        where B.idClass = @idClass`;
      request.input("idClass", data.idClass);
      const result = await request.query(query);
      return result.recordset;
    } catch (err) {
        console.error(err);
    }
  },

};

module.exports = getDBClassStudent;
