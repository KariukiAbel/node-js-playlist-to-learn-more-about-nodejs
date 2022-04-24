var time = 0;
var count = require('./count')

// setInterval(function(){
//   time+=2;
//   console.log(time + " seconds have passed");
// }, 2000);

// var timer = setInterval(function(){
//   time+=2;
//   console.log(time + " seconds have passed");
//   if(time > 5){
//     // clearInterval(timer)
//   }
// }, 2000);

//printing the current directory name
console.log(__dirname);

//printing the absolute path of my file
console.log(__filename);
console.log(count(['abel', 'james', 'jane']));
