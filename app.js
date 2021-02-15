var time = 0;

// setInterval(function(){
//   time+=2;
//   console.log(time + " seconds have passed");
// }, 2000);

var timer = setInterval(function(){
  time+=2;
  console.log(time + " seconds have passed");
  if(time > 5){
    clearInterval(timer)
  }
}, 2000);

//printing the current directory name
console.log(__dirname)
