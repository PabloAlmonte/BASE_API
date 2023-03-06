import { model, Schema } from "mongoose"

export interface IAccount {
  email: String
  password: String
  firstName: String
  lastName: String
  testPassword: (password: String) => Boolean
}

const AccountSchema = new Schema<IAccount>({
  email: { type: String, required: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true }
})

AccountSchema.methods.testPassword = function(password: String){
  // return bcrypt.compare(password, this.password)
  return true
}

export default model<IAccount>('Account', AccountSchema)