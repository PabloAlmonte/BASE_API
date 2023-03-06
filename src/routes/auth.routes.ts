import Router from 'koa-router'
import authController from '../controllers/auth.controller'
import CustomParameterizedContext from '../shared/ParameterizedContext'

const router = new Router({ 
  prefix: '/auth' 
})

router.post('/sign-in', (ctx) => {
  authController.signIn(ctx as unknown as CustomParameterizedContext)
})

export default router