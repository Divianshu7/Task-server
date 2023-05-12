import express from 'express'
const router=express.Router()
router.get('/connect',(req,res)=>{
    console.log("connected")
    res.status(200).send()
})
module.exports=router