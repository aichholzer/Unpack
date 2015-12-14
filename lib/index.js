'use strict';


var fs = require('fs'),
    buckle = require('buckle'),
    mkdirp = require('mkdirp'),
    path = require('path').normalize(__dirname + '/../' + (process.argv[2] || 'files'));

fs.readdirSync(path).forEach(function (file) {
  if (file.match(/(.+)\.zip?$/)) {
    fs.stat(path + file, function (err) {
      var fileName = file.replace('.zip', '').split('.'),
          folderPath = path + '/' + fileName.join('/');

      mkdirp(folderPath, function(err) {
        buckle.open(path + '/' + file, folderPath, function(err, result) {
          if (err) {
            console.error(err);
          } else {
            //fs.unlinkSync(path + '/' + file);
            console.log(' ✓ Processed file:', file);
          }
        });
      });
    });
  }
});