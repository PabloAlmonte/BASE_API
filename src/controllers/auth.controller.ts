import AuthServiceInstance, { AuthService } from "../services/auth.service"
import CustomParameterizedContext from "../shared/ParameterizedContext"
import Joi from 'joi'
import CustomError from "../shared/CustomError"
import { Errors } from "../shared/enum/Errors"

class AuthController {
  private authService: AuthService

  constructor(authService: AuthService){
    this.authService = authService
  }

  signIn(ctx: CustomParameterizedContext) {
    const { body } = ctx.request

    const schema = Joi.object({
      email: Joi.string().required().email(),
      password: Joi.string().required().min(8)
    })

    const validation = schema.validate(body)

    if (validation.error){
      let err = new CustomError(Errors.badRequest, validation.error.name, validation.error.message)
      ctx.error(err)

      return;
    }

    try {
      const result = this.authService.signIn(body.email, body.password)
      ctx.success(result)
    }catch(e){
      ctx.error(e as CustomError)
    }
  }
}

export default new AuthController(AuthServiceInstance)
