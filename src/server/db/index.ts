import * as mysql from 'mysql'
import config from '../config'
//import all tables
import Books from './queries/books'
import Categories from './queries/categories'

//create connection to db
export const pool = mysql.createPool(config.mysql)

//query helper function
export const Query = (query: string, values?: any) => {

    return new Promise((resolve, reject) => {
        pool.query(query, [values], (err, results) => {
            if (err) {
                reject(err)
            } else {
                resolve(results)
            }
        })
    })
}

export default {
    Books,
    Categories
}
