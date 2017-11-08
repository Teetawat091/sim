const express = require('express');
const fileupload = require('express-fileupload');
const routing = express();

routing.use(fileupload());

routing.post('/upload', function(req, res) {
  if (!req.files)
    return res.status(400).send('No files were uploaded.');

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.sampleFile;

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv('/image/filename.jpg', function(err) {
    if (err)
      return res.status(500).send(err);

    res.send('File uploaded!');
  });
});

//use all file in "/" directory naame
routing.use(express.static(__dirname + '/'));
routing.use(express.static(__dirname + '/js'));
routing.use(express.static(__dirname + '/css'));
routing.use(express.static(__dirname + '/avartar'));
routing.use(express.static(__dirname + '/image'));
routing.listen(8000,'127.0.0.1');
