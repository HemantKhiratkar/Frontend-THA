let name1 = {
    firstname: "A",
    lastname: "B",
}
let printfullname = function (city, state) {
    console.log(this.firstname + " " + this.lastname + " from " + city +", " +state);
}

let name2 = {
    firstname: "C",
    lastname: "D",
}

//call
printfullname.call(name1, "Nagpur" , "Maharashtra");

//apply
printfullname.apply(name2 ,["Mumbai" , "Maharashtra"]);

//bind
let printname = printfullname.bind(name1 , "Mumbai" , "Maharashtra");
console.log(printname);
printname();