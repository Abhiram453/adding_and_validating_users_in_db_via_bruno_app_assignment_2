const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()
const connection=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Connected to DB")
    } catch (error) {
        console.log(error.message)
    }
}
connection()
module.exports=connection