var no_of_students=[]
function submit()
{
    var display_students=[];
for(var j=1; j<=4; j++)
{
    var student_1=document.getElementById("Name_of_the_student_"+j).value;
    console.log(student_1);
    no_of_students.push(student_1);
}
 console.log(no_of_students);

var lenght_of_no_of_students=no_of_students.length;
console.log(lenght_of_no_of_students);
for(var k=0; k< lenght_of_no_of_students; k++)
{
  display_students.push("name- "+no_of_students[k]);
  console.log(display_students);
}
console.log(display_students);
document.getElementById("displayname").innerHTML=display_students;
var remove_comas=display_students.join(" ");
document.getElementById("Display_names_without_comas").innerHTML=remove_comas;
 document.getElementById("Results").style.display="none";
 document.getElementById("sort").style.display="inline-block";
}
function sorting()
{
    no_of_students.sort();
    console.log(no_of_students);
   var display_students_sorting=[];
   var lenght_of_no_of_students=no_of_students.length;
   console.log(lenght_of_no_of_students);
   for(var k=0; k<lenght_of_no_of_students; k++)
   {
       display_students_sorting.push("name- "+no_of_students[k]);
       console.log(display_students_sorting);
   }
   var remove_comas=display_students_sorting.join(" ");
console.log(remove_comas);
document.getElementById("Display_names_without_comas").innerHTML=remove_comas;
}