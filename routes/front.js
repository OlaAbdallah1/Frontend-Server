const express = require('express')
const request = require ('request')
const router = express.Router()

router.use('/books/info/:id', async(req, res)=>{
    const id = req.params.id
    const url = 'http://192.168.56.102:3008/books/info/'+id
    request({url, json:true}, (error,  {})=>{
           if(error){
               return res.staus(404).send(error)
           }
           return res.status(200).send(body)
        })
})
router.use('/books/search/:topic', (req, res)=>{
    const topic = req.params.topic
    const url = 'http://192.168.56.102:3007/books/search/'+topic
    request({url, json:true}, (error,  {body})=>{
           if(error){
               return res.staus(404).send(error)
           }
           return res.staus(200).send(body)
        })
})

router.patch('/books/:id', (req, res)=>{
    const id = req.params.id
    const url = 'http://192.168.56.102:3007/books/'+id
    request({url, json:true, method: 'PATCH', body: req.body}, (error,  {body})=>{
            if(error){
               return res.status(404).send(error)
           }
           return res.status(200).send(body)
        })
})

router.use('/books/purchase/:id', (req, res)=>{
    const id = req.params.id
    const url = 'http://192.168.56.101:3008/books/purchase/'+id
    request({url, json:true}, (error, {body})=>{
        if(error){
            return res.send(error)
        }
        return res.status(200).body
    })
})

module.exports = router 