const express = require('express')
const logger = require('./middleware/logger')
app = express()


app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(logger)

app.get('/mean/:nums', (req, res) => {
    res.json({ nums: req.params.nums })
})
app.get('/median/:nums', (req, res) => {

})
app.get('/mode/:nums', (req, res) => {

})




const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})