import mongoose from "mongoose";
import config from '../../config.json'

export function connect(){
  mongoose.connect(config.database.url)
}