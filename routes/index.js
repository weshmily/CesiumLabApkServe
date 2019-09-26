var express = require('express');
var path = require('path');
var fs = require('fs');
var sqlite3 = require('sqlite3').verbose();
var router = express.Router();
/* GET home page. */
var filePath = path.resolve('./pak');


fs.readdir(filePath, function (err, files) {
  if (files.length === 0) {
    console.log("\033[31m *******pak文件夹没有pak文件******* \033[0m")
  } else {
    routerArr(files)
  }
})

var sqlite3obj = {};
function routerArr(files) {
  for (let i = 0; i < files.length; i++) {
    sqlite3obj[files[i].split('.')[0]] = new sqlite3.Database('./pak/' + files[i], function (err) {
      if (err == null) {
        // console.log('*******成功链接' + files[i] + '数据库*******')
        console.log("\033[32m *******成功链" + files[i] + "数据库******* \033[0m")

      } else {
        console.log("\033[32m *******链接" + files[i] + "数据库失败******* \033[0m")
      }
    })
  }
  // sqlite3obj['jiang'].all("select * from infos", function (err, row) {
  //   // console.log(JSON.stringify(row));
  // })

  function gettablename(x, y, z) {
    if (z < 10) {
      return 'blocks'
    } else {
      tx = parseInt(x / 512);
      ty = parseInt(y / 512);
      return 'blocks_' + z + '_' + tx + '_' + ty;
    }
  }

  router.use('/mapserve', function (req, res, next) {
    let key = req.originalUrl.split('/');
    let objkey = key[2];
    let sqlstr = "select * from " + gettablename(key[4], key[5], key[3]) + ' where x=' + key[4] + " and " + ' y=' + key[5] + " and " + ' z=' + key[3]
    sqlite3obj[objkey].get(sqlstr, function (err, row) {
      if (err === null) {
        if (row !== undefined) {
          res.set('Content-Type', 'image/png');
          res.status(200).send(row.tile)
        } else {
          res.set('Content-Type', 'image/png');
          res.status(404).send('Sorry, we cannot find that!');
        }

      } else {
        res.set('Content-Type', 'image/png');
        res.status(404).send('Sorry, we cannot find that!');
      }

    })

  });
  
}

module.exports = router;

