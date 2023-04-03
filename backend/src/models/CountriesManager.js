const AbstractManager = require('./AbstractManager')

class CountriesManager extends AbstractManager {
  constructor() {
    super({ table: 'countries' })
  }

  browseAll() {
    return this.database.query(
      `select * from  ${this.table} as ch INNER JOIN houses as h ON ch.houses_id = h.id `
    )
  }

  insert(country) {
    return this.database.query(
      `insert into ${this.table} (firstname, lastname, imageUrl, houses_id) values (?,?,?,?)`,
      [country.firstname, country.lastname, country.imageUrl, country.houses_id]
    )
  }

  update(country) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [country.title, country.id]
    )
  }
}

module.exports = CountriesManager
