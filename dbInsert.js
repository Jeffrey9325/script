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
print("***********creating students*********");
student1= {
"_id" : "1",
"fullName" : "Edgar",
"gender" : "Male",
"dateofBirth" : ISODate("1950-09-16T05:00:00Z"),
"typeDocument" : "DNI",
"documentNumber" : "47856688"
}
student2= {
"_id" : "2",
"fullName" : "Gonzalo",
"gender" : "Male",
"dateofBirth" : ISODate("1960-09-16T05:00:00Z"),
"typeDocument" : "DNI",
"documentNumber" : "46633278"
}
student3= {
    "_id" : "3",
"fullName" : "Marcos",
"gender" : "Male",
"dateofBirth" : ISODate("1950-09-16T05:00:00Z"),
"typeDocument" : "DNI",
"documentNumber" : "99999999",
}
student4= {
    "_id" : "4",
"fullName" : "Marcos",
"gender" : "Male",
"dateofBirth" : ISODate("1950-09-16T05:00:00Z"),
"typeDocument" : "DNI",
"documentNumber" : "77777777",
}
print("***********creating parents*********");
/* parent */
parent1= {
	     "id" : "1",
       "fullName" : "Pedro",
       "gender" : "Male",
       "dateofBirth" : ISODate("1960-03-22T00:00:00Z"),
       "typeDocument" : "DNI",
       "documentNumber" : "55555555",
	      "idStudent" : "1",
	    "idFamily" : "Romero"
};
parent2= {
     	"id" : "2",
       "fullName" : "Maria",
       "gender" : "Male",
       "dateofBirth" : ISODate("1970-03-22T00:00:00Z"),
       "typeDocument" : "DNI",
       "documentNumber" : "99199991",
	    "idStudent" : "1",
	     "idFamily" : "Romero"
};
parent3= {
       "id" : "3",
       "fullName" : "Carlos",
       "gender" : "Male",
       "dateofBirth" : ISODate("1960-03-22T00:00:00Z"),
       "typeDocument" : "DNI",
       "documentNumber" : "15555555",
	      "idStudent" : "1",
	       "idFamily" : "Romero"
};
parent4= {
     	"id" : "4",
       "fullName" : "Juan",
       "gender" : "Male",
       "dateofBirth" : ISODate("1980-03-22T00:00:00Z"),
       "typeDocument" : "DNI",
       "documentNumber" : "54770499",
	     "idStudent" : "2",
	     "idFamily" : "Quispe"
};
parent5= {
	     "id" : "5",
       "fullName" : "Ines",
       "gender" : "Female",
       "dateofBirth" : ISODate("1970-03-22T00:00:00Z"),
       "typeDocument" : "DNI",
       "documentNumber" : "99914589",
	      "idStudent" : "2",
	       "idFamily" : "Quispe"
};
parent6= {
       "id" : "6",
       "fullName" : "Andres",
       "gender" : "Male",
       "dateofBirth" : ISODate("1990-03-22T00:00:00Z"),
       "typeDocument" : "DNI",
       "documentNumber" : "51452368",
	     "idStudent" : "2",
     	"idFamily" : "Quispe"
};
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
print("SCRIPT FINISHED");
