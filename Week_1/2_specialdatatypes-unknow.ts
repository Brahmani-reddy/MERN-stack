//Let us use "unknown" now

let herName : unknown = "Madhavi";
// console.log("Length of herName is:" + herName.length); ---> throwed this => error TS18046: 'herName' is of type 'unknown'.;
herName = "Pranavi reddy";
if(typeof herName === "string"){
  console.log("Length of herName is:" + herName.length);
}else{
  console.log("Data type of herName is: "+ typeof herName);
}
