const mongoose = require("mongoose");
const Msg = require('./models/messages')
const chatRoute = require("./routes/chatroute"); 
const messageRoute = require("./routes/messageroute");
const userRoute = require("./routes/userroute");
const express = require('express')
const app = express()

const io = require("socket.io")(3000, {
    cors: {
      origin: "*",
    },
  });

const mongoDB = "mongodb+srv://gautami:12345@messagingcluster.jfmrdzh.mongodb.net/messagingrr?retryWrites=true&w=majority";
mongoose.connect(mongoDB).then(()=>{
  console.log("connected")
})
app.use(express.json())
app.use("/api/chat",chatRoute)
app.use("/api/message",messageRoute)
app.use("/api/user", userRoute)
app.route("/").get((req,res)=>{
  res.json("hello world")
})

const users = {}
io.on('connection', socket => {
    socket.on('new-user', name => {
      console.log(socket.id)
      console.log(name)
      users[socket.id] = name
      socket.broadcast.emit('user-connected', name)
      console.log(users[socket.id])
      
    })
    
    socket.on('send-chat-message', message => {
      socket.broadcast.emit('chat-message', { message: message, name: users[socket.id] })
      
    })
      
  
    
    socket.on('disconnect', () => {
      socket.broadcast.emit('user-disconnected', users[socket.id])
      delete users[socket.id]
    })
  })
  

app.listen(8000, "0.0.0.0", ()=>{
  console.log("Server Connected")
})

