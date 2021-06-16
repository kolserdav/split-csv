import fs from 'fs';
import path from 'path';

const sourcePath = path.resolve(__dirname, '../data/2.csv');
const distPath = path.resolve(__dirname, '../result2');

const stream = fs.createReadStream(sourcePath);
let i = 0;
let fileName = '0.csv';
stream.on('data', (buff) => {
  const dataStr = buff.toString();
  const dsplit = dataStr.split(/"\d{7}"/)
  const tail = dataStr.match(/\d{7}[.\s\S$]+/);
  if (i % 2875 === 0) {
    fileName = `${i}.csv`;
  }
  fs.appendFileSync(`${distPath}/${fileName}`, dataStr);
  i ++;
});

stream.on('end', () => {
  console.log('end');
})