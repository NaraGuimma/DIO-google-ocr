const express = require('express')
const multer = require('multer')
const ocr = require('./google-ocr')

const app = express()

const upload = multer({ dest: './upload' })


app.set('view engine', 'ejs')
app.get("/dio/ocr/demo", function (req, res) {
  res.render('index')
})

app.post("/dio/ocr/demo", upload.single('formFile'), async function (req, res) {
  const response = await ocr.extract(req.file.path, req.file.mimetype)
  res.send({ response })

  // res.json({response})
  // res.end(`${response}`)
})


app.listen(3000, function () {
  console.log("working")
})