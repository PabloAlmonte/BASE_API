import Koa from 'koa'
import cors from '@koa/cors'
import koaBody from 'koa-body'
import config from '../config.json'
import ResponseMiddleware from './middleware/response'
import router from './router'

const app = new Koa()

app.use(cors({
  credentials: true, 
  origin: '*'
}))

app.use(koaBody({
  multipart: true,
  jsonLimit: '10mb',
  textLimit: '10mb'
}))

app.use(ResponseMiddleware)
app.use(router.routes())

const server = app.listen(config.port, () => {
  console.log(`Server running on port: ${config.port}`)
}).on('error', (err) => {
  console.error(err)
})

export default server