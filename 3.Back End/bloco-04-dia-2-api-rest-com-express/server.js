const express = require('express')
const app = express()

app.get('/',  (req, res) => {
  console.log('Here')
  res.json({message: 'error'})
  // res.download('./server.js')
})

app.listen(3000, () => {
  console.log('The application is running on localhost:3000!')
})