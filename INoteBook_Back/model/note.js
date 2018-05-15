let mongoose = require('mongoose')
let Schema = mongoose.Schema;   //  创建模型
let userSchema = new Schema({
    userName: String,
    pwd: String,
    role: String
}); //  定义了一个新的模型，但是此模式还未和users集合有关联

module.exports = mongoose.model('userInfo', userSchema, 'userInfo'); //  与users集合关联