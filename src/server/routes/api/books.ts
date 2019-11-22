import {Router} from 'express'
import db from '../../db'
import {isAdmin} from '../../middleware/authCheckpoints'

 const router= Router();

//logic to get all books from the db
router.get('/', async (req, res)=>{
    try{
        let books = await db.Books.getAllBooks()
        res.json(books)
        console.log(books)
    }catch(e){
        console.log(e);
        res.sendStatus(500).json("NOPE")
    }
})

router.get('/:id', async (req, res)=>{
    try{
        let id= req.params.id
        let [book]:any = await db.Books.getOneBook(id)
        res.json(book)
    }catch(e){
        console.log(e);
        res.sendStatus(500).json("NOPE")
    }
});

router.post('/', async (req, res)=>{
    try{
        let title= req.body.title
        let author= req.body.author
        let category = req.body.categoryid
        let newBook= await db.Books.addNewBook(title, author, category)
        res.json(newBook)
    }catch(e){
        console.log(e);
        res.sendStatus(500).json("NOPE")
    }
})

router.put('/:id', async (req, res)=>{
    try{
        let title= req.body.title
        let author= req.body.author
        let category = req.body.categoryid
        let id = req.params.id
        let newBook= await db.Books.editBook(title, author, category, id)
        res.json(newBook)
    }catch(e){
        console.log(e);
        res.sendStatus(500).json("NOPE")
    }
})

router.delete('/:id', async (req, res)=>{
    try{
        let id= req.params.id
        let [book]:any = await db.Books.deleteBook(id)
        res.json(book)
    }catch(e){
        console.log(e);
        res.sendStatus(500).json("NOPE")
    }
});



export default router
