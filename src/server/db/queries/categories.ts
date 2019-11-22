import {Query} from '../index'

const getAllCategories= async ()=>Query('SELECT * from Categories')

const getOneCategory = async (id:number)=>Query('SELECT * from Categories WHERE id=?', [id])

export default{
    getAllCategories,
    getOneCategory
}