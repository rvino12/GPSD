const { default : mongoose } =require('mongoose');

const schema = new mongoose.schema({
    name:{
        type:String,
        required:[true,'name is required']
    },
    email:{
        type:String,
        required:true
    },
     password:{
        type:String,
        required:true
    },
   

},
{
    timestamps:true
})
schema.pre('save',async function(next){
    const user = this;
    if (user.ismodifed('password')){
        user.password =await bcrypt.hash(user.password,10)

    } 
    next();

})
schema.methods.confirmpassword = async function(string_password){
    const isMatch = bcrypt.comapare(string_password,this.password);
    return isMatch;
}
export const usermodel =mongoose.models.usrer ||  mongoose.model('user',schema);
