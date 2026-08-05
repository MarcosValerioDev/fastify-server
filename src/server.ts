import { app } from './app'

async function bootstrap() {

  await app.listen({
    port: 3333,
    host: '0.0.0.0'
  })

  console.log(
    'Server Running'
  )
}

bootstrap()