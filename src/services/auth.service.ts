import { Model } from "mongoose"
import Account, { IAccount } from "../models/Account"
import ApiError from "../shared/CustomError"
import { Errors } from "../shared/enum/Errors"

export class AuthService{
  private accountModel: Model<IAccount>

  constructor(accountModel: Model<IAccount>){
    this.accountModel = accountModel
  }

  async signIn(email: String, password: String){
    const account = await this.accountModel.findOne({ email })

    if (!account || !account.testPassword(password)) {
      throw new ApiError(Errors.forbidden, 'Forbidden', 'Email or password incorrect')
    }

    return account
  }
}

export default new AuthService(Account)