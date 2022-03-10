var mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
var Schema = mongoose.Schema;
var x=100;
var userSchema = new Schema({
      
    name:{
        type: String,
        default: ''
    },
   
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    
    
},

    {timestamps:true}
);
userSchema.plugin(AutoIncrement, {inc_field: 'custId'});
Users= mongoose.model('User', userSchema);
module.exports = Users