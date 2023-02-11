const Message = require("../models/messages")
const sendMessage = async(req,res)=>{
    const {msg,ChatId} = req.body;
    if(!message||!chatId){
        res.status(400).json("error")
    }
    var newMessage = {user : req.user._id, }
   try {
    await Message.create({msg:msg})

    


    return res.status(200).json(`message added ${req.body.msg}`)
   } catch (error) {
    console.log(error.Message)
   }

}

const fetchMessage = async(req, res) => {
    try {
        await Message.find({id: req.params.id}).then(results => {res.send(results)})
    } catch (error) {
        console.log(error.Message)
    }
}
module.exports= {sendMessage, fetchMessage}