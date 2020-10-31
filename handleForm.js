const express = require('express')
var cors = require('cors')
const nodemailer = require('nodemailer')
const dotenv = require('dotenv')
require('dotenv').config()

if (process.env.NODE_ENV !== 'production') dotenv.config()

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

const gmailAddress = process.env.GMAIL_ADDRESS
const gmailPass = process.env.GMAIL_PASSWORD

console.log(gmailAddress)

const mailer = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: gmailAddress,
    pass: gmailPass
  }
})

app.post('/contact/send', function (req, res) {
  console.log(req.body)
  mailer.sendMail(
    {
      from: req.body.email,
      to: [gmailAddress],
      subject: req.body.category || '[No subject]',
      html: req.body.message || '[No message]'
    },
    function (err, info) {
      if (err) return res.status(500).send(err)
      res.json({ success: true })
    }
  )
})

app.listen(5000)
