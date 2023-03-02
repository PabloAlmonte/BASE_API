import Koa from 'koa'
import cors from '@koa/cors'
import koaBody from 'koa-body'
import config from '../config.json'

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

const server = app.listen(config.port, () => {
  console.log(`Server running on port: ${config.port}`)
}).on('error', (err) => {
  console.error(err)
})

export default server