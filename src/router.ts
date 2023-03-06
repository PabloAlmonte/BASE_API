import Router     from 'koa-router'
import requireDir from 'require-dir'

const router = new Router()

Object.values(requireDir('./routes'))
  .map    ((r) => r.default)
  .forEach((r) => router.use(r.routes()))

export default router
