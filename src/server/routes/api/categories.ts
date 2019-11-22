import * as Router from 'express'
import db from '../../db'
const router=Router()

router.get('/', async (req, res)=>{
    try{
        let categories= await db.Categories.getAllCategories()
        res.json(categories)
    }catch(e){
        console.log(e);
        res.sendStatus(500).json("NOPE")
    }
})

router.get('/:id', async (req,res)=>{
    try{
        let id= req.params.id
        let category= await db.Categories.getOneCategory(id);
        res.json(category)
    }catch(e){
        console.log(e)
        res.sendStatus(500).json('nope')
    }
})

export default router