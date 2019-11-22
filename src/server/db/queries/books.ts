import { Query } from '../index'

export const getAllBooks = async ()=> Query('SELECT books.*, Categories.name from Books JOIN Categories on Books.id = Categories.id WHERE categoryid = Categories.id')

export const getOneBook = async (id: number)=> Query ('SELECT books.*, Categories.name from Books JOIN Categories on Books.id = Categories.id WHERE books.id=?', [id])

export const addNewBook= async (title:string, author:string, categoryid:number)=> Query("INSERT INTO books (title, author, categoryid) VALUES(?)", [title, author, categoryid])

export const editBook = async (title:string, author:string, categoryid: number, id:number) => Query (`UPDATE books SET title=?, author='${author}', categoryid='${categoryid}' WHERE id=${id}`,[title])

export const deleteBook = async (id:number)=>Query('DELETE from books WHERE id=?', [id])

export default {
    getAllBooks,
    getOneBook, 
    addNewBook,
    editBook,
    deleteBook
}