/*
* Project Script
*
*/
print("STARTING SCRIPT");
//Host
conn = new Mongo("localhost");
//Database Name
db = conn.getDB("MongoDB");
/Clean Database if already exists/
db.dropDatabase();
/Collection creation/
db.createCollection("students");
db.createCollection("parents");
db.createCollection("teachers");
db.createCollection("courses");
db.createCollection("courseclasses");
print("***********creating students*********");
student1= {
"_id" : "s1",
"fullName" : "Edgar",
"gender" : "Male",
"dateofBirth" : ISODate("1950-09-16T05:00:00Z"),
"typeDocument" : "DNI",
"documentNumber" : "47856688"
}
student2= {
"_id" : "s2",
"fullName" : "Gonzalo",
"gender" : "Male",
"dateofBirth" : ISODate("1960-09-16T05:00:00Z"),
"typeDocument" : "DNI",
"documentNumber" : "46633278"
}
student3= {
    "_id" : "s3",
"fullName" : "Marcos",
"gender" : "Male",
"dateofBirth" : ISODate("1950-09-16T05:00:00Z"),
"typeDocument" : "DNI",
"documentNumber" : "99999999",
}
student4= {
    "_id" : "s4",
"fullName" : "Marcos",
"gender" : "Male",
"dateofBirth" : ISODate("1950-09-16T05:00:00Z"),
"typeDocument" : "DNI",
"documentNumber" : "77777777",
}
print("***********creating parents*********");
/* parent */
parent1= {
	     "id" : "p1",
       "fullName" : "Pedro",
       "gender" : "Male",
       "dateofBirth" : ISODate("1960-03-22T00:00:00Z"),
       "typeDocument" : "DNI",
       "documentNumber" : "55555555",
	      "idStudent" : "s1",
	    "idFamily" : "Romero"
};
parent2= {
     	"id" : "p2",
       "fullName" : "Maria",
       "gender" : "Male",
       "dateofBirth" : ISODate("1970-03-22T00:00:00Z"),
       "typeDocument" : "DNI",
       "documentNumber" : "99199991",
	    "idStudent" : "s1",
	     "idFamily" : "Romero"
};
parent3= {
       "id" : "p3",
       "fullName" : "Carlos",
       "gender" : "Male",
       "dateofBirth" : ISODate("1960-03-22T00:00:00Z"),
       "typeDocument" : "DNI",
       "documentNumber" : "15555555",
	      "idStudent" : "s1",
	       "idFamily" : "Romero"
};
parent4= {
     	"id" : "p4",
       "fullName" : "Juan",
       "gender" : "Male",
       "dateofBirth" : ISODate("1980-03-22T00:00:00Z"),
       "typeDocument" : "DNI",
       "documentNumber" : "54770499",
	     "idStudent" : "s2",
	     "idFamily" : "Quispe"
};
parent5= {
	     "id" : "p5",
       "fullName" : "Ines",
       "gender" : "Female",
       "dateofBirth" : ISODate("1970-03-22T00:00:00Z"),
       "typeDocument" : "DNI",
       "documentNumber" : "99914589",
	      "idStudent" : "s2",
	       "idFamily" : "Quispe"
};
parent6= {
       "id" : "p6",
       "fullName" : "Andres",
       "gender" : "Male",
       "dateofBirth" : ISODate("1990-03-22T00:00:00Z"),
       "typeDocument" : "DNI",
       "documentNumber" : "51452368",
	     "idStudent" : "s2",
     	"idFamily" : "Quispe"
};
print("***********creating teachers*********");
teacher1= {
"_id" : "t1",
"fullName" : "Raul",
"gender" : "Male",
"dateofBirth" : ISODate("1950-09-16T05:00:00Z"),
"typeDocument" : "DNI",
"documentNumber" : "14714714"
}
teacher2= {
"_id" : "t2",
"fullName" : "Leo",
"gender" : "Male",
"dateofBirth" : ISODate("1960-09-16T05:00:00Z"),
"typeDocument" : "DNI",
"documentNumber" : "15981598"
}
teacher3= {
    "_id" : "t3",
"fullName" : "Mario",
"gender" : "Male",
"dateofBirth" : ISODate("1950-09-16T05:00:00Z"),
"typeDocument" : "DNI",
"documentNumber" : "14787814",
}
teacher4= {
    "_id" : "t4",
"fullName" : "Mario",
"gender" : "Male",
"dateofBirth" : ISODate("1950-09-16T05:00:00Z"),
"typeDocument" : "DNI",
"documentNumber" : "14852678",
}
print("***********creating courses*********");
course1= {
"_id" : "c1",
"fullName" : "Math",
"status" : "activo",
"maximumQuantity": "5",
"minimumquantity" : "2"
}
course2= {
"_id" : "c2",
"fullName" : "biology",
"status" : "activo",
"maximumQuantity": "5",
"minimumquantity" : "2"
}
course3= {
    "_id" : "c3",
"fullName" : "physical",
"status" : "abierto",
"maximumQuantity": "5",
"minimumquantity" : "2"
}
course4= {
    "_id" : "c4",
"fullName" : "chemistry",
"status" : "finalizado",
"maximumQuantity": "5",
"minimumquantity" : "2"
}
print("***********creating coursesclasses*********");
courseclasses1= {
"_id" : "cc1",
"idCourse" : "c1",
"idTeacher" : "t2",
"startofclasses" : ISODate("2020-01-16T05:00:00Z"),
"endofclasses" : ISODate("2020-02-16T05:00:00Z"),
"idStudent" : "s1",
"idParents" : "p1"
}
courseclasses2= {
"_id" : "cc2",
"idCourse" : "c2",
"idTeacher" : "t2",
"startofclasses" : ISODate("2019-02-16T05:00:00Z"),
"endofclasses" : ISODate("2019-03-16T05:00:00Z"),
"idStudent" : "s2",
"idParents" : "p1"
}
courseclasses3= {
"_id" : "cc3",
"idCourse" : "c3",
"idTeacher" : "t1",
"startofclasses" : ISODate("2019-10-16T05:00:00Z"),
"endofclasses" : ISODate("2019-11-16T05:00:00Z"),
"idStudent" : "s2",
"idParents" : "p2"
}
courseclasses4= {
"_id" : "cc4",
"idCourse" : "c2",
"idTeacher" : "t3",
"startofclasses" : ISODate("2019-09-30T05:00:00Z"),
"endofclasses" : ISODate("2019-10-30T05:00:00Z"),
"idStudent" : "s3",
"idParents" : "p3"
}
print("***********saving students*********");
db.students.save(student1);
db.students.save(student2);
db.students.save(student3);
db.students.save(student4);
print("***********saving parents*********");
db.parents.save(parent1);
db.parents.save(parent2);
db.parents.save(parent3);
db.parents.save(parent4);
db.parents.save(parent5);
db.parents.save(parent6);
print("***********saving teachers*********");
db.teachers.save(teacher1);
db.teachers.save(teacher2);
db.teachers.save(teacher3);
db.teachers.save(teacher4);
print("***********saving courses*********");
db.courses.save(course1);
db.courses.save(course2);
db.courses.save(course3);
db.courses.save(course4);
print("***********saving coursesclasses*********");
db.courseclasses.save(courseclasses1);
db.courseclasses.save(courseclasses2);
db.courseclasses.save(courseclasses3);
db.courseclasses.save(courseclasses4);
print("SCRIPT FINISHED");
