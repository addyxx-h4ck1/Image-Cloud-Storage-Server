const path = require('path')
const { sendToCloudinary } = require('../utils/send-to-cloudinary')

const handleImage = async (req, res) => {
  const file = req.files.image
  //store image on server temporarily
  file.mv(path.join(__dirname, '..', 'images', `${file.name}`), (err) => {
    if (err) return console.log(err)
  })
  //call send to cloudinary func
  try {
    const result = await sendToCloudinary(file.name)
    res.status(201).json(result)
    console.log(result)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}

module.exports = { handleImage }
