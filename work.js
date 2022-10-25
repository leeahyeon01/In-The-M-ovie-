import fs from 'fs';
import path from 'path';


fs.readFile("./public/index.html", "utf-8", (err, data) => {
    for (let i = 0; i < data.length; i++) {
      console.log(`data[${i}] : ${data[i]}`);
      // i = 417, 418사이가 root태그 안
    }

  //console.log(data + "hello minho");  
});
