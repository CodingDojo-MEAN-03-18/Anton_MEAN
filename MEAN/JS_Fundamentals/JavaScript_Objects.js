/*  Challenge 1 - Print all of the students and their cohort. */

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

for (var key in students){
    console.log(Object.keys(students[0])[0] + ":", students[key].name + ", " , Object.keys(students[0])[1] + ":", students[key].cohort);
}


/*Challenge 2 Print out the below object to match the example. */
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

console.log("EMPLOYEES");

var len = 0;
var num = 1;
for (var key in users["employees"]){
    len = users["employees"][key].last_name.length + users["employees"][key].first_name.length
    console.log(num+" - "+users["employees"][key].last_name+", "+users["employees"][key].first_name+" - "+len)
    len = 0;
    num++;
}

num = 1;
console.log("MANAGERS");
for (var key in users["managers"]){
    len = users["managers"][key].last_name.length + users["managers"][key].first_name.length
    console.log(num + " - " + users["managers"][key].last_name + ", " + users["managers"][key].first_name + " - " + len)
    len = 0;
    num++;
}