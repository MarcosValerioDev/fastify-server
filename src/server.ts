import { app } from './app'

async function bootstrap() {

  await app.listen({
    port: Number(process.env.PORT) || 3000, host: '0.0.0.0'
  })

  console.log(
    'Server Running'
  )
}

bootstrap()