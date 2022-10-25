import path, { dirname } from 'path';
import readFileSync from 'fs';
import { readFile } from 'fs';


//console.log(path);
//console.log(path.resolve());//절대경로
//console.log(path.dirname);//절대경로

const __dirname = path.resolve();
console.log(__dirname);
const html = '/public/index.html';
const locationPath = JSON.stringify(__dirname);
console.log(locationPath);
console.log(typeof locationPath);
const addr = 'C:/Users/Administrator/Desktop/projectExpress/projectCLocalModule/public/index.html';

// console.log(path);
 //console.log(typeof path);
// console.log('-------------------------------');
// console.log(path.join());
// console.log(path.join(__dirname, html));

readFile(path.join(locationPath), 'utf-8', (err, data) => {
  if (err) return console.log(err);
  console.log(data);
});









//readFile(path.join('경로'), '렌더링방식', func);

// console.log(readFile);
// console.log(typeof readFile);
// console.log('-------------------------------');
// console.log(readFileSync);
// console.log(typeof readFileSync);
// console.log('========================================');
// console.log(readFileSync.promises);
// console.log(typeof readFileSync.promises);

// console.log(readFileSync.promises(path(__dirname, html)));

//console.log(readFileSync(path(__dirname, html)));
//console.log(readFile(path.join(__dirname, html)));
