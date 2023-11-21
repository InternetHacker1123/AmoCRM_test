const express = require('express')
const AmoCRM_logic = require("./AmoCRM_logic")
const AccessToken = require("./AccessToken")
const app = express()
app.use(express.json())
const port = 80
let access_token


app.get('/', (req, res) => {
  res.send('WebApp AmoCRM_contacts')
})

app.get('/contacts', (req, res) => {
  const userName = req.query.name
  const userPhoneNumber = req.query.phone
  const userEmail = req.query.email

  if (userName == null || userPhoneNumber == null || userEmail == null) {
    res.status(400).send("not all request parameters are specified or the parameters are specified incorrectly")
  } else {
    res.status(200).send("")
    AmoCRM_logic.GetContact(userName, userPhoneNumber, userEmail, access_token);
  }
})
async function start() {
  try {
    access_token = await AccessToken.sendPostRequest();
  } catch (err) {

  }
}


start();

setInterval(async () => {
  console.log("work")
  access_token = await AccessToken.sendPostRequest()
}, 80000000)



app.listen(port)
