import { Router, express } from 'express';
const router =  express.Router()

router.route('/').get((req,res)=>{
    res.send("all items")
})

module.exports = router
