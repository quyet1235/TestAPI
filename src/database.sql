create database TestNodeJs;

create table student.Student (
    id Int,
    name NVARCHAR(50),
    code Int,
    birth Date,
    PRIMARY KEY(id)
)

create table student.Class(
    id int, 
    name NVARCHAR(50),
    code VARCHAR(10) CHECK( len(code) >= 5),
    maxStudent int check(maxStudent > 0)
    PRIMARY KEY (id)
)
create table student.classStudent(
    id int,     
    idClass int,
    idStudent int, 
    PRIMARY KEY(id, idClass, idStudent),
    FOREIGN KEY(idStudent) REFERENCES student.Student(id),
    FOREIGN KEY(idClass) REFERENCES student.Class(id)

)


