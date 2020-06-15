const fs = require('fs');
const path = require('path');
fs.readdir('./', (err, files) => {
  files.forEach((file, index) => {
    if (file.endsWith('html')) {
      fs.rename(path.basename(file), 'index.html', (err) => {
        if (err) throw err;
        console.log('rename html');
      })
    } else if (fs.lstatSync(path.basename(file)).isDirectory()) {
      fs.rename(path.basename(file), './assets', (err) => {
        if (err) throw err;
        console.log('rename dir');

      })
    }
  });
  if (err) throw err;
})
//if (!fs.existsSync('./assets')) {
//  fs.mkdirSync('./assets');
//};

if (fs.existsSync('./assets')) {
  if (!fs.existsSync('./assets/img')) {
  fs.mkdirSync('./assets/img');
};
  fs.readdir('./assets', (err, files) => {
  files.forEach((file, index) => {
    if (file.endsWith('jpeg') || file.endsWith('jpg') || file.endsWith('png') || file.endsWith('svg') || file.endsWith('gif') || file.endsWith('webp')) {
      fs.rename('./assets/' + file, './assets/img/' + file, (err) => {
        if (err) throw err;
        console.log('rename completed');
      });
    } else if (file.endsWith('Без названия')) {
      let fileArray = file.split('.');
      //			console.log(fileArray);
      let newname = fileArray.slice(0, (fileArray.length - 1)).join('.');
      fs.rename('./assets/' + file, './assets/' + newname, (err) => {
        if (err) throw err;
        console.log('rename completed');
      });
    };
  });
});
};

