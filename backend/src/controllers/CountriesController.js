const models = require('../models')

const browse = (req, res) => {
  models.countries
    .findAll()
    .then(([rows]) => {
      res.send(rows)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

const add = (req, res) => {
  const country = req.body
  console.info(country)
  // TODO validations (length, format...)

  models.countries
    .insert(country)
    .then(([result]) => {
      res.json({ id: result.insertId, ...country }).sendStatus(201)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}
module.exports = { browse, add }
