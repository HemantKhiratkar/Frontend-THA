var student = 
{ 
  name : "David Rayy", 
  class : "VI", 
  rollno : 12 
}
var ans = "";
  for (const key in student)
    ans += `${key},`;
    console.log(ans.substring(0, ans.length - 1));
console.log("");