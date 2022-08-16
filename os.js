const os= require('os');


const user=os.userInfo();
console.log(user);


// system current time

console.log(`up time is ${os.uptime()} seconds`);

console.log(__dirname);
console.log(__filename);

//os detail

let osdetail={
    name:os.type(),
    release:os.release(),
    tmem:os.totalmem(),
    fmem:os.freemem()
}

console.log(osdetail);