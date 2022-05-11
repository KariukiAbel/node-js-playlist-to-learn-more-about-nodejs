const fs = require('fs');

//doing all the above asynchroniously
fs.mkdir('New folder',(err)=>{
  if (err) {
console.log(err);
  }
  fs.readFile('text.txt', 'utf8',(err, data)=>{
    if (err) {
      console.log(err + " reading error");
    }
    fs.writeFile('./New folder/text1.docx', data, (err)=>{
      console.log("Write error "+ err);
    })
  });
});

//removing the file and directory asynchroniously
fs.unlink('./New folder/text1.docx', (err)=>{
  if (err) {
    console.log('Could not delete file because ' + err);
  }
  fs.rmdir('New folder', (err)=>{
    if (err) {
      console.log('Error removing directory '+err);
    }
  })
})
