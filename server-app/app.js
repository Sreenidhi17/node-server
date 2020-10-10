const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello Friends! \n Heyyyyy.... welcome to my page \n This is Sreenidhi Greeting you Have a good day :)\n')
})

app.listen(3000, () => {
  console.log('Listening on port 3000!')
})
