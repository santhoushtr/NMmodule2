

/* const person = {};

person["firstName"] = "San";
person["LastNamae"] = "thoush";
person.age = 24;
person.designation = "fullstack developer";
console.log(person.firstName+ 'works ' + person.designation);


const person1 = {firstname: 'san', lastname:'thoush'};
const person2 = {firstname: 'aaa', lastname:'bbb'};
const personCollection = [person1, person2];
console.log(personCollection);

 // object constructors

 const school = new Object();
 school.name = "sunbeam";
 school.grade = "A";
 school.address = "vellore";
 console.log(school); 

 const student = new Object();
 student.name = "siddarath";
 student.percentage = "78%";
 student.greet = function () {
    return "Hello World"
 };

 const student = {
    name: "santhoush",
    percentage: "78%",
    greet: function ()  {
    return this.name + ", Hello World"; 
    },
 };
 console.log(student.greet());
 */

 function person(firstName,lname,age,contactNumber) {
    this.firstName = firstName;
    this.lname = lname;
    this.age = age;
    this.contactNumber = contactNumber;
 }
 const p1 = person("san","thoush",'27',948696770);
 console.log(p1);
