const express = require('express')
const logger = require('./middleware/logger')
const {convertQueryToArray, removeCommas} = require('./middleware/cal_functions')
app = express()


app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(logger)

app.get('/mean/:nums', (req, res) => {
    const inputQuery = removeCommas(req.params.nums)
    const workingArr = convertQueryToArray(inputQuery)

    // console.log(workingArr)
    const result = workingArr.reduce((acc, cur) => acc + cur, 0)
    return res.send(`${result}`)
    }
    )



app.get('/median/:nums', (req, res) => {
    const inputQuery = removeCommas(req.params.nums)
    const workingArr = convertQueryToArray(inputQuery)

    workingArr.sort()
    
    if (workingArr.length % 2 !== 0){
        let ind = Math.ceil(workingArr.length / 2)
        return res.send(`The median is ${workingArr[ind - 1]}`)
    } else {
        let ind = Math.ceil(workingArr.length / 2)
        return res.send(`The median is ${(workingArr[ind - 1] + workingArr[ind]) / 2} `)
    }

})

app.get('/mode/:nums', (req, res) => {
    const inputQuery = removeCommas(req.params.nums)
    const workingArr = convertQueryToArray(inputQuery)
    
    // console.log(workingArr)
    const result = workingArr.reduce((acc, cur) => (acc + cur), 0)
    return res.send(`${result / workingArr.length}`)

})


app.use((err, req, res, next) => {
    res.locals.error = err;
    const status = err.status || 500;
    res.status(status);
    res.render('error');
  });

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})