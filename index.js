const express = require('express')
const frontRouter = require('./routes/front.js')

const app = express()
const PORT = process.env.PORT || 3002

app.use(express.json())
app.use(frontRouter)

app.listen(PORT, ()=>{
    console.log('Front server is running on port:'+ PORT)
}) 