const {readFilesync, writeFilesync} = require('fs');


const first=require('./ok/hello1.txt','utf8');


/*

writeFilesync(
    './ok/hello1.txt',
    `here is result: ${first}`
)
*/


readFilesync('./ok/hello1.txt','utf8',function(err,result){
    if(err){
        console.log(err);
        return
    }
    else{
        console.log(result);
    }
})