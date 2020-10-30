const bodyParser = require('body-parser')
const express = require('express')
const nodemailer = require('nodemailer')
require('dotenv').config()

const app = express()
app.use(bodyParser.urlencoded())

const contactAddress = 'issadiapro@gmail.com'

const mailer = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'issadiapro@gmail.com',
    pass: 'shyrone59'
  }
})

app.post('/contact/send', function (req, res) {
  mailer.sendMail(
    {
      from: req.body.name + ' ' + req.body.surname,
      to: [contactAddress],
      subject: req.body.category || '[No subject]',
      html: req.body.message || '[No message]'
    },
    function (err, info) {
      if (err) return res.status(500).send(err)
      res.json({ success: true })
    }
  )
})

app.listen(3000)
