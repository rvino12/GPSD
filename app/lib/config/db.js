import mongoose from "mongoose";
const ConnectDB = async()=>{
    try {
        await mongoose.connect('process.env.MONGP_URI')
 console.log('momgo is connected with ${mongoose.connection.host');
    } catch (error) {
        mongoose.disconnect()
        process.exit(1)
        
    }
}