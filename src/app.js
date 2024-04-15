const express = require('express');
const routerStudent = require('./router/studentRoutes');
const classRoutes = require('./router/classRoutes');
const routerClassStudent = require('./router/classStudentRouters')
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())

app.use('/students', routerStudent);
app.use('/class', classRoutes);
app.use('/classStudent', routerClassStudent)
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
