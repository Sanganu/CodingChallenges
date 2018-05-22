const mongoose =require("mongoose")
const Schema = mongoose.Schema


const gameSchema = new Schema({
    userid: {
      type: Schema.Types.ObjectId,
      
    },
    gameid: {
      type: Schema.Types.ObjectId
    },
    score: {
      type: Number
    }
});

const gamedetails = mongoose.modal("gamedetails",gameSchema);
module.exports = gamedetails;
