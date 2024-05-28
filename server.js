const express = require('express')
const app = express()
const cors = require('cors')
const fileUpload = require('express-fileupload')
const port = process.env.PORT || 3000
const uploadRouter = require('./routes/upload')

//middleware
app.use(cors())
app.use(express.static('./public'))
app.use(fileUpload({ createParentPath: true }))
app.use(express.json())

//routes
app.use('/api/v1/upload', uploadRouter)

//start server
app.listen(port, () => console.log(`server is running on port ${port}`))
