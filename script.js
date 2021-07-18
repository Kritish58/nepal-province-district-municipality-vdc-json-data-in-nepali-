const fs = require('fs');

const rawData = fs.readFileSync('raw.json');
const data = JSON.parse(rawData);

const pro = {};
for (let i in data) {
   let dis = {};
   for (let item of data[i]) {
      dis[item[0]] = item[1];
   }

   //* ('१२३४५६७');

   pro[
      `प्रदेश न. ${parseInt(i, 10) + 1}`
         .replace(1, '१')
         .replace(2, '२')
         .replace(3, '३')
         .replace(4, '४')
         .replace(5, '५')
         .replace(6, '६')
         .replace(7, '७')
   ] = dis;
}

fs.writeFileSync('provinces.json', JSON.stringify(pro));
