import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'
import wishRoutes from './routes/wishlist.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.use(bodyParser.json({ limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({ limit:"30mb",extended:true}))
app.use(cors())
app.use('/posts',postRoutes)
app.use('/user',userRoutes)
app.use('/wishlist',wishRoutes)

app.get('/',(req,res)=>{
  res.send("Hello there i am index.js of server side")
})

const PORT = process.env.PORT || 8080

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));


/*
mongoose.connect(CONNECTION_URL, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => 
{
    console.log('connected...')
})




app.listen(PORT, () => 
{
    console.log('Server started')
})
*/
